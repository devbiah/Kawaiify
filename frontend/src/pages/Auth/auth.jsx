import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const inputRefs = useRef([]);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (index, e) => {
        // Referências para os campos de entrada
        const value = e.target.value;

        if (!/^\d?$/.test(value)) {
            e.target.value = '';
            return;
        }

        // Se o valor for um número e tiver comprimento 1, vá para o próximo campo
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        // Se o valor for vazio, volta para o campo anterior
        if (value.length === 0 && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        checkFormValidity();
    };

    const handlePaste = (index, e) => {
        const pastedData = e.clipboardData.getData('Text');
        const digits = pastedData.split('').filter(char => /^\d$/.test(char)); // Filtra apenas dígitos

        // Preenche os campos com os dígitos colados
        digits.forEach((digit, i) => {
            if (index + i < inputRefs.current.length) {
                inputRefs.current[index + i].value = digit; // Preenche o campo
                if (i < digits.length - 1) {
                    inputRefs.current[index + i + 1].focus(); // Avança para o próximo campo
                }
            }
        });

        e.preventDefault(); // Previne o comportamento padrão do colar
        checkFormValidity();
    };

    const checkFormValidity = () => {
        const allFilled = inputRefs.current.every(input => input.value.length === 1);
        setIsFormValid(allFilled);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }; //editar depois

    return (
        <div className='bg-gradient-to-b from-[#9171A2] to-[#CDB9D8] min-h-screen'>
            <Header />
            <hr className="w-full border-white mb-20" />

            <div className="flex flex-col items-center justify-center p-4">
                <div className="text-left">
                    <h1 className="text-[#FFFFFF] text-5xl font-bold mb-2">Nós enviamos um email</h1>
                    <p className='text-[#CDB9D8] mb-2'>Nós enviamos um código de segurança para seu e-mail. <br /> Talvez você precise checar os seus arquivos de spam.</p>
                    <p className='text-[#FFFFFF] font-semibold mb-5'>Coloque o código</p>
                    <form onSubmit={handleSubmit} >
                        {Array.from({ length: 5 }, (_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                className="w-12 h-12 text-center text-2xl border border-[#FFFFFF] rounded bg-transparent text-[#FFFFFF]"
                                pattern="\d*"
                                inputMode="numeric"
                                ref={el => (inputRefs.current[index] = el)}
                                onChange={(e) => handleChange(index, e)}
                                onPaste={(e) => handlePaste(index, e)}
                            />
                        ))}
                        <br /><button className='text-[#FFFFFF] mt-5 mb-5 underline'>
                            Reenviar o Código
                        </button> <br />
                        <button
                            type="submit"
                            className="bg-[#FFFFFF] text-[#A07CAC] rounded-[35px] px-4 py-2"
                            style={{ height: '60px', width: '250px', fontSize: '29px' }}
                        >
                            Pronto
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Auth;