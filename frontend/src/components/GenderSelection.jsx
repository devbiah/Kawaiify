import React, { useState } from 'react';

const GenderSelection = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="gender-selection space-y-2">
      <label className="flex items-center text-white">
        <input
          type="radio"
          value="homem"
          checked={selectedOption === 'homem'}
          onChange={handleChange}
          className="appearance-none checked:bg-white checked:border-transparent border border-white w-4 h-4 rounded-full mr-2"
        />
        Homem
      </label>
      <label className="flex items-center text-white">
        <input
          type="radio"
          value="mulher"
          checked={selectedOption === 'mulher'}
          onChange={handleChange}
          className="appearance-none checked:bg-white checked:border-transparent border border-white w-4 h-4 rounded-full mr-2"
        />
        Mulher
      </label>
      <label className="flex items-center text-white">
        <input
          type="radio"
          value="nao-binario"
          checked={selectedOption === 'nao-binario'}
          onChange={handleChange}
          className="appearance-none checked:bg-white checked:border-transparent border border-white w-4 h-4 rounded-full mr-2"
        />
        Não Binário
      </label>
      <label className="flex items-center text-white">
        <input
          type="radio"
          value="outro"
          checked={selectedOption === 'outro'}
          onChange={handleChange}
          className="appearance-none checked:bg-white checked:border-transparent border border-white w-4 h-4 rounded-full mr-2"
        />
        Outro
      </label>
      <label className="flex items-center text-white">
        <input
          type="radio"
          value="prefiro_nao_dizer"
          checked={selectedOption === 'prefiro_nao_dizer'}
          onChange={handleChange}
          className="appearance-none checked:bg-white checked:border-transparent border border-white w-4 h-4 rounded-full mr-2"
        />
        Prefiro não dizer
      </label>
    </div>
  );
};

export default GenderSelection;
