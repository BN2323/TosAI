import React, { useState, useEffect } from "react";
import Botto from "../assets/botto.png"
import DClound from "../assets/dialog clound.svg"
import Pig from "../assets/animals/pig.jpg"
import Dog from "../assets/animals/dog.jpg"
import Cat from "../assets/animals/cat.jpg"
import Cow from "../assets/animals/cow.jpg"
import Sheep from "../assets/animals/sheep.jpg"
import Horse from "../assets/animals/horse.jpg"
import Chicken from "../assets/animals/chicken.jpg"
import Duck from "../assets/animals/duck.jpg"
import Eagle from "../assets/animals/eagle.jpg"
import Owl from "../assets/animals/owl.jpg"
import Parrot from "../assets/animals/parrot.jpg"

export const animals = [
  { name: "Pig", legs: 4, habitat: "Farm", fly: "no", size: "medium", active: "day", color: "pink", sound: "Oink", src: Pig },
  { name: "Dog", legs: 4, habitat: "House", fly: "no", size: "medium", active: "day", color: "varies", sound: "Woof", src: Dog },
  { name: "Cat", legs: 4, habitat: "House", fly: "no", size: "small", active: "night", color: "varies", sound: "Meow", src: Cat },
  { name: "Cow", legs: 4, habitat: "Farm", fly: "no", size: "large", active: "day", color: "black and white", sound: "Moo", src: Cow },
  { name: "Sheep", legs: 4, habitat: "Farm", fly: "no", size: "medium", active: "day", color: "white", sound: "Baa", src: Sheep },
  { name: "Horse", legs: 4, habitat: "Farm", fly: "no", size: "large", active: "day", color: "brown", sound: "Neigh", src: Horse },
  { name: "Chicken", legs: 2, habitat: "Farm", fly: "yes", size: "small", active: "day", color: "white", sound: "Cluck", src: Chicken },
  { name: "Duck", legs: 2, habitat: "Pond", fly: "yes", size: "medium", active: "day", color: "white", sound: "Quack", src: Duck },
  { name: "Eagle", legs: 2, habitat: "Forest", fly: "yes", size: "large", active: "day", color: "brown", sound: "Screech", src: Eagle },
  { name: "Owl", legs: 2, habitat: "Forest", fly: "yes", size: "small", active: "night", color: "brown", sound: "Hoot", src: Owl },
  { name: "Parrot", legs: 2, habitat: "House", fly: "yes", size: "small", active: "day", color: "green", sound: "Squawk", src: Parrot },
  // { name: "Bee", legs: 6, habitat: "Garden", fly: "yes", size: "tiny", active: "day", color: "yellow", sound: "Buzz", src: Bee },
  // { name: "Butterfly", legs: 6, habitat: "Garden", fly: "yes", size: "tiny", active: "day", color: "varies", sound: "Silent", src: Butterfly },
  // { name: "Frog", legs: 4, habitat: "Pond", fly: "no", size: "small", active: "night", color: "green", sound: "Croak", src: Frog },
  // { name: "Snake", legs: 0, habitat: "Forest", fly: "no", size: "medium", active: "day", color: "green", sound: "Hiss", src: Snake },
  // { name: "Wolf", legs: 4, habitat: "Forest", fly: "no", size: "medium", active: "night", color: "gray", sound: "Howl", src: Wolf },
  // { name: "Bear", legs: 4, habitat: "Forest", fly: "no", size: "large", active: "day", color: "brown", sound: "Growl", src: Bear },
  // { name: "Polar Bear", legs: 4, habitat: "Arctic", fly: "no", size: "large", active: "day", color: "white", sound: "Growl", src: PolarBear },
  // { name: "Penguin", legs: 2, habitat: "Arctic", fly: "no", size: "medium", active: "day", color: "black and white", sound: "Honk", src: Penguin },
  // { name: "Kangaroo", legs: 2, habitat: "Grassland", fly: "no", size: "large", active: "day", color: "brown", sound: "Chortle", src: Kangaroo },
  // { name: "Elephant", legs: 4, habitat: "Savanna", fly: "no", size: "large", active: "day", color: "gray", sound: "Trumpet", src: Elephant },
  // { name: "Lion", legs: 4, habitat: "Savanna", fly: "no", size: "large", active: "day", color: "golden", sound: "Roar", src: Lion },
  // { name: "Tiger", legs: 4, habitat: "Forest", fly: "no", size: "large", active: "night", color: "orange", sound: "Roar", src: Tiger },
  // { name: "Deer", legs: 4, habitat: "Forest", fly: "no", size: "medium", active: "day", color: "brown", sound: "Bleat", src: Deer },
  // { name: "Giraffe", legs: 4, habitat: "Savanna", fly: "no", size: "large", active: "day", color: "yellow", sound: "Silent", src: Giraffe },
  // { name: "Monkey", legs: 2, habitat: "Forest", fly: "no", size: "small", active: "day", color: "brown", sound: "Chatter", src: Monkey },
  // { name: "Gorilla", legs: 2, habitat: "Forest", fly: "no", size: "large", active: "day", color: "black", sound: "Grunt", src: Gorilla },
  // { name: "Fox", legs: 4, habitat: "Forest", fly: "no", size: "small", active: "night", color: "red", sound: "Yip", src: Fox },
  // { name: "Bat", legs: 2, habitat: "Cave", fly: "yes", size: "small", active: "night", color: "black", sound: "Screech", src: Bat },
  // { name: "Rabbit", legs: 4, habitat: "Garden", fly: "no", size: "small", active: "night", color: "white", sound: "Silent", src: Rabbit },
  // { name: "Dolphin", legs: 0, habitat: "Ocean", fly: "no", size: "large", active: "day", color: "gray", sound: "Click", src: Dolphin },
  // { name: "Whale", legs: 0, habitat: "Ocean", fly: "no", size: "large", active: "day", color: "blue", sound: "Song", src: Whale },
  // { name: "Shark", legs: 0, habitat: "Ocean", fly: "no", size: "large", active: "day", color: "gray", sound: "Silent", src: Shark },
  // { name: "Goldfish", legs: 0, habitat: "Pond", fly: "no", size: "small", active: "day", color: "orange", sound: "Silent", src: Goldfish },
  // { name: "Crab", legs: 10, habitat: "Beach", fly: "no", size: "small", active: "day", color: "red", sound: "Clack", src: Crab },
  // { name: "Lobster", legs: 10, habitat: "Ocean", fly: "no", size: "medium", active: "night", color: "red", sound: "Clack", src: Lobster }
];


const questions = [
  { key: "legs", label: "How many legs does it have?" },
  { key: "fly", label: "Can it fly?" },
  { key: "habitat", label: "Where does it live?" },
  { key: "size", label: "What is its size?" },
  { key: "active", label: "Is it active during the day or night?" },
  { key: "color", label: "What is its main color?" },
  { key: "sound", label: "What sound does it make?" }
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
  
  useEffect(() => {
    if (!gameOver && options && options.length === 1) {
      handleAnswer(options[0]);
      console.log(answers);
    }
  }, [options, gameOver]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-6">
      {/* Game Title */}
      <h1 style={{ fontFamily: "Fredoka, sans-serif" }} className="text-2xl text-sky-800 font-semibold mb-4">
        🎯 Guess the Animal!
      </h1>
  
      {/* Bot + Question Bubble */}
      <div className="relative mb-6">
        <img src={Botto} alt="Bot" className="w-36 md:w-48" />
        <div className="absolute -top-2 left-[60%] w-48 h-28">
          <img src={DClound} alt="Speech Bubble" className="w-full h-full" />
          <div className="absolute top-5 left-4 right-4 flex items-center justify-center text-center">
            <p className="relative top-4 text-[16] text-gray-700 font-mono">{currentQuestion.label}</p>
          </div>
        </div>
      </div>
  
      {/* Answer Buttons */}
      {!gameOver && currentQuestion && options.length > 1 && (
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="px-4 py-2 bg-white text-black text-base rounded-full shadow-md transition hover:bg-emerald-300 hover:scale-105"
              style={{ fontFamily: "Fredoka, sans-serif" }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
  
      {/* Result */}
      {gameOver && (
        <div className="flex flex-col items-center mt-4">
          <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl shadow-md px-4 py-4 w-72 h-52 flex flex-col items-center justify-between">
            <h3 className="text-lg font-medium text-sky-900">
              {remainingAnimals.length === 1
                ? `It's a ${remainingAnimals[0].name}! 🎉`
                : "Hmm... I don’t know. 😕"}
            </h3>
            <div className="w-28 h-28 overflow-hidden rounded-xl">
              {remainingAnimals[0] && (
                <img src={remainingAnimals[0].src} alt={remainingAnimals[0].name} className="object-cover w-full h-full" />
              )}
            </div>
          </div>
  
          <button
            onClick={() => {
              setAnswers({});
              setCurrentQIndex(0);
              setGameOver(false);
            }}
            className="mt-4 px-4 py-2 bg-white text-black text-base rounded-full shadow-md hover:bg-emerald-300 hover:scale-105"
            style={{ fontFamily: "Fredoka, sans-serif" }}
          >
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
}
