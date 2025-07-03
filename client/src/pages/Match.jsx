// src/pages/Match.jsx
import React from 'react';

const Match = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-700 text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">Match</h1>
      <img 
        src="/images/match_sample.jpg" 
        alt="Match item" 
        className="w-40 h-40 rounded-lg shadow mb-4"
      />
      <p className="mb-4 text-lg">What's this?</p>
      <div className="flex flex-col gap-3 w-3/4 max-w-xs">
        <button className="bg-white text-blue-700 py-2 rounded-full shadow hover:bg-gray-100">Dog</button>
        <button className="bg-white text-blue-700 py-2 rounded-full shadow hover:bg-gray-100">Cat</button>
        <button className="bg-white text-blue-700 py-2 rounded-full shadow hover:bg-gray-100">Octopus</button>
      </div>
    </div>
  );
};

export default Match;
