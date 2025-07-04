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
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/lesson">Tutorial</Link> |{" "}
        <Link to="/clue-game">Clue Game</Link> |{" "}
        <Link to="/creature-lab">Creature Lab</Link> |{" "}
        <Link to="/minigame">MiniGame Home</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/minigame" element={<MiniGame />} />
          <Route path="/clue-game" element={<ClueGame />} />
          <Route path="/creature-lab" element={<CreatureLab />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
