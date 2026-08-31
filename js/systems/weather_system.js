/**
 * Atmospheric Weather & Lighting FX System
 */
class WeatherSystem {
    constructor() {
        this.currentWeather = 'clear'; // 'clear', 'rain', 'sparks', 'fog'
        this.particles = [];
        this.thunderTimer = 0;
        this.thunderAlpha = 0;
    }

    setWeather(type) {
        this.currentWeather = type;
        this.particles = [];
    }

    update(dt, viewportWidth, viewportHeight) {
        if (this.currentWeather === 'rain') {
            if (this.particles.length < 150) {
                this.particles.push({
                    x: Math.random() * viewportWidth,
                    y: -10,
                    vx: -20 + Math.random() * 10,
                    vy: 300 + Math.random() * 100,
                    len: 8 + Math.random() * 6
                });
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            if (p.y > viewportHeight) {
                this.particles.splice(i, 1);
            }
        }
    }

    render(ctx) {
        if (this.currentWeather === 'rain') {
            ctx.save();
            ctx.strokeStyle = 'rgba(0, 200, 255, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (const p of this.particles) {
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.vx * 0.03, p.y + p.len);
            }
            ctx.stroke();
            ctx.restore();
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WeatherSystem };
}
