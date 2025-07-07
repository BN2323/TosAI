import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

function NavBar( {showNav, setShowNav} ) {

  return (
    <nav className={`${showNav ? "block" : "hidden "} fixed z-10 top-0 left-0 transform ${showNav ? "translate-x-0" : "-translate-x-full"} w-64 min-h-screen bg-sky-200 shadow-lg p-4 flex flex-col gap-2 rounded-tr-2xl rounded-br-2xl transition-all ease-in-out duration-400`}>
      <div className="relative flex items-center justify-between">
        <h2 className="text-xl font-bold text-sky-900 mb-4">🎮 Game Menu</h2>
        <button className="absolute top-1 right-1 p-0.5 hover:bg-sky-900/70 rounded-full hover:text-white transition-all duration-100" onClick={() => setShowNav(!showNav)}><GrClose size={20}/></button>
      </div>
      <Link
        to="/"
        className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
      >
        🏠 Home
      </Link>

      <Link
        to="/clue-game"
        className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
      >
        🧠 Clue Game
      </Link>

      <Link
        to="/creature-lab"
        className="p-3 rounded-lg hover:bg-amber-300 transition-colors duration-200 font-medium"
      >
        🧪 Creature Lab
      </Link>
    </nav>
  );
}

export default NavBar;
