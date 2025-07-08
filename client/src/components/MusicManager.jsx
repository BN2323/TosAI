// MusicManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const menuMusic = new Audio("/sounds/menu.mp3");
const clueMusic = new Audio("/sounds/clue.mp3");
const labMusic = new Audio("/sounds/lab.mp3");
const clickSound = new Audio("/sounds/click.mp3");
const winSound = new Audio("/sounds/win.mp3");

menuMusic.loop = true;
clueMusic.loop = true;
labMusic.loop = true;

// Default volumes (can be overridden by setVolumes)
menuMusic.volume = 0.4;
clueMusic.volume = 0.3;
labMusic.volume = 0.3;

export let currentlyPlaying = null;

const fadeIntervals = new WeakMap();

export function fadeVolume(audio, targetVolume, duration = 1000) {
  if (!audio || typeof audio.volume !== "number") return;
  
  targetVolume = Math.min(Math.max(0, targetVolume), 1);

  if (fadeIntervals.has(audio)) {
    clearInterval(fadeIntervals.get(audio));
    fadeIntervals.delete(audio);
  }

  if (targetVolume === audio.volume) return;

  const steps = 20;
  const stepTime = duration / steps;
  const startVolume = audio.volume;
  const volumeStep = (targetVolume - startVolume) / steps;

  let currentStep = 0;
  const fade = setInterval(() => {
    currentStep++;
    let newVolume = startVolume + volumeStep * currentStep;
    newVolume = Math.min(Math.max(0, newVolume), 1);
    audio.volume = newVolume;

    if (currentStep >= steps) {
      clearInterval(fade);
      fadeIntervals.delete(audio);
      audio.volume = targetVolume;
    }
  }, stepTime);

  fadeIntervals.set(audio, fade);
}

export default function MusicManager() {
  const location = useLocation();

  useEffect(() => {
    if (currentlyPlaying) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
    }

    let selected;
    if (location.pathname === "/") selected = menuMusic;
    else if (location.pathname === "/clue-game") selected = clueMusic;
    else if (location.pathname === "/creature-lab") selected = labMusic;

    if (selected) {
      selected.play().catch(() => {}); // catch autoplay errors
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
  return clone;
}

// Volume controls stored here and applied on all audios
let volumes = { bg: 0.3, sfx: 0.5 };

export function setVolumes(newVolumes) {
  if (typeof newVolumes.bg === "number") {
    volumes.bg = Math.min(Math.max(0, newVolumes.bg), 1);
    menuMusic.volume = volumes.bg;
    clueMusic.volume = volumes.bg;
    labMusic.volume = volumes.bg;
    if (currentlyPlaying) currentlyPlaying.volume = volumes.bg;
  }
  if (typeof newVolumes.sfx === "number") {
    volumes.sfx = Math.min(Math.max(0, newVolumes.sfx), 1);
    clickSound.volume = volumes.sfx;
    winSound.volume = volumes.sfx;
  }
}

export function getVolumes() {
  return { ...volumes };
}
