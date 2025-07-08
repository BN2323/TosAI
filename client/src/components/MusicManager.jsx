import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Preload audio files
const menuMusic = new Audio("/sounds/menu.mp3");
const clueMusic = new Audio("/sounds/clue.mp3");
const labMusic = new Audio("/sounds/lab.mp3");

menuMusic.loop = true;
clueMusic.loop = true;
labMusic.loop = true;

menuMusic.volume = 0.4;
clueMusic.volume = 0.4;
labMusic.volume = 0.4;

let currentlyPlaying = null;

export default function MusicManager() {
  const location = useLocation();

  useEffect(() => {
    // Stop currently playing music
    if (currentlyPlaying) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
    }

    // Determine which music to play
    let selected;
    if (location.pathname === "/") selected = menuMusic;
    else if (location.pathname === "/clue-game") selected = clueMusic;
    else if (location.pathname === "/creature-lab") selected = labMusic;

    if (selected) {
      selected.play();
      currentlyPlaying = selected;
    }
  }, [location.pathname]);

  return null;
}
