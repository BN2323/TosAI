import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClueGame from "./pages/ClueGame";
import CreatureLab from "./pages/CreatureLab";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <NavBar />

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clue-game" element={<ClueGame />} />
            <Route path="/creature-lab" element={<CreatureLab />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
