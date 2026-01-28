export class Controls {
    constructor(manager, playBtnId, pauseBtnId, volumeSliderId) {
        this.manager = manager;
        this.playBtn = document.getElementById(playBtnId);
        this.pauseBtn = document.getElementById(pauseBtnId);
        this.volumeSlider = document.getElementById(volumeSliderId);

        this.init();
    }

    init() {
        // Initial sync
        this.volumeSlider.value = 0.3;

        // attribute click events
        this.playBtn.addEventListener("click", () => this.manager.play());
        this.pauseBtn.addEventListener("click", () => this.manager.pause());

        // attribute volume events
        this.volumeSlider.addEventListener("input", (e) => {
            this.manager.setVolume(e.target.value);
        });
    }

}