/**
 * Particle and Combat FX System
 * Manages explosions, bullet sparks, blood splatter, dust, and floating damage numbers.
 */
class Particle {
    constructor(x, y, vx, vy, color, size, life, decayRate = 1.0, shape = 'circle', text = null) {
        this.pos = new Vec2(x, y);
        this.vel = new Vec2(vx, vy);
        this.color = color;
        this.size = size;
        this.initialSize = size;
        this.life = life;
        this.maxLife = life;
        this.decayRate = decayRate;
        this.shape = shape; // 'circle', 'spark', 'text'
        this.text = text;
        this.dead = false;
        this.friction = 0.95;
    }

    update(dt) {
        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
        this.vel.mult(this.friction);

        this.life -= dt * this.decayRate;
        if (this.life <= 0) {
            this.dead = true;
        }

        if (this.shape !== 'text') {
            this.size = this.initialSize * (this.life / this.maxLife);
        }
    }

    render(ctx) {
        const alpha = Math.max(0, Math.min(1, this.life / this.maxLife));
        ctx.save();
        ctx.globalAlpha = alpha;

        if (this.shape === 'text') {
            ctx.fillStyle = this.color;
            ctx.font = 'bold 13px Segoe UI, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(this.text, this.pos.x, this.pos.y);
        } else if (this.shape === 'spark') {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = Math.max(1, this.size);
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(this.pos.x - this.vel.x * 0.05, this.pos.y - this.vel.y * 0.05);
            ctx.stroke();
        } else {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, Math.max(0.5, this.size), 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}

class ParticleEmitter {
    constructor() {
        this.particles = [];
    }

    update(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.update(dt);
            if (p.dead) {
                this.particles.splice(i, 1);
            }
        }
    }

    render(ctx) {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].render(ctx);
        }
    }

    emitExplosion(x, y, count = 25, color = '#ff5500') {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 40 + Math.random() * 200;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = 3 + Math.random() * 5;
            const life = 0.3 + Math.random() * 0.4;
            const c = Math.random() > 0.4 ? color : '#ffcc00';
            this.particles.push(new Particle(x, y, vx, vy, c, size, life, 1.0, 'circle'));
        }
    }

    emitSparks(x, y, count = 8, color = '#00f0ff') {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 60 + Math.random() * 140;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = 2 + Math.random() * 2;
            const life = 0.15 + Math.random() * 0.25;
            this.particles.push(new Particle(x, y, vx, vy, color, size, life, 1.0, 'spark'));
        }
    }

    emitDamageText(x, y, text, color = '#ff3366') {
        const vx = (Math.random() * 2 - 1) * 20;
        const vy = -40 - Math.random() * 30;
        this.particles.push(new Particle(x, y, vx, vy, color, 14, 0.7, 1.0, 'text', text));
    }

    emitDashTrail(x, y, color = 'rgba(0, 240, 255, 0.5)') {
        this.particles.push(new Particle(x, y, 0, 0, color, 12, 0.2, 1.0, 'circle'));
    }
}
