/**
 * Enemy AI Entities
 * Slime, Archer Drone, Mage, and the Multi-Phase Dungeon Overlord Boss.
 */
class Enemy extends Entity {
    constructor(x, y, type = 'slime') {
        super(x, y, 26, 26);
        this.type = type; // 'slime', 'archer', 'mage', 'boss'
        this.aiTimer = 0;
        this.attackCooldown = 0;
        this.scoreValue = 100;
        this.goldDrop = 5;

        this.setupStats();
    }

    setupStats() {
        if (this.type === 'slime') {
            this.maxHp = 45;
            this.hp = 45;
            this.speed = 105;
            this.contactDamage = 15;
            this.color = '#00ff66';
            this.scoreValue = 100;
            this.goldDrop = 5;
        } else if (this.type === 'archer') {
            this.maxHp = 60;
            this.hp = 60;
            this.speed = 90;
            this.contactDamage = 10;
            this.color = '#ff9900';
            this.scoreValue = 200;
            this.goldDrop = 12;
            this.preferredDist = 220;
        } else if (this.type === 'mage') {
            this.maxHp = 85;
            this.hp = 85;
            this.speed = 70;
            this.contactDamage = 15;
            this.color = '#bf5af2';
            this.scoreValue = 350;
            this.goldDrop = 20;
        } else if (this.type === 'boss') {
            this.size.set(56, 56);
            this.radius = 28;
            this.maxHp = 650;
            this.hp = 650;
            this.speed = 85;
            this.contactDamage = 35;
            this.color = '#ff0055';
            this.scoreValue = 2500;
            this.goldDrop = 100;
            this.bossPhase = 1;
        }
    }

    update(dt, engine) {
        if (this.dead) return;

        const player = engine.player;
        if (!player || player.dead) return;

        const distToPlayer = Vec2.distance(this.center, player.center);
        const dirToPlayer = Vec2.sub(player.center, this.center).normalize();

        this.aiTimer += dt;
        if (this.attackCooldown > 0) this.attackCooldown -= dt;

        // Enemy AI States
        if (this.type === 'slime') {
            // Direct aggressive chase
            if (distToPlayer < 400) {
                this.vel.x = dirToPlayer.x * this.speed;
                this.vel.y = dirToPlayer.y * this.speed;
            }
        } else if (this.type === 'archer') {
            // Kiting AI: Maintains distance, shoots arrows
            if (distToPlayer < 450) {
                if (distToPlayer < this.preferredDist - 40) {
                    // Back away
                    this.vel.x = -dirToPlayer.x * this.speed;
                    this.vel.y = -dirToPlayer.y * this.speed;
                } else if (distToPlayer > this.preferredDist + 40) {
                    // Approach
                    this.vel.x = dirToPlayer.x * this.speed;
                    this.vel.y = dirToPlayer.y * this.speed;
                } else {
                    // Strafe sideways
                    this.vel.x = -dirToPlayer.y * (this.speed * 0.75);
                    this.vel.y = dirToPlayer.x * (this.speed * 0.75);
                }

                // Shoot projectile
                if (this.attackCooldown <= 0 && distToPlayer < 350) {
                    this.attackCooldown = 1.6;
                    const vx = dirToPlayer.x * 280;
                    const vy = dirToPlayer.y * 280;
                    engine.projectiles.push(new Projectile(this.center.x, this.center.y, vx, vy, 15, true, 'bullet'));
                    engine.sound.playLaser();
                }
            }
        } else if (this.type === 'mage') {
            // Teleporting & casting fireballs
            if (distToPlayer < 120 && this.attackCooldown <= 0.5) {
                // Teleport away to safe distance
                const angle = Math.random() * Math.PI * 2;
                const teleDist = 180 + Math.random() * 80;
                this.pos.x = player.center.x + Math.cos(angle) * teleDist;
                this.pos.y = player.center.y + Math.sin(angle) * teleDist;
                engine.particles.emitExplosion(this.center.x, this.center.y, 10, '#bf5af2');
            }

            if (this.attackCooldown <= 0 && distToPlayer < 400) {
                this.attackCooldown = 2.2;
                const vx = dirToPlayer.x * 220;
                const vy = dirToPlayer.y * 220;
                engine.projectiles.push(new Projectile(this.center.x, this.center.y, vx, vy, 24, true, 'fireball'));
                engine.sound.playPlasma();
            }
        } else if (this.type === 'boss') {
            // Multi-phase Boss
            this.vel.x = dirToPlayer.x * this.speed;
            this.vel.y = dirToPlayer.y * this.speed;

            if (this.attackCooldown <= 0) {
                this.attackCooldown = 2.0;

                // Attack Pattern 1: Radial bullet ring
                const count = 10;
                for (let i = 0; i < count; i++) {
                    const angle = (i / count) * Math.PI * 2 + this.aiTimer;
                    const vx = Math.cos(angle) * 180;
                    const vy = Math.sin(angle) * 180;
                    engine.projectiles.push(new Projectile(this.center.x, this.center.y, vx, vy, 20, true, 'boss_orb'));
                }
                engine.sound.playBossRoar();
                engine.camera.shake(6);
            }
        }

        // Contact damage with player
        if (distToPlayer < (this.radius + player.radius) && player.invulnerableTimer <= 0) {
            const dmgAngle = Math.atan2(player.center.y - this.center.y, player.center.x - this.center.x);
            player.takeDamage(this.contactDamage, dmgAngle, 260);
            engine.particles.emitDamageText(player.center.x, player.center.y, `-${this.contactDamage}`, '#ff3366');
            engine.particles.emitExplosion(player.center.x, player.center.y, 12, '#ff3366');
            engine.camera.shake(5);
            engine.sound.playHit();
        }

        super.update(dt, engine);

        // Resolve wall collisions
        Collision.resolveBoxTilemap(this, engine.tilemap);
    }

    onDeath(engine) {
        engine.particles.emitExplosion(this.center.x, this.center.y, 25, this.color);
        engine.sound.playExplosion();

        // Drop coins
        for (let i = 0; i < Math.max(1, Math.floor(this.goldDrop / 5)); i++) {
            const ox = (Math.random() * 2 - 1) * 16;
            const oy = (Math.random() * 2 - 1) * 16;
            engine.items.push(new Item(this.center.x + ox, this.center.y + oy, 'coin'));
        }

        // Chance to drop health or energy
        if (Math.random() < 0.35) {
            const itemType = Math.random() > 0.5 ? 'health' : 'energy';
            engine.items.push(new Item(this.center.x, this.center.y, itemType));
        }

        // Reward score
        engine.player.score += this.scoreValue;
        engine.enemiesKilled++;
    }

    render(ctx) {
        ctx.save();
        const cx = this.center.x;
        const cy = this.center.y;

        ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;

        if (this.type === 'slime') {
            // Squishy organic blob
            const squish = Math.sin(this.aiTimer * 8) * 2;
            ctx.beginPath();
            ctx.ellipse(cx, cy, this.radius + squish, this.radius - squish, 0, 0, Math.PI * 2);
            ctx.fill();

            // Slime eyes
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.arc(cx - 5, cy - 2, 2.5, 0, Math.PI * 2);
            ctx.arc(cx + 5, cy - 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'archer') {
            // Triangular mechanical drone
            ctx.beginPath();
            ctx.moveTo(cx, cy - this.radius);
            ctx.lineTo(cx + this.radius, cy + this.radius);
            ctx.lineTo(cx - this.radius, cy + this.radius);
            ctx.closePath();
            ctx.fill();
        } else if (this.type === 'mage') {
            // Diamond mystic sorcerer
            ctx.beginPath();
            ctx.moveTo(cx, cy - this.radius);
            ctx.lineTo(cx + this.radius, cy);
            ctx.lineTo(cx, cy + this.radius);
            ctx.lineTo(cx - this.radius, cy);
            ctx.closePath();
            ctx.fill();
        } else if (this.type === 'boss') {
            // Grand skull-like Boss
            ctx.beginPath();
            ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
            ctx.fill();

            // Boss glowing horns
            ctx.fillStyle = '#ffaa00';
            ctx.beginPath();
            ctx.moveTo(cx - 16, cy - 20);
            ctx.lineTo(cx - 24, cy - 36);
            ctx.lineTo(cx - 8, cy - 24);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(cx + 16, cy - 20);
            ctx.lineTo(cx + 24, cy - 36);
            ctx.lineTo(cx + 8, cy - 24);
            ctx.closePath();
            ctx.fill();
        }

        // Draw Health Bar above entity if damaged
        if (this.hp < this.maxHp && this.type !== 'boss') {
            const barW = this.size.x;
            const barH = 4;
            const bx = this.pos.x;
            const by = this.pos.y - 8;

            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(bx, by, barW, barH);

            const hpRatio = Math.max(0, this.hp / this.maxHp);
            ctx.fillStyle = '#ff3366';
            ctx.fillRect(bx, by, barW * hpRatio, barH);
        }

        ctx.restore();
    }
}
