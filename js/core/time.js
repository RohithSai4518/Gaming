/**
 * High-Precision Game Timer and Frame Timing Handler
 */
class Time {
    constructor() {
        this.now = performance.now();
        this.last = this.now;
        this.dt = 0;
        this.rawDt = 0;
        this.timeScale = 1.0;
        this.maxDt = 0.05; // Cap delta-time to prevent physics tunneling during lag spikes
        this.frameCount = 0;
        this.fps = 60;
        this.fpsTimer = 0;
        this.elapsedTime = 0;
    }

    update() {
        this.now = performance.now();
        this.rawDt = (this.now - this.last) / 1000;
        this.last = this.now;

        // Clamp delta time to avoid large jumps
        const clampedDt = Math.min(this.rawDt, this.maxDt);
        this.dt = clampedDt * this.timeScale;
        this.elapsedTime += this.dt;

        // FPS calculation
        this.frameCount++;
        this.fpsTimer += this.rawDt;
        if (this.fpsTimer >= 0.5) {
            this.fps = Math.round((this.frameCount / this.fpsTimer));
            this.frameCount = 0;
            this.fpsTimer = 0;
        }
    }

    setTimeScale(scale) {
        this.timeScale = Math.max(0, scale);
    }
}
