// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";       // your tutorial page
import MiniGame from "./pages/MiniGame";
import ClueGame from "./pages/ClueGame";
import CreatureLab from "./pages/CreatureLab";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
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
