import { AudioManager } from './audio/AudioManager.js'
import { Controls } from './ui/Controls.js'

// Initialize the logic
const lofiManager = new AudioManager("lofiTrack")
const natureManager = new AudioManager("natureTrack")

// Initialize the interface 
new Controls(lofiManager, "lofiPlayButton", "lofiPauseButton", "lofiVolume")
new Controls(natureManager, "naturePlayButton", "naturePauseButton", "natureVolume")


