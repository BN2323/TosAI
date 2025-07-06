// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";       // your tutorial page
import MiniGame from "./pages/MiniGame";
import ClueGame from "./pages/ClueGame";
import CreatureLab from "./pages/CreatureLab";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex flex-col gap-0.5 m-4 bg-sky-200">
        <Link to="/" className="hover:bg-amber-300  p-3">Home</Link>
        <Link to="/clue-game" className="hover:bg-amber-300  p-3">Clue Game</Link>
        <Link to="/creature-lab" className="hover:bg-amber-300  p-3">Creature Lab</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clue-game" element={<ClueGame />} />
          <Route path="/creature-lab" element={<CreatureLab />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
