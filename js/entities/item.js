/**
 * Pickups and Loot System
 * Health packs, Energy cells, Gold coins, and Weapon unlock crates.
 */
class Item extends Entity {
    constructor(x, y, type = 'coin') {
        super(x, y, 20, 20);
        this.type = type; // 'coin', 'health', 'energy', 'weapon_crate'
        this.bobOffset = Math.random() * Math.PI * 2;
        this.baseY = y;
        this.attractDist = 120;
        this.attractSpeed = 240;
    }

    update(dt, engine) {
        this.bobOffset += dt * 4;
        this.pos.y = this.baseY + Math.sin(this.bobOffset) * 4;

        // Magnet / Attraction towards player
        const player = engine.player;
        if (player && !player.dead) {
            const dist = Vec2.distance(this.center, player.center);
            if (dist < this.attractDist) {
                const dir = Vec2.sub(player.center, this.center).normalize();
                this.baseY += dir.y * this.attractSpeed * dt;
                this.pos.x += dir.x * this.attractSpeed * dt;
            }

            // Pickup collection check
            if (dist < (this.radius + player.radius)) {
                this.collect(player, engine);
            }
        }
    }

    collect(player, engine) {
        this.dead = true;

        if (this.type === 'coin') {
            player.gold += 10;
            player.score += 50;
            engine.sound.playCoin();
            engine.particles.emitDamageText(this.pos.x, this.pos.y, '+10 🪙', '#ffcc00');
        } else if (this.type === 'health') {
            player.heal(30);
            engine.sound.playPowerup();
            engine.particles.emitDamageText(this.pos.x, this.pos.y, '+30 HP', '#00ff66');
        } else if (this.type === 'energy') {
            player.energy = Math.min(player.maxEnergy, player.energy + 25);
            engine.sound.playPowerup();
            engine.particles.emitDamageText(this.pos.x, this.pos.y, '+25 NRG', '#00b0ff');
        } else if (this.type === 'weapon_crate') {
            const unlocked = player.unlockRandomWeapon();
            engine.sound.playPowerup();
            engine.particles.emitDamageText(this.pos.x, this.pos.y, `UNLOCKED: ${unlocked}`, '#bf5af2');
        }
    }

    render(ctx) {
        ctx.save();
        const cx = this.pos.x + this.size.x / 2;
        const cy = this.pos.y + this.size.y / 2;

        if (this.type === 'coin') {
            ctx.fillStyle = '#ffcc00';
            ctx.shadowColor = '#ffcc00';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(cx, cy, 7, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#e6b800';
            ctx.beginPath();
            ctx.arc(cx, cy, 4, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'health') {
            ctx.fillStyle = '#ff3366';
            ctx.shadowColor = '#ff3366';
            ctx.shadowBlur = 8;
            ctx.fillRect(cx - 7, cy - 7, 14, 14);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 5, cy - 2, 10, 4);
            ctx.fillRect(cx - 2, cy - 5, 4, 10);
        } else if (this.type === 'energy') {
            ctx.fillStyle = '#00b0ff';
            ctx.shadowColor = '#00b0ff';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.moveTo(cx, cy - 8);
            ctx.lineTo(cx + 7, cy + 4);
            ctx.lineTo(cx - 7, cy + 4);
            ctx.closePath();
            ctx.fill();
        } else if (this.type === 'weapon_crate') {
            ctx.fillStyle = '#9d4edd';
            ctx.shadowColor = '#9d4edd';
            ctx.shadowBlur = 10;
            ctx.fillRect(cx - 8, cy - 8, 16, 16);

            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.strokeRect(cx - 6, cy - 6, 12, 12);
        }

        ctx.restore();
    }
}
