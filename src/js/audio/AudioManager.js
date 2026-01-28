export class AudioManager {
    constructor(audioElementId) {
        this.track = document.getElementById(audioElementId);
        if (this.track){
            this.track.loop = true
        }
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