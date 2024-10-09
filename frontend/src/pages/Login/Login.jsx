import { Link, useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import '../../App.css';
import '../../index.css';
import spot from "../../img/spot.png"; 

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/auth');
  };
  return (
    <div className="bg-gradient-to-b from-[#9171A2] to-[#CDB9D8] min-h-screen flex items-center justify-center">
      <Container 
        className="flex flex-col items-center justify-center p-6" 
        style={{
          backgroundColor: '#FBF5FF', 
          borderRadius: '10px', 
          width: '552px', 
          height: '597px'
        }}
      >
        <img src={spot} alt="Spot" className="mb-4" />
        
        <h1 className="text-4xl mb-12 text-[#9171A2] text-center font-semibold">
          Entrar no Kawaiify
        </h1>
        
        <form className="space-y-4 flex flex-col items-center" onSubmit={handleSubmit}>
          <TextField
            label="Email ou nome de usuário"
            required
            InputProps={{
              style: {
                color: '#9171A2', 
              },
            }}
            InputLabelProps={{
              style: { color: '#9171A2' },
            }}
            sx={{
              width: 430, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#9171A2',
                },
                '&:hover fieldset': {
                  borderColor: '#9171A2', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#9171A2', 
                },
              },
            }}
          />

          <TextField
            label="Senha"
            type="password"
            required
            InputProps={{
              style: {
                color: '#9171A2', 
              },
            }}
            InputLabelProps={{
              style: { color: '#9171A2' },
            }}
            sx={{
              width: 430, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#9171A2',
                },
                '&:hover fieldset': {
                  borderColor: '#9171A2', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#9171A2', 
                },
              },
            }}
          />

          <button 
            type="submit" 
            className="bg-[#A07CAC] text-[#FFFFFF] rounded-[35px] px-4 py-2"
            style={{ height: '60px', width: '430px', fontSize: '29px' }}
          >
            Entrar
          </button>
        </form>
        
        <p className="text-[#9171A2] mt-4 text-[18px]">
          Não tem uma conta? <Link to="/" className="text-[#9171A2] italic font-bold underline">Inscrever-se no Kawaiify</Link>
        </p>
      </Container>
    </div>
  );
};

export default Register;
