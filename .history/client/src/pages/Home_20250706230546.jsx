import React from 'react';
import Logo from '../assets/Logo.svg';
import { NavButton } from '../components/NavButton';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-4 text-center bg-gradient-to-br from-sky-100 to-white">
      <img src={Logo} alt="Game Portal Logo" className="w-40 md:w-60" />
      <div className="flex gap-6 max-md:flex-col">
        <NavButton to="/clue-game">🧠 Clue Game</NavButton>
        <NavButton to="/creature-lab">🧪 Creature Lab</NavButton>
      </div>
    </div>
  );
};

export default Home;
