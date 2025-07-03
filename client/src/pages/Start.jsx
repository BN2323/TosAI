// src/pages/Start.jsx
import React from 'react';

const Start = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center text-white relative">
      {/* Logo */}
      <div className="absolute top-8 left-8 text-2xl font-bold">Tos <span className="text-yellow-300">AI</span></div>

      {/* Robot Avatar */}
      <img 
        src="/images/robot.png" 
        alt="Robot" 
        className="w-32 h-32 mb-6"
      />

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-3/4 max-w-xs">
        <button className="bg-white text-blue-700 font-semibold py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Our Game
        </button>
        <button className="bg-white text-blue-700 font-semibold py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Choose Lab
        </button>
      </div>
    </div>
  );
};

export default Start;
