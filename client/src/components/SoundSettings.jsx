// File: src/components/SoundSettings.jsx

import { useState, useEffect } from "react";
import { setVolumes, getVolumes, playSound } from "../components/MusicManager";

export default function SoundSettings() {
  const [bgVolume, setBgVolume] = useState(0.4);
  const [sfxVolume, setSfxVolume] = useState(0.5);

  useEffect(() => {
    const { bg, sfx } = getVolumes();
    setBgVolume(bg);
    setSfxVolume(sfx);
  }, []);

  const handleChange = (type, value) => {
    const vol = Math.max(0, Math.min(1, value));
    if (type === "bg") setBgVolume(vol);
    else if (type === "sfx") setSfxVolume(vol);
    setVolumes({ bg: type === "bg" ? vol : bgVolume, sfx: type === "sfx" ? vol : sfxVolume });
  };

  return (
    <div className="flex flex-col gap-5 px-2">
      <div>
        <label className="block text-sky-900 font-semibold mb-1">Background Music</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={bgVolume}
          onChange={(e) => handleChange("bg", parseFloat(e.target.value))}
          className="w-full cursor-pointer accent-sky-600"
        />
        <p className="text-xs text-sky-800 text-right select-none">{Math.round(bgVolume * 100)}%</p>
      </div>

      <div>
        <label className="block text-sky-900 font-semibold mb-1">Sound Effects</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sfxVolume}
          onChange={(e) => handleChange("sfx", parseFloat(e.target.value))}
          onMouseUp={() => playSound("click")}
          className="w-full cursor-pointer accent-sky-600"
        />
        <p className="text-xs text-sky-800 text-right select-none">{Math.round(sfxVolume * 100)}%</p>
      </div>
    </div>
  );
}
