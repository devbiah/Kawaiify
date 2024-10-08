// import { useNavigate } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import './App.css'
import './index.css'

const Register = () => {
//   const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-6xl">Se Inscreva e comece a curtir</h2>
      <form>
        <TextField
          label="Email"
          type="email"
          required
        />
        <button type="submit" className="bg-[#FFFFFF] text-[#A07CAC]" >
          Avançar
        </button>
        </form>
        </div>
  );
};

export default Register;
