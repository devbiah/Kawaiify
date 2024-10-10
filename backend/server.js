const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(express.json());

let accessToken = ''; // Armazena o token de acesso
let tokenExpiration = 0; // Armazena o tempo de expiração do token

// Função para obter um novo token de acesso
const getAccessToken = async (clientId, clientSecret) => {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', 
            'grant_type=client_credentials', {
                headers: {
                    Authorization: `Basic ${auth}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        accessToken = response.data.access_token;
        tokenExpiration = Date.now() + (response.data.expires_in * 1000); // Atualiza a expiração do token
        return accessToken;
    } catch (error) {
        throw new Error('Failed to fetch access token');
    }
};

// Middleware para garantir que o token está válido
const ensureToken = async (req, res, next) => {
    if (!accessToken || Date.now() >= tokenExpiration) {
        const { clientId, clientSecret } = process.env; // Obtém credenciais do .env
        try {
            await getAccessToken(clientId, clientSecret);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    next();
};

// Endpoint para buscar músicas curtidas
app.get('/api/me/tracks', ensureToken, async (req, res) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.data); // Log para depurar
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch liked tracks' });
    }
});

// Endpoint para buscar recomendações
app.get('/api/recommendations', ensureToken, async (req, res) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                limit: 10,
                seed_genres: 'pop'
            }
        });
        console.log(response.data); // Log para depurar
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recommendations' });
    }
});
// Endpoint para buscar músicas com base na consulta
app.get('/api/search', ensureToken, async (req, res) => {
    const { q, type } = req.query;
    try {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            params: {
                q,
                type,
                limit: 10
            }
        });
        console.log('Resposta do Spotify:', response.data); // Log para depurar
        res.json(response.data); // Retorna a resposta completa
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch search results' });
    }
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
