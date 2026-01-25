// Audio element for the lofi track
const lofiTrack = document.getElementById("lofiTrack")

// Volume slider element
const lofiVolume = document.getElementById("lofiVolume")

// Set initial volume to 30% and Sync slider with audio volume on load
lofiTrack.volume = 0.3
lofiVolume.value = lofiTrack.volume

// Update track volume when slider changes
lofiVolume.addEventListener("input", e => {
  lofiTrack.volume = e.target.value
})

// Play the lofi track
function playLofi() {
  lofiTrack.play()
}

// Pause the lofi track
function pauseLofi() {
  lofiTrack.pause()
}