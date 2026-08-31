/**
 * Projectile System
 * Manages bullet trajectories, energy blasts, fireball effects, and penetration/bounce.
 */
class Projectile extends Entity {
    constructor(x, y, vx, vy, damage = 10, isEnemy = false, type = 'bullet') {
        super(x, y, 8, 8);
        this.vel.set(vx, vy);
        this.damage = damage;
        this.isEnemy = isEnemy;
        this.type = type; // 'bullet', 'pellet', 'plasma', 'fireball', 'boss_orb'
        this.life = 2.5; // Seconds before self-destruct
        this.color = isEnemy ? '#ff3366' : '#00f0ff';

        if (type === 'pellet') {
            this.size.set(6, 6);
            this.life = 0.6;
            this.color = '#ffcc00';
        } else if (type === 'plasma') {
            this.size.set(14, 14);
            this.life = 1.8;
            this.color = '#bf5af2';
        } else if (type === 'fireball') {
            this.size.set(10, 10);
            this.life = 3.0;
            this.color = '#ff6b00';
        } else if (type === 'boss_orb') {
            this.size.set(16, 16);
            this.life = 4.0;
            this.color = '#ff0055';
        }
    }

    update(dt, engine) {
        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;

        this.life -= dt;
        if (this.life <= 0) {
            this.dead = true;
            return;
        }

        // Wall collision test
        const tileX = Math.floor((this.pos.x + this.size.x / 2) / engine.tilemap.tileSize);
        const tileY = Math.floor((this.pos.y + this.size.y / 2) / engine.tilemap.tileSize);

        if (engine.tilemap.isSolid(tileX, tileY)) {
            this.dead = true;
            engine.particles.emitSparks(this.pos.x, this.pos.y, 6, this.color);
        }
    }

    render(ctx) {
        ctx.save();
        const cx = this.pos.x + this.size.x / 2;
        const cy = this.pos.y + this.size.y / 2;

        if (this.type === 'plasma' || this.type === 'boss_orb') {
            // Glowing energy orb
            const rad = this.size.x / 2;
            const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, rad);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.5, this.color);
            grad.addColorStop(1, 'transparent');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, rad, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Glowing projectile
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(cx, cy, this.size.x / 2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}
