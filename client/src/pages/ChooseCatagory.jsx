// src/pages/ChooseCategory.jsx
import React from 'react';

const ChooseCategory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-600 text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-6">Choose Category</h1>
      <div className="flex flex-col gap-4 w-3/4 max-w-xs">
        <button className="bg-white text-blue-700 py-3 rounded-full shadow hover:bg-gray-100">Animal</button>
        <button className="bg-white text-blue-700 py-3 rounded-full shadow hover:bg-gray-100">Robot</button>
        <button className="bg-white text-blue-700 py-3 rounded-full shadow hover:bg-gray-100">Human</button>
      </div>
    </div>
  );
};

export default ChooseCategory;
