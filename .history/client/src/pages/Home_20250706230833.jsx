import React from 'react';
import Logo from '../assets/Logo.svg';
import { NavButton } from '../components/NavButton';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 px-4 text-center bg-gradient-to-br from-sky-100 to-white">
      {/* Animated Logo */}
      <img
        src={Logo}
        alt="Game Portal Logo"
        className="w-40 md:w-60 animate-bounce drop-shadow-lg"
      />

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-sky-800 font-semibold">
        Welcome to the Ultimate Fun Lab 🧪🎮
      </p>

      {/* Glassmorphic Button Card */}
      <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl shadow-xl px-8 py-6 flex gap-6 max-md:flex-col">
        <NavButton to="/clue-game">🧠 Clue Game</NavButton>
        <NavButton to="/creature-lab">🧪 Creature Lab</NavButton>
      </div>
    </div>
  );
};

export default Home;
