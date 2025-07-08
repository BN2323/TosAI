import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Preload audio files
const menuMusic = new Audio("/sounds/menu.mp3");
const clueMusic = new Audio("/sounds/clue.mp3");
const labMusic = new Audio("/sounds/lab.mp3");
const clickSound = new Audio("/sounds/click.mp3");
const winSound = new Audio("/sounds/win.mp3");

menuMusic.loop = true;
clueMusic.loop = true;
labMusic.loop = true;

menuMusic.volume = 0.4;
clueMusic.volume = 0.3;
labMusic.volume = 0.3;

export let currentlyPlaying = null;

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

export function playSound(name) {
  let sound;
  if (name === "click") sound = clickSound;
  else if (name === "win") sound = winSound;
  else return;

  const clone = sound.cloneNode();
  clone.volume = 0.5;
  clone.play().catch(() => {});
}

export function fadeVolume(audio, targetVolume, duration = 1000) {
  const steps = 20;
  const stepTime = duration / steps;
  const volumeStep = (targetVolume - audio.volume) / steps;

  let currentStep = 0;
  const fade = setInterval(() => {
    currentStep++;
    audio.volume = Math.min(Math.max(0, audio.volume + volumeStep), 1);
    if (currentStep >= steps) clearInterval(fade);
  }, stepTime);
}
