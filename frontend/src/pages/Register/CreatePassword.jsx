import { Container, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import '../../index.css';
import spot from "../../img/spot.png";
import { useState } from "react"; 

const CreatePassword = () => {
    const navigate = useNavigate(); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*/])[A-Za-z0-9!@#$%^&*/]{10,}$/;
        
        if (!passwordRegex.test(password)) {
            setError('A senha deve ter pelo menos 1 letra, 1 número ou caractere especial, e 10 caracteres.');
            return;
        }

        navigate('/about-you'); 
    };

    return (
        <div className="bg-gradient-to-b from-[#9171A2] to-[#CDB9D8] min-h-screen flex items-center justify-center">
            <Container className="flex flex-col items-center">
                <img src={spot} alt="Spot" className="mb-4" />

                <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
                    <p className="text-[#CDB9D8] text-left">Etapa 1 de 2</p>
                    <p className="text-[#FFFFFF] font-bold text-left text-[20px]">Crie uma senha</p>
                    
                    <TextField
                        label="Senha"
                        type="password"
                        required
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value); 
                            setError(''); 
                        }}
                        InputProps={{
                            style: {
                                color: '#FFFFFF', 
                            },
                        }}
                        InputLabelProps={{
                            style: { color: '#FFFFFF' },
                        }}
                        sx={{
                            width: 530,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FFFFFF',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FFFFFF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FFFFFF',
                                },
                            },
                        }}
                    />
                    
                    {error && <p className="text-red-500">{error}</p>}

                    <p className="text-[#FFFFFF]">A senha deve ter pelo menos:</p>
                    <ul className="list-disc list-inside text-[#FFFFFF]">
                        <li>1 letra maiúscula</li>
                        <li>1 número ou caractere especial (exemplo: # ? ! &)</li>
                        <li>10 caracteres</li>
                    </ul>

                    <button
                        type="submit"
                        className="bg-[#FFFFFF] text-[#A07CAC] rounded-[35px] px-4 py-2 font-bold"
                        style={{ height: '60px', fontSize: '29px' }}
                    >
                        Avançar
                    </button>
                </form>

                <p className="text-[#ffffff] mt-4 text-[18px]">
                    Já tem uma conta? <Link to="/login" className="text-[#ffffff] italic font-bold underline">Faça login</Link>
                </p>
            </Container>
        </div>
    );
};

export default CreatePassword;
