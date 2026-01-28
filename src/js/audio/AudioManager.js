export class AudioManager {
    constructor(audioElementId) {
        this.track = document.getElementById(audioElementId);
    }

    setVolume(value) {
        if (this.track) {
            this.track.volume = value;
        }
    }

    play() {
        this.track?.play();
    }

    pause() {
        this.track?.pause();
    }
}