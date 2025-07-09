import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { playSound, fadeVolume, currentlyPlaying } from "../components/MusicManager";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
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
import Bee from "../assets/animals/bee.jpg";
import Butterfly from "../assets/animals/butterfly.jpg";
import Frog from "../assets/animals/frog.jpg";
import Snake from "../assets/animals/snake.jpg";
import Wolf from "../assets/animals/wolf.jpg";
import Bear from "../assets/animals/bear.jpg";
import PolarBear from "../assets/animals/polar_bear.jpg";
import Penguin from "../assets/animals/penguin.jpg";
import Kangaroo from "../assets/animals/kangaroo.jpg";
import Elephant from "../assets/animals/elephant.jpg";
import Lion from "../assets/animals/lion.jpg";
import Tiger from "../assets/animals/tiger.jpg";
import Deer from "../assets/animals/deer.jpg";
import Giraffe from "../assets/animals/giraffe.jpg";
import Monkey from "../assets/animals/monkey.jpg";
import Gorilla from "../assets/animals/gorilla.jpg";
import Fox from "../assets/animals/fox.jpg";
import Bat from "../assets/animals/bat.jpg";
import Rabbit from "../assets/animals/rabbit.jpg";
import Dolphin from "../assets/animals/dolphin.jpg";
import Whale from "../assets/animals/whale.jpg";
import Shark from "../assets/animals/shark.jpg";
import Goldfish from "../assets/animals/gold_fish.jpg";
import Crab from "../assets/animals/crab.jpg";
import Lobster from "../assets/animals/lobster.jpg";

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
  { name: "Bee", legs: 6, habitat: "Garden", fly: "yes", size: "tiny", active: "day", color: "yellow", sound: "Buzz", src: Bee },
  { name: "Butterfly", legs: 6, habitat: "Garden", fly: "yes", size: "tiny", active: "day", color: "varies", sound: "Silent", src: Butterfly },
  { name: "Frog", legs: 4, habitat: "Pond", fly: "no", size: "small", active: "night", color: "green", sound: "Croak", src: Frog },
  { name: "Snake", legs: 0, habitat: "Forest", fly: "no", size: "medium", active: "day", color: "green", sound: "Hiss", src: Snake },
  { name: "Wolf", legs: 4, habitat: "Forest", fly: "no", size: "medium", active: "night", color: "gray", sound: "Howl", src: Wolf },
  { name: "Bear", legs: 4, habitat: "Forest", fly: "no", size: "large", active: "day", color: "brown", sound: "Growl", src: Bear },
  { name: "Polar Bear", legs: 4, habitat: "Arctic", fly: "no", size: "large", active: "day", color: "white", sound: "Growl", src: PolarBear },
  { name: "Penguin", legs: 2, habitat: "Arctic", fly: "no", size: "medium", active: "day", color: "black and white", sound: "Honk", src: Penguin },
  { name: "Kangaroo", legs: 2, habitat: "Grassland", fly: "no", size: "large", active: "day", color: "brown", sound: "Chortle", src: Kangaroo },
  { name: "Elephant", legs: 4, habitat: "Savanna", fly: "no", size: "large", active: "day", color: "gray", sound: "Trumpet", src: Elephant },
  { name: "Lion", legs: 4, habitat: "Savanna", fly: "no", size: "large", active: "day", color: "golden", sound: "Roar", src: Lion },
  { name: "Tiger", legs: 4, habitat: "Forest", fly: "no", size: "large", active: "night", color: "orange", sound: "Roar", src: Tiger },
  { name: "Deer", legs: 4, habitat: "Forest", fly: "no", size: "medium", active: "day", color: "brown", sound: "Bleat", src: Deer },
  { name: "Giraffe", legs: 4, habitat: "Savanna", fly: "no", size: "large", active: "day", color: "yellow", sound: "Silent", src: Giraffe },
  { name: "Monkey", legs: 2, habitat: "Forest", fly: "no", size: "small", active: "day", color: "brown", sound: "Chatter", src: Monkey },
  { name: "Gorilla", legs: 2, habitat: "Forest", fly: "no", size: "large", active: "day", color: "black", sound: "Grunt", src: Gorilla },
  { name: "Fox", legs: 4, habitat: "Forest", fly: "no", size: "small", active: "night", color: "red", sound: "Yip", src: Fox },
  { name: "Bat", legs: 2, habitat: "Cave", fly: "yes", size: "small", active: "night", color: "black", sound: "Screech", src: Bat },
  { name: "Rabbit", legs: 4, habitat: "Garden", fly: "no", size: "small", active: "night", color: "white", sound: "Silent", src: Rabbit },
  { name: "Dolphin", legs: 0, habitat: "Ocean", fly: "no", size: "large", active: "day", color: "gray", sound: "Click", src: Dolphin },
  { name: "Whale", legs: 0, habitat: "Ocean", fly: "no", size: "large", active: "day", color: "blue", sound: "Song", src: Whale },
  { name: "Shark", legs: 0, habitat: "Ocean", fly: "no", size: "large", active: "day", color: "gray", sound: "Silent", src: Shark },
  { name: "Goldfish", legs: 0, habitat: "Pond", fly: "no", size: "small", active: "day", color: "orange", sound: "Silent", src: Goldfish },
  { name: "Crab", legs: 10, habitat: "Beach", fly: "no", size: "small", active: "day", color: "red", sound: "Clack", src: Crab },
  { name: "Lobster", legs: 10, habitat: "Ocean", fly: "no", size: "medium", active: "night", color: "red", sound: "Clack", src: Lobster }
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
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useWindowSize();
  
  const remainingAnimals = animals.filter((animal) =>
    Object.entries(answers).every(([key, value]) => animal[key] === value)
  );

  useEffect(() => {
    if ((remainingAnimals.length === 1 || remainingAnimals.length === 0) && !gameOver) {
      setGameOver(true);
    }
      
  }, [remainingAnimals, gameOver]);

  useEffect(() => {
    if (gameOver) {
      const winAudio = playSound("win");
      fadeVolume(winAudio, 0, 3000); 
      fadeVolume(currentlyPlaying, 0.3, 100);
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }
  }, [gameOver]);

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
            <img src={Botto} alt="Bot" className="w-48 max-sm:mr-32" />
            <div className="absolute left-30 max-sm:left-31 -top-15 ml-2 sm:ml-4 w-64 h-36 rounded-xl">
              <img src={DClound} alt="Speech Bubble" className="w-full h-full0" />
              <div className="absolute top-6 left-10 right-9 bottom-8 flex items-center justify-center text-center overflow-hidden">
                <p className="text-sm text-gray-700 font-mono font-bold break-words whitespace-normal">
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
            onClick={() => {setStarted(true); fadeVolume(currentlyPlaying, 0.5, 100); playSound("click")}}
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
            className={`relative text-2xl sm:text-3xl text-sky-800 font-semibold mb-4 text-center ${gameOver ? "bottom-10" : ""}`}
          >
            🎯 Guess the Animal!
          </h1>

          <div className="relative mb-6 flex justify-center">
            <img src={Botto} alt="Bot" className="w-48 max-sm:mr-32" />
            <div
              className="absolute left-30 -top-15 ml-2 sm:ml-4 w-64 h-36"
            >
              <img src={DClound} alt="Speech Bubble" className="w-full h-full" />
              <div className="absolute top-6 left-10 right-9 bottom-8 flex items-center justify-center text-center overflow-hidden">
                <p className="text-sm text-gray-700 font-mono font-bold break-words whitespace-normal">
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
                  onClick={() => {handleAnswer(option); playSound("click")}}
                  className="
                    px-6 py-3
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
            <>
              <Confetti
                width={width}
                height={height}
                numberOfPieces={400}
                recycle={false}
                gravity={0.2}
                initialVelocityX={{ min: -10, max: 10 }}
                initialVelocityY={{ min: -10, max: 10 }}
                style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none" }}
              />
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
                      playSound("click")
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
                      onClick={ playSound("click")}
                    >
                      🏠 Home
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
