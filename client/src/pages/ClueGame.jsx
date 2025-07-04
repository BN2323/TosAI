import React, { useState, useEffect } from "react";
import Botto from "../assets/botto.png"
import DClound from "../assets/dialog clound.svg"
import Pig from "../assets/pig.png"

// const animals = [
//   { name: "Pig", legs: 4, habitat: "Farm", sound: "Oink", fly: "yes" },
//   { name: "Chicken", legs: 2, habitat: "Farm", sound: "Cluck", fly: "yes" },
//   { name: "Snake", legs: 0, habitat: "Farm", sound: "Hiss", fly: "no" },
//   { name: "Cat", legs: 4, habitat: "Farm", sound: "Meow", fly: "no" },
//   { name: "Dog", legs: 4, habitat: "House", sound: "Woof", fly: "no" },
//   { name: "Eagle", legs: 2, habitat: "Forest", sound: "Eek", fly: "yes" }
// ];

// const questions = [
//   { key: "legs", label: "How many legs does it have?" },
//   { key: "habitat", label: "Where does it live?" },
//   { key: "fly", label: "Does it fly?"},
//   { key: "sound", label: "What sound does it make?" },
// ];

const animals = [
  { name: "Pig", legs: 4, habitat: "Farm", fly: "no", size: "medium", active: "day", color: "pink", sound: "Oink" },
  { name: "Chicken", legs: 2, habitat: "Farm", fly: "yes", size: "small", active: "day", color: "white", sound: "Cluck" },
  { name: "Snake", legs: 0, habitat: "Forest", fly: "no", size: "medium", active: "day", color: "green", sound: "Hiss" },
  { name: "Cat", legs: 4, habitat: "House", fly: "no", size: "small", active: "night", color: "varies", sound: "Meow" },
  { name: "Dog", legs: 4, habitat: "House", fly: "no", size: "medium", active: "day", color: "varies", sound: "Woof" },
  { name: "Eagle", legs: 2, habitat: "Forest", fly: "yes", size: "large", active: "day", color: "brown", sound: "Screech" },
  { name: "Duck", legs: 2, habitat: "Pond", fly: "yes", size: "medium", active: "day", color: "white", sound: "Quack" },
  { name: "Horse", legs: 4, habitat: "Farm", fly: "no", size: "large", active: "day", color: "brown", sound: "Neigh" },
  { name: "Frog", legs: 4, habitat: "Pond", fly: "no", size: "small", active: "night", color: "green", sound: "Croak" },
  { name: "Bat", legs: 2, habitat: "Cave", fly: "yes", size: "small", active: "night", color: "black", sound: "Screech" },
  { name: "Bee", legs: 6, habitat: "Garden", fly: "yes", size: "tiny", active: "day", color: "yellow", sound: "Buzz" },
  { name: "Cow", legs: 4, habitat: "Farm", fly: "no", size: "large", active: "day", color: "black and white", sound: "Moo" },
  { name: "Sheep", legs: 4, habitat: "Farm", fly: "no", size: "medium", active: "day", color: "white", sound: "Baa" },
  { name: "Parrot", legs: 2, habitat: "House", fly: "yes", size: "small", active: "day", color: "green", sound: "Squawk" },
  { name: "Wolf", legs: 4, habitat: "Forest", fly: "no", size: "medium", active: "night", color: "gray", sound: "Howl" },
  { name: "Owl", legs: 2, habitat: "Forest", fly: "yes", size: "small", active: "night", color: "brown", sound: "Hoot" },

  { name: "Lizard", legs: 4, habitat: "Desert", fly: "no", size: "small", active: "day", color: "green", sound: "Silent" },
  { name: "Butterfly", legs: 6, habitat: "Garden", fly: "yes", size: "tiny", active: "day", color: "varies", sound: "Silent" },
  { name: "Crab", legs: 10, habitat: "Beach", fly: "no", size: "small", active: "day", color: "red", sound: "Clack" },
  { name: "Polar Bear", legs: 4, habitat: "Arctic", fly: "no", size: "large", active: "day", color: "white", sound: "Growl" },
  { name: "Goldfish", legs: 0, habitat: "Pond", fly: "no", size: "small", active: "day", color: "orange", sound: "Silent" },
  { name: "Dragonfly", legs: 6, habitat: "Pond", fly: "yes", size: "tiny", active: "day", color: "blue", sound: "Buzz" },
  { name: "Kangaroo", legs: 2, habitat: "Grassland", fly: "no", size: "large", active: "day", color: "brown", sound: "Chortle" },
  { name: "Salamander", legs: 4, habitat: "Forest", fly: "no", size: "small", active: "night", color: "orange", sound: "Silent" },
  { name: "Snail", legs: 0, habitat: "Garden", fly: "no", size: "tiny", active: "day", color: "brown", sound: "Silent" },

    // 4-legged that can fly (realistically rare, but let's say mythic/fantasy or bats are 2-legged but we can add some fantasy):
  { name: "Flying Squirrel", legs: 4, habitat: "Forest", fly: "yes", size: "small", active: "night", color: "brown", sound: "Chatter" },
  { name: "Dragon (Mythical)", legs: 4, habitat: "Mountain", fly: "yes", size: "large", active: "day", color: "red", sound: "Roar" },

  // 2-legged animals that cannot fly:
  { name: "Penguin", legs: 2, habitat: "Arctic", fly: "no", size: "medium", active: "day", color: "black and white", sound: "Honk" },
  { name: "Emu", legs: 2, habitat: "Grassland", fly: "no", size: "large", active: "day", color: "brown", sound: "Booming" },

  // 0-legged animals that can fly (very unusual, but let's be creative):
  // Maybe some insect without visible legs or microscopic creature? Let's treat "legs" as visible legs, so:
  { name: "Jellyfish", legs: 0, habitat: "Ocean", fly: "yes", size: "medium", active: "day", color: "transparent", sound: "Silent" },
  { name: "Flying Fish", legs: 0, habitat: "Ocean", fly: "yes", size: "small", active: "day", color: "silver", sound: "Silent" }

];

const questions = [
  { key: "legs", label: "How many legs does it have?" },
  { key: "fly", label: "Can it fly?" },
  { key: "habitat", label: "Where does it live?" },
  { key: "size", label: "What is its size?" },
  { key: "active", label: "Is it active during the day or night?" },
  { key: "color", label: "What is its main color?" },
  { key: "sound", label: "What sound does it make?" }  // Sound goes last!
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
  
  // useEffect(() => {
  //   if (!gameOver && options && options.length === 1) {
  //     handleAnswer(options[0]);
  //     console.log(answers);
  //   }
  // }, [options, gameOver]);

  return (
    <div className="h-screen w-full flex flex-col gap-15 items-center" style={{ marginTop: "40px"}}>
      <div className="flex flex-col items-center gap-30 max-md:gap-45">
        <h2 >Guess the Animal!</h2>
        <div className="relative">
          <img src={Botto} alt="" className="max-md:"/>
          <div className="absolute bottom-10/12 left-10/15 max-md:left-10/16 whitespace-nowrap break-words w-[250px] h-[150px] max-md:w-[170px] max-md:h-[100px]" >
            <img src={DClound} alt="" className="relative w-full h-full"/>
            <div className="absolute w-[190px] h-[100px] max-md:w-[120px] max-md:h-[60px] top-[15%] left-[13%] max-md:left-[16%] flex items-center justify-center">
              <p className=" text-[12px] max-md:whitespace-normal max-md:text-center">{currentQuestion.label}</p>

            </div>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col items-center'>    
        {!gameOver && currentQuestion &&(
          
            <div className='flex gap-4 flex-wrap items-center justify-center'>
              {options.map((option) => (
                <button
                  className="md:basis-1/3  px-4 py-2 bg-white text-black my-1 text-2xl rounded-3xl w-55 h-15 max-md:w-30 cursor-pointer outline-2  hover:bg-[#62FFA3]"
                  key={option}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            
        )}
      </div>

      {gameOver && (
        <div className="flex flex-col items-center">
          <div className="absolute top-[58%] flex flex-col items-center gap-2 overflow-hidden w-[300px] bg-amber-300">
            {remainingAnimals.length === 1 ? (
              <h3>It's a {remainingAnimals[0].name}! 🎉</h3>
            ) : (
              <h3>Hmm... I don’t know. 😕</h3>
            )} 
            <img src={Pig} alt="" />
          </div>
          <button
            className="px-4 py-2 bg-white text-black my-1 text-2xl rounded-3xl w-65 h-15 cursor-pointer outline-2  hover:bg-[#62FFA3]"
            onClick={() => {
              setAnswers({});
              setCurrentQIndex(0);
              setGameOver(false);
            }}
            style={{ marginTop: 80, padding: "8px 12px" }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
