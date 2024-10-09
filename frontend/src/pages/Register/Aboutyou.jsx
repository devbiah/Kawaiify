import { Container, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import '../../index.css';
import spot from "../../img/spot.png";
import GenderSelection from "../../components/GenderSelection";

const AboutYou = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };

    return (
        <div className="bg-gradient-to-b from-[#9171A2] to-[#CDB9D8] min-h-screen flex items-center justify-center">
            <Container className="flex flex-col items-center">
                <img src={spot} alt="Spot" className="mb-4" />

                <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
                    <p className="text-[#CDB9D8] text-left ">Etapa 2 de 2</p>
                    <p className="text-[#FFFFFF] font-bold text-left text-[20px]">Fale de você</p>

                    <p className="text-[#FFFFFF]">Nome</p>
                    <TextField
                        label="Este nome aparecerá no seu perfil"
                        type="text"
                        required
                        InputProps={{
                            style: {
                                color: '#FFFFFF', // Cor do texto
                            },
                        }}
                        InputLabelProps={{
                            style: { color: '#FFFFFF' }, // Cor do label
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

                    <p className="text-[#FFFFFF]">Data de Nascimento</p>
                    <div className="flex space-x-4">
                        <TextField
                            label="Dia"
                            type="number"
                            required
                            InputProps={{
                                style: {
                                    color: '#FFFFFF', // Cor do texto
                                },
                                inputProps: {
                                    min: 1, // Mínimo de 1
                                    max: 31, // Máximo de 31
                                    onKeyDown: (e) => {
                                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                            e.preventDefault();
                                        }
                                    }
                                },
                            }}
                            InputLabelProps={{
                                style: { color: '#FFFFFF' }, // Cor do label
                            }}
                            sx={{
                                width: 160,
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
                        <TextField
                            label="Mês"
                            type="number"
                            required
                            InputProps={{
                                style: {
                                    color: '#FFFFFF', // Cor do texto
                                },
                                inputProps: {
                                    min: 1, // Mínimo de 1
                                    max: 12, // Máximo de 12
                                    onKeyDown: (e) => {
                                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                            e.preventDefault();
                                        }
                                    }
                                },
                            }}
                            InputLabelProps={{
                                style: { color: '#FFFFFF' }, // Cor do label
                            }}
                            sx={{
                                width: 160,
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
                        <TextField
                            label="Ano"
                            type="number"
                            required
                            InputProps={{
                                style: {
                                    color: '#FFFFFF', // Cor do texto
                                },
                                inputProps: {
                                    min: 1900, // Mínimo de 1900
                                    onKeyDown: (e) => {
                                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                            e.preventDefault();
                                        }
                                    }
                                },
                            }}
                            InputLabelProps={{
                                style: { color: '#FFFFFF' }, // Cor do label
                            }}
                            sx={{
                                width: 160,
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
                    </div>

                    <p className="text-[#FFFFFF]">Gênero</p>
                    <GenderSelection />

                    <button
                        type="submit"
                        className="bg-[#FFFFFF] text-[#A07CAC] rounded-[35px] px-4 py-2 font-semibold"
                        style={{ height: '60px', fontSize: '29px' }}
                    >
                        Inscrever-se
                    </button>
                </form>

            </Container>
        </div>
    );
};

export default AboutYou;
