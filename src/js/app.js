import { AudioManager } from './audio/AudioManager.js'

// Initialize the controller
const lofiManager = new AudioManager("lofiTrack")
const lofiVolumeSlider = document.getElementById("lofiVolume")

// Grab the buttons from the DOM
const lofiPlayBtn = document.getElementById("playLofiButton");
const lofiPauseBtn = document.getElementById("pauseLofiButton");

// Initial sync
lofiManager.setVolume(0.3)
lofiVolumeSlider.value = 0.3

//Event Listeners
// Update track volume when slider changes
lofiVolumeSlider.addEventListener("input", e => {
  lofiManager.setVolume(e.target.value)
})

// Attach the functions to the click event
lofiPlayBtn.addEventListener("click", () => lofiManager.play());
lofiPauseBtn.addEventListener("click", () => lofiManager.pause());
