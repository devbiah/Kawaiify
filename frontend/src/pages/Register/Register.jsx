import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import '../../App.css';
import '../../index.css';
import spot from "../../img/spot.png";

const Register = () => {
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/create-password');
    };

    return (
        <div className="bg-gradient-to-b from-[#9171A2] to-[#CDB9D8] min-h-screen flex items-center justify-center">
            <Container className="flex flex-col items-center">
                <img src={spot} alt="Spot" className="mb-4" />

                <h1 className="text-6xl mb-10 text-[#FFFFFF] text-center font-bold">
                    Se inscreva e <br /> comece a curtir
                </h1>
                <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
                    <p className="text-[#FFFFFF] font-bold">Endereço de e-mail</p>
                    <TextField
                        label="Email"
                        type="email"
                        required
                        InputProps={{
                            style: {
                                color: '#FFFFFF', // Text color
                            },
                        }}
                        InputLabelProps={{
                            style: { color: '#FFFFFF' }, // Label color
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
                    <br />
                    <button
                        type="submit"
                        className="bg-[#FFFFFF] text-[#A07CAC] rounded-[35px] px-4 py-2 font-bold"
                        style={{ height: '60px', fontSize: '29px' }}
                    >
                        Avançar
                    </button>
                </form>

            </Container>
        </div>
    );
};

export default Register;
