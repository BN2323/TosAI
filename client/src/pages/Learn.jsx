// src/pages/Learn.jsx
import React from 'react';

const lessons = [
  "What is AI?",
  "AI in daily life",
  "How robots learn",
  "Types of AI",
  "Future of AI"
];

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-600 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Lessons</h1>
      <ul className="space-y-4">
        {lessons.map((lesson, i) => (
          <li key={i} className="bg-white text-blue-700 py-3 px-4 rounded-lg shadow hover:bg-gray-100 transition">
            {lesson}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
