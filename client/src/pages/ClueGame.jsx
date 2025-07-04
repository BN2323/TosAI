import React, { useState } from "react";

const animals = [
  { name: "Pig", legs: 4, habitat: "Farm", sound: "Oink" },
  { name: "Chicken", legs: 2, habitat: "Farm", sound: "Cluck" },
  { name: "Snake", legs: 0, habitat: "Farm", sound: "Hiss" },
  { name: "Cat", legs: 4, habitat: "Farm", sound: "Meow" },
  { name: "Dog", legs: 4, habitat: "House", sound: "Woof"},
  { name: "Eagle", legs: 2, habitat: "Forest", sound: "Eek"}
];

const questions = [
  { key: "legs", label: "How many legs does it have?" },
  { key: "habitat", label: "Where does it live?" },
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
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 400, margin: "auto" }}>
      <h2>Guess the Animal!</h2>

      {!gameOver && currentQuestion && (
        <>
          <p>{currentQuestion.label}</p>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              style={{ margin: 5, padding: "8px 12px" }}
            >
              {option}
            </button>
          ))}
        </>
      )}

      {gameOver && (
        <>
          {remainingAnimals.length === 1 ? (
            <h3>It's a {remainingAnimals[0].name}! 🎉</h3>
          ) : (
            <h3>Hmm... I don’t know. 😕</h3>
          )}
          <button
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
