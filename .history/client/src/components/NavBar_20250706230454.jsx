import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-64 min-h-screen bg-sky-200 shadow-lg p-4 flex flex-col gap-2 rounded-tr-2xl rounded-br-2xl">
      <h2 className="text-xl font-bold text-sky-900 mb-4">🎮 Game Menu</h2>

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
