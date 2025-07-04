import React, { useState } from "react";
import Botto from "../assets/botto.png"

const animals = [
  { name: "Pig", legs: 4, habitat: "Farm", sound: "Oink", fly: "yes" },
  { name: "Chicken", legs: 2, habitat: "Farm", sound: "Cluck", fly: "yes" },
  { name: "Snake", legs: 0, habitat: "Farm", sound: "Hiss", fly: "no" },
  { name: "Cat", legs: 4, habitat: "Farm", sound: "Meow", fly: "no" },
  { name: "Dog", legs: 4, habitat: "House", sound: "Woof", fly: "no" },
  { name: "Eagle", legs: 2, habitat: "Forest", sound: "Eek", fly: "yes" }
];

const questions = [
  { key: "legs", label: "How many legs does it have?" },
  { key: "habitat", label: "Where does it live?" },
  { key: "fly", label: "Does it fly?"},
  { key: "sound", label: "What sound does it make?" },
];

export default function ClueGame() {
  const [answers, setAnswers] = useState({});
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Filter animals based on answers so far
  const remainingAnimals = animals.filter((animal) => {
    return Object.entries(answers).every(
      ([key, value]) => animal[key] === value
    );
  });

  // If only one animal left, end game
  if (remainingAnimals.length === 1 && !gameOver) {
    setGameOver(true);
  }

  // If no animals left, end game
  if (remainingAnimals.length === 0 && !gameOver) {
    setGameOver(true);
  }

  // Helper to get unique options for current question
  const getValidOptions = (questionKey, animalsList) => {
    const options = animalsList.map((a) => a[questionKey]);
    return [...new Set(options)];
  };

  const currentQuestion = questions[currentQIndex];

  // Options for current question filtered by remaining animals
  const options =
    currentQuestion && getValidOptions(currentQuestion.key, remainingAnimals);

  function handleAnswer(option) {
    const newAnswers = { ...answers, [currentQuestion.key]: option };
    setAnswers(newAnswers);

    // Filter animals after this answer
    const filtered = animals.filter((animal) =>
      Object.entries(newAnswers).every(([k, v]) => animal[k] === v)
    );

    if (filtered.length === 1 || filtered.length === 0) {
      setGameOver(true);
    } else {
      setCurrentQIndex(currentQIndex + 1);
    }
  }

  return (
    <div className="gap-10 h-dvh flex flex-col justify-around items-center max-md:gap-16">
      <h2>Guess the Animal!</h2>
      <img src={Botto} alt="" />

      {!gameOver && currentQuestion && (
        <div className='flex flex-col items-center justify-between'>
          <p>{currentQuestion.label}</p>
          <div className='flex gap-1 max-md:flex-col'>
            {options.map((option) => (
              <button
                className="px-4 py-2 bg-white text-black my-1 text-2xl rounded-3xl w-65 h-15 cursor-pointer outline-2  hover:bg-[#62FFA3]"
                key={option}
                onClick={() => handleAnswer(option)}
                style={{ margin: 5, padding: "8px 12px" }}
              >
                {option}
              </button>
            ))}
          </div>
          
        </div>
      )}

      {gameOver && (
        <>
          {remainingAnimals.length === 1 ? (
            <h3>It's a {remainingAnimals[0].name}! 🎉</h3>
          ) : (
            <h3>Hmm... I don’t know. 😕</h3>
          )}
          <button
            className="px-4 py-2 bg-white text-black my-1 text-2xl rounded-3xl w-65 h-15 cursor-pointer outline-2  hover:bg-[#62FFA3]"
            onClick={() => {
              setAnswers({});
              setCurrentQIndex(0);
              setGameOver(false);
            }}
            style={{ marginTop: 20, padding: "8px 12px" }}
          >
            Play Again
          </button>
        </>
      )}
    </div>
  );
}
