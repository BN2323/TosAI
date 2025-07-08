import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { playSound } from "./MusicManager";
import { useState } from "react";
import SoundSettings from "./SoundSettings"; // your sound settings component

function NavBar({ showNav, setShowNav }) {
  const [showSettings, setShowSettings] = useState(false);

  const handleShowSettings = () => {
    playSound("click");
    setShowSettings(true);
  };

  const handleBackToMenu = () => {
    playSound("click");
    setShowSettings(false);
  };

  return (
    <nav
      className={`fixed z-10 top-0 left-0 w-64 min-h-screen bg-sky-200 shadow-lg p-4 flex flex-col gap-2 rounded-tr-2xl rounded-br-2xl
      transform transition-transform ease-in-out duration-300
      ${showNav ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="relative flex items-center justify-between">
        <h2 className="text-xl font-bold text-sky-900 mb-4">
          {showSettings ? "🎵 Sound Settings" : "🎮 Game Menu"}
        </h2>
        <button
          className="absolute top-1 right-1 p-0.5 hover:bg-sky-900/70 rounded-full hover:text-white transition-all duration-100"
          onClick={() => {
            setShowNav(false);
            playSound("click");
            setShowSettings(false);
          }}
        >
          <GrClose size={20} />
        </button>
      </div>

      {!showSettings ? (
        <>
          <Link
            to="/"
            className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
            onClick={playSound("click")}
          >
            🏠 Home
          </Link>

          <Link
            to="/clue-game"
            className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
            onClick={playSound("click")}
          >
            🧠 Clue Game
          </Link>

          <Link
            to="/creature-lab"
            className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
            onClick={playSound("click")}
          >
            🧪 Creature Lab
          </Link>

          <button
            onClick={handleShowSettings}
            className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium text-left"
          >
            ⚙️ Settings
          </button>
        </>
      ) : (
        <>
          <SoundSettings />

          <button
            onClick={handleBackToMenu}
            className="mt-auto p-3 rounded-lg bg-amber-300 hover:bg-amber-400 transition-colors duration-200 font-medium"
          >
            ← Back to Menu
          </button>
        </>
      )}
    </nav>
  );
}

export default NavBar;
