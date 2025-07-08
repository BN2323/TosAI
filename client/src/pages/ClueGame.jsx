import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import Botto from "../assets/botto.png";
import DClound from "../assets/dialog clound.svg";
import Pig from "../assets/animals/pig.jpg";
import Dog from "../assets/animals/dog.jpg";
import Cat from "../assets/animals/cat.jpg";
import Cow from "../assets/animals/cow.jpg";
import Sheep from "../assets/animals/sheep.jpg";
import Horse from "../assets/animals/horse.jpg";
import Chicken from "../assets/animals/chicken.jpg";
import Duck from "../assets/animals/duck.jpg";
import Eagle from "../assets/animals/eagle.jpg";
import Owl from "../assets/animals/owl.jpg";
import Parrot from "../assets/animals/parrot.jpg";

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
];

const questions = [
  { key: "legs", label: "How many legs does it have?" },
  { key: "fly", label: "Can it fly?" },
  { key: "habitat", label: "Where does it live?" },
  { key: "size", label: "What is its size?" },
  { key: "active", label: "Is it active during the day or night?" },
  { key: "color", label: "What is its main color?" },
  { key: "sound", label: "What sound does it make?" },
];

export default function ClueGame() {
  const [answers, setAnswers] = useState({});
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const remainingAnimals = animals.filter((animal) =>
    Object.entries(answers).every(([key, value]) => animal[key] === value)
  );

  useEffect(() => {
    if ((remainingAnimals.length === 1 || remainingAnimals.length === 0) && !gameOver) {
      setGameOver(true);
    }
  }, [remainingAnimals, gameOver]);

  const getValidOptions = (questionKey, animalsList) => {
    const options = animalsList.map((a) => a[questionKey]);
    return [...new Set(options)];
  };

  const currentQuestion = questions[currentQIndex];
  const options = currentQuestion ? getValidOptions(currentQuestion.key, remainingAnimals) : [];

  function handleAnswer(option) {
    const newAnswers = { ...answers, [currentQuestion.key]: option };
    setAnswers(newAnswers);

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
    if (!gameOver && options.length === 1) {
      handleAnswer(options[0]);
    }
  }, [options, gameOver]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between px-4 pt-6 pb-24 max-w-4xl mx-auto">
      {!started ? (
        <>
          <h1 className="text-3xl max-sm:text-2xl text-sky-800 font-semibold mb-4 text-center" style={{ fontFamily: "Fredoka, sans-serif" }}>
            🎯 Welcome to Clue Game!
          </h1>
          <div className="relative mb-6 max-sm:mr-10 flex justify-center">
            <img src={Botto} alt="Bot" className="w-24 sm:w-36 md:w-48" />
            <div className="absolute left-33 -top-15 ml-2 sm:ml-4 w-44 sm:w-56 md:w-64 h-28 sm:h-32 md:h-36 rounded-xl shadow-lg">
              <img src={DClound} alt="Speech Bubble" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute top-4 left-4 right-4 bottom-4 flex items-center justify-center text-center overflow-hidden">
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-mono break-words whitespace-normal">
                  <Typewriter
                    words={[
                      "Think of any animal in your mind,",
                      "and give me the data of the animal!",
                    ]}
                    loop={Infinity}
                    typeSpeed={40}
                    deleteSpeed={20}
                    delaySpeed={2000}
                  />
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setStarted(true)}
            className="px-8 sm:px-10 py-4 sm:py-6 bg-emerald-400 text-white text-lg sm:text-xl rounded-full shadow-md transition hover:bg-emerald-500 hover:scale-105"
            style={{ fontFamily: "Fredoka, sans-serif" }}
          >
            ▶️ Play
          </button>
        </>
      ) : (
        <>
          <h1
            style={{ fontFamily: "Fredoka, sans-serif" }}
            className={`relative text-2xl sm:text-3xl text-sky-800 font-semibold mb-4 text-center ${gameOver ? "bottom-10" : "mt-25 sm:mt-4"}`}
          >
            🎯 Guess the Animal!
          </h1>

          <div className="relative mb-6 flex justify-center">
            <img src={Botto} alt="Bot" className="w-24 sm:w-36 md:w-48" />
            <div
              className="
                absolute
                top-[5rem] sm:top-[4rem] md:top-[-4rem]
                left-[6rem] sm:left-[9rem] md:left-[9.5rem]
                w-44 sm:w-56 md:w-72
                h-28 sm:h-36 md:h-40
                rounded-xl
                shadow-lg
                z-10
              "
            >
              <img src={DClound} alt="Speech Bubble" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute top-4 left-6 right-6 bottom-4 flex items-center justify-center text-center overflow-hidden">
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-mono break-words whitespace-normal">
                  <Typewriter
                    key={`${currentQuestion?.key}-${gameOver}`}
                    words={[!gameOver ? currentQuestion?.label : "Is this what you thought?"]}
                    loop={1}
                    typeSpeed={30}
                    delaySpeed={1000}
                  />
                </p>
              </div>
            </div>
          </div>

          {!gameOver && currentQuestion && options.length > 1 && (
            <div className="flex flex-wrap gap-3 justify-center mb-6 px-2 max-w-full">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="
                    px-5 sm:px-6 py-2 sm:py-3
                    bg-white text-black
                    text-xs sm:text-sm md:text-base
                    rounded-full shadow-md
                    transition hover:bg-emerald-300 hover:scale-105
                  "
                  style={{ fontFamily: "Fredoka, sans-serif" }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {gameOver && (
            <div className="flex flex-col items-center w-full max-w-md mx-auto">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md px-6 py-6 w-full h-64 flex flex-col items-center justify-between">
                <h3 className="text-lg sm:text-xl font-medium text-sky-900 text-center">
                  {remainingAnimals.length === 1
                    ? `It's a ${remainingAnimals[0].name}! 🎉`
                    : "Hmm... I don’t know. 😕"}
                </h3>
                <div className="w-[80%] h-[90%] mt-3 overflow-hidden rounded-xl">
                  {remainingAnimals[0] && (
                    <img
                      src={remainingAnimals[0].src}
                      alt={remainingAnimals[0].name}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              </div>

              <div className="flex gap-5 mt-6 flex-wrap justify-center">
                <button
                  onClick={() => {
                    setAnswers({});
                    setCurrentQIndex(0);
                    setGameOver(false);
                    setStarted(false);
                  }}
                  className="px-6 py-4 bg-white text-black text-base rounded-full shadow-md hover:bg-emerald-300 hover:scale-105"
                  style={{ fontFamily: "Fredoka, sans-serif" }}
                >
                  🔁 Play Again
                </button>
                <Link to="/">
                  <button
                    className="px-6 py-4 bg-white text-black text-base rounded-full shadow-md hover:bg-emerald-300 hover:scale-105"
                    style={{ fontFamily: "Fredoka, sans-serif" }}
                  >
                    🏠 Home
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
