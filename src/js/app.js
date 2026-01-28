import { AudioManager } from './audio/AudioManager.js'

// Initialize the controller
const lofiManager = new AudioManager("lofiTrack")
const lofiVolumeSlider = document.getElementById("lofiVolume")

const natureManager = new AudioManager("natureTrack")
const natureVolumeSlider = document.getElementById("natureVolume")

// Grab the buttons from the DOM
const lofiPlayBtn = document.getElementById("lofiPlayButton");
const lofiPauseBtn = document.getElementById("lofiPauseButton");

const naturePlayBtn = document.getElementById("naturePlayButton");
const naturePauseBtn = document.getElementById("naturePauseButton");

// Initial sync
lofiManager.setVolume(0.3)
lofiVolumeSlider.value = 0.3

natureManager.setVolume(0.3)
natureVolumeSlider.value = 0.3

//Event Listeners
// Update track volume when slider changes
lofiVolumeSlider.addEventListener("input", e => {
  lofiManager.setVolume(e.target.value)
})

natureVolumeSlider.addEventListener("input", e => {
  natureManager.setVolume(e.target.value)
})

// Attach the functions to the click event
lofiPlayBtn.addEventListener("click", () => lofiManager.play())
lofiPauseBtn.addEventListener("click", () => lofiManager.pause())

naturePlayBtn.addEventListener("click", () => natureManager.play())
naturePauseBtn.addEventListener("click", () => natureManager.pause())
