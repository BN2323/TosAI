import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Botto from "../assets/botto.png";
import DClound from "../assets/dialog clound.svg";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { playSound, fadeVolume, currentlyPlaying } from "../components/MusicManager";


const parts = {
  head: ["Lion", "Eagle", "Dragon"],
  body: ["Horse", "Snake", "Fish"],
  tail: ["Monkey", "Scorpion", "Peacock"]
};

export default function CreatureLab() {
  const [started, setStarted] = useState(false);
  const [selections, setSelections] = useState({});
  const [currentPart, setCurrentPart] = useState("head");
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (finished) {
      const winAudio = playSound("win");
      fadeVolume(winAudio, 0, 3000); 
      fadeVolume(currentlyPlaying, 0.3, 100)
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false);
    }

  }, [finished]);

  const handlePartSelect = (option) => {
    const newSelections = { ...selections, [currentPart]: option };
    setSelections(newSelections);

    if (currentPart === "head") {
      setCurrentPart("body");
    } else if (currentPart === "body") {
      setCurrentPart("tail");
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between px-4 pt-6 pb-24 relative">
      {!started && (
        <>
          <h1 style={{ fontFamily: "Fredoka, sans-serif" }} className="text-3xl max-sm:text-2xl text-sky-800 font-semibold mb-4">
            🧬 Welcome to Creature Lab!
          </h1>

          <div className="relative mb-6">
            <img src={Botto} alt="Bot" className="w-48 max-sm:mr-35" />
            <div
              className="absolute left-30 -top-15 ml-2 sm:ml-4 w-64 h-36"
            >
              <img src={DClound} alt="Speech Bubble" className="w-full h-full" />
              <div className="absolute top-6 left-10 right-9 bottom-8 flex items-center justify-center text-center overflow-hidden">
                <p className="text-sm text-gray-700 font-mono font-bold break-words whitespace-normal">
                  <Typewriter
                    words={[
                      "Mix and match animal parts,",
                      "and create your own unique creature!"
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
      
            onClick={() => {setStarted(true); playSound("click"); fadeVolume(currentlyPlaying, 0.5, 100)}}
            className="px-10 py-6 bg-emerald-400 text-white text-xl rounded-full shadow-md transition hover:bg-emerald-500 hover:scale-105"
            style={{ fontFamily: "Fredoka, sans-serif" }}
          >
            ▶️ Start
          </button>
        </>
      )}

      {started && !finished && (
        <>
          <h1 style={{ fontFamily: "Fredoka, sans-serif" }} className="text-2xl text-sky-800 font-semibold mb-4">
            🧬 Pick a {currentPart}!
          </h1>

          <div className="relative mb-6">
            <img src={Botto} alt="Bot" className="w-48 max-sm:mr-35" />
            <div
              className="absolute left-30 -top-15 ml-2 sm:ml-4 w-64 h-36"
            >
              <img src={DClound} alt="Speech Bubble" className="w-full h-full" />
              <div className="absolute top-6 left-10 right-9 bottom-8 flex items-center justify-center text-center overflow-hidden">
                <p className="text-sm text-gray-700 font-mono font-bold break-words whitespace-normal">
                  <Typewriter
                    key={currentPart}
                    words={[`Choose a ${currentPart} part for your creature!`]}
                    loop={1}
                    typeSpeed={30}
                    delaySpeed={1000}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {parts[currentPart].map((option) => (
              <button
                key={option}
                onClick={() => {handlePartSelect(option); playSound("click")}}
                className="px-8 py-6 bg-white text-black text-base rounded-full shadow-md transition hover:bg-emerald-300 hover:scale-105"
                style={{ fontFamily: "Fredoka, sans-serif" }}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

{finished && (
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
    <h1 style={{ fontFamily: "Fredoka, sans-serif" }} className="text-2xl text-sky-800 font-semibold mb-14">
      🎉 Your Creature is Ready!
    </h1>

    <div className="relative flex justify-center">
      <img src={Botto} alt="Bot" className="w-48 max-sm:mr-35" />
      <div
        className="absolute left-28 -top-15 ml-2 sm:ml-4 w-64 h-36"
      >
        <img src={DClound} alt="Speech Bubble" className="w-full h-full" />
        <div className="absolute top-6 left-10 right-9 bottom-8 flex items-center justify-center text-center overflow-hidden">
          <p className="text-sm text-gray-700 font-mono font-bold break-words whitespace-normal">
            <Typewriter
              words={[`Meet your new creature!`]}
              loop={1}
              typeSpeed={30}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </div>

    <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl shadow-md px-4 py-4 w-70 h-63 flex flex-col items-center justify-center">
      <p className="text-lg font-medium text-sky-900 mb-1">
        🦄 {selections.head}-{selections.body}-{selections.tail}
      </p>
      <img
        src={`/creatures/${selections.head.toLowerCase()}-${selections.body.toLowerCase()}-${selections.tail.toLowerCase()}.jpg`}
        alt={`${selections.head}-${selections.body}-${selections.tail}`}
        className="w-auto h-[85%] object-contain mb-1"
      />
      <p className="text-sm text-sky-700">
        Amazing combination!
      </p>
    </div>

    <div className="flex gap-5">
      <button
        onClick={() => {
          setSelections({});
          setCurrentPart("head");
          setFinished(false);
          setStarted(false);
          playSound("click")
        }}
        className="mt-4 px-7 py-5 bg-white text-black text-base rounded-full shadow-md hover:bg-emerald-300 hover:scale-105"
        style={{ fontFamily: "Fredoka, sans-serif" }}
      >
        🔁 Create Another
      </button>
      <Link to="/">
        <button
          className="mt-4 px-7 py-5 bg-white text-black text-base rounded-full shadow-md hover:bg-emerald-300 hover:scale-105"
          style={{ fontFamily: "Fredoka, sans-serif" }}
          onClick={playSound("click")}
        >
          🏠 Home
        </button>
      </Link>
    </div>
  </>
)}
</div>
);
}