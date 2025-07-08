import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClueGame from "./pages/ClueGame";
import CreatureLab from "./pages/CreatureLab";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MusicManager from "./components/MusicManager";

export default function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <BrowserRouter>
      <MusicManager/>
      <button onClick={() => setShowNav(!showNav)} className={`${showNav ? "hidden" : "block"} fixed top-1 left-1 text-black/70 rounded-[10px] hover:bg-sky-900/70 hover:text-[#4FB0D3] transition-all duration-100`}><IoMenu size={30} /></button>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <NavBar showNav={showNav} setShowNav={setShowNav} />
        {/* Page Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/clue-game" element={<ClueGame />} />
            <Route path="/creature-lab" element={<CreatureLab />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
