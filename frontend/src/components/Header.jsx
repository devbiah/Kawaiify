import React from 'react';
import spot from '../img/spot.png';

const Header = () => {
    return (
        <header className="flex items-center mb-1">
            <img className='h-16 w-16 mr-2 ml-5 mt-1' src={spot} alt="Logo" />
            <h1 className='text-3xl text-[#FFFFFF] font-semibold'>Kawaiify</h1>
        </header>
    );
};

export default Header;
