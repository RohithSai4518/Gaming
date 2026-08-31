/**
 * Base Entity Class
 * Foundational class for Player, Enemies, Projectiles, and Interactive Props.
 */
class Entity {
    constructor(x = 0, y = 0, width = 24, height = 24) {
        this.pos = new Vec2(x, y);
        this.vel = new Vec2(0, 0);
        this.size = new Vec2(width, height);
        this.radius = Math.max(width, height) / 2;

        this.hp = 100;
        this.maxHp = 100;
        this.dead = false;

        this.invulnerableTimer = 0;
        this.flashTimer = 0;

        this.tags = new Set();
    }

    get center() {
        return new Vec2(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2);
    }

    get bounds() {
        return {
            x: this.pos.x,
            y: this.pos.y,
            w: this.size.x,
            h: this.size.y
        };
    }

    takeDamage(amount, sourceAngle = 0, knockback = 0) {
        if (this.invulnerableTimer > 0 || this.dead) return 0;

        this.hp = Math.max(0, this.hp - amount);
        this.flashTimer = 0.12;

        if (knockback > 0) {
            this.vel.x += Math.cos(sourceAngle) * knockback;
            this.vel.y += Math.sin(sourceAngle) * knockback;
        }

        if (this.hp <= 0) {
            this.dead = true;
        }

        return amount;
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    update(dt, engine) {
        if (this.invulnerableTimer > 0) this.invulnerableTimer -= dt;
        if (this.flashTimer > 0) this.flashTimer -= dt;

        // Apply friction and integrate velocity
        this.pos.x += this.vel.x * dt;
        this.pos.y += this.vel.y * dt;
        this.vel.mult(Math.pow(0.85, dt * 60));
    }

    render(ctx) {
        // Fallback debug bounding box
        ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : '#ff00ff';
        ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
}
