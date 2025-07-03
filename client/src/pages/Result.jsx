// src/pages/Result.jsx
import React from 'react';

const Result = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-700 text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Correct!</h1>
      <img 
        src="/images/win.png" 
        alt="Result" 
        className="w-40 h-40 rounded-lg mb-6"
      />
      <button className="bg-white text-blue-700 px-6 py-3 rounded-full shadow hover:bg-gray-100">
        Next
      </button>
    </div>
  );
};

export default Result;
