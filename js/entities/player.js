/**
 * Player Entity Controller
 * Movement, dash evasion, weapon handling, aiming, and leveling.
 */
class Player extends Entity {
    constructor(x = 0, y = 0) {
        super(x, y, 28, 28);
        this.speed = 220;
        this.maxHp = 100;
        this.hp = 100;

        // Energy & Dash
        this.energy = 50;
        this.maxEnergy = 50;
        this.energyRegen = 15; // Per second
        this.dashCooldown = 0;
        this.dashDuration = 0;
        this.isDashing = false;
        this.dashSpeed = 600;
        this.dashDir = new Vec2(1, 0);

        // Stats & Progression
        this.score = 0;
        this.gold = 0;
        this.aimAngle = 0;

        // Weapons System
        this.weapons = [
            { id: 'blaster', name: 'Blaster', icon: '🔫', fireRate: 0.22, cost: 0, damage: 25, speed: 650, spread: 0.05, count: 1 },
            { id: 'shotgun', name: 'Scattergun', icon: '💥', fireRate: 0.55, cost: 12, damage: 18, speed: 550, spread: 0.35, count: 5, unlocked: false },
            { id: 'plasma', name: 'Plasma Rifle', icon: '⚡', fireRate: 0.38, cost: 18, damage: 60, speed: 450, spread: 0.02, count: 1, unlocked: false }
        ];
        this.activeWeaponIdx = 0;
        this.fireTimer = 0;
    }

    get activeWeapon() {
        return this.weapons[this.activeWeaponIdx];
    }

    unlockRandomWeapon() {
        const locked = this.weapons.filter(w => !w.unlocked);
        if (locked.length > 0) {
            const chosen = locked[Math.floor(Math.random() * locked.length)];
            chosen.unlocked = true;
            return chosen.name;
        }
        return 'Ammo Cache (+Max Energy)';
    }

    switchWeapon(index) {
        if (index >= 0 && index < this.weapons.length && (this.weapons[index].unlocked || index === 0)) {
            this.activeWeaponIdx = index;
            return true;
        }
        return false;
    }

    nextWeapon() {
        let next = (this.activeWeaponIdx + 1) % this.weapons.length;
        while (!this.weapons[next].unlocked && next !== 0) {
            next = (next + 1) % this.weapons.length;
        }
        this.activeWeaponIdx = next;
    }

    update(dt, engine) {
        // Regenerate Energy
        this.energy = Math.min(this.maxEnergy, this.energy + this.energyRegen * dt);

        if (this.dashCooldown > 0) this.dashCooldown -= dt;
        if (this.fireTimer > 0) this.fireTimer -= dt;

        // Handle Dash State
        if (this.isDashing) {
            this.dashDuration -= dt;
            this.pos.x += this.dashDir.x * this.dashSpeed * dt;
            this.pos.y += this.dashDir.y * this.dashSpeed * dt;
            engine.particles.emitDashTrail(this.center.x, this.center.y);

            if (this.dashDuration <= 0) {
                this.isDashing = false;
                this.invulnerableTimer = 0.1;
            }
        } else {
            // Normal Movement
            const move = engine.input.getMovementVector();

            if (move.magSq() > 0) {
                this.vel.x = move.x * this.speed;
                this.vel.y = move.y * this.speed;
                this.dashDir.copy(move);
            } else {
                this.vel.mult(0.8);
            }

            // Dash Trigger
            if ((engine.input.isKeyDown(' ') || engine.input.mouseRightPressed || engine.input.touchDashing) && this.dashCooldown <= 0 && this.energy >= 15) {
                this.isDashing = true;
                this.dashDuration = 0.16;
                this.dashCooldown = 0.6;
                this.invulnerableTimer = 0.25;
                this.energy -= 15;
                engine.sound.playDash();
            }

            super.update(dt, engine);
        }

        // Aiming towards mouse / target
        const mouseWorld = engine.input.worldMousePos;
        this.aimAngle = Math.atan2(mouseWorld.y - this.center.y, mouseWorld.x - this.center.x);

        // Weapon Firing
        if ((engine.input.mouseDown || engine.input.touchFiring) && this.fireTimer <= 0) {
            this.fire(engine);
        }

        // Weapon Switch Hotkeys
        if (engine.input.isKeyDown('1')) this.switchWeapon(0);
        if (engine.input.isKeyDown('2')) this.switchWeapon(1);
        if (engine.input.isKeyDown('3')) this.switchWeapon(2);
        if (engine.input.isKeyDown('q')) this.nextWeapon();

        // Resolve tilemap wall collisions
        Collision.resolveBoxTilemap(this, engine.tilemap);
    }

    fire(engine) {
        const weapon = this.activeWeapon;
        if (this.energy < weapon.cost) return;

        this.energy -= weapon.cost;
        this.fireTimer = weapon.fireRate;

        // Camera recoil shake
        engine.camera.shake(weapon.id === 'shotgun' ? 4 : 2);

        if (weapon.id === 'blaster') {
            engine.sound.playLaser();
            const angle = this.aimAngle + (Math.random() * 2 - 1) * weapon.spread;
            const vx = Math.cos(angle) * weapon.speed;
            const vy = Math.sin(angle) * weapon.speed;
            engine.projectiles.push(new Projectile(this.center.x, this.center.y, vx, vy, weapon.damage, false, 'bullet'));
        } else if (weapon.id === 'shotgun') {
            engine.sound.playShotgun();
            for (let i = 0; i < weapon.count; i++) {
                const spreadAngle = this.aimAngle + (Math.random() * 2 - 1) * weapon.spread;
                const spd = weapon.speed * (0.85 + Math.random() * 0.3);
                const vx = Math.cos(spreadAngle) * spd;
                const vy = Math.sin(spreadAngle) * spd;
                engine.projectiles.push(new Projectile(this.center.x, this.center.y, vx, vy, weapon.damage, false, 'pellet'));
            }
        } else if (weapon.id === 'plasma') {
            engine.sound.playPlasma();
            const vx = Math.cos(this.aimAngle) * weapon.speed;
            const vy = Math.sin(this.aimAngle) * weapon.speed;
            engine.projectiles.push(new Projectile(this.center.x, this.center.y, vx, vy, weapon.damage, false, 'plasma'));
        }
    }

    render(ctx) {
        ctx.save();
        const cx = this.center.x;
        const cy = this.center.y;

        // Draw Dash or Invulnerability Shield
        if (this.invulnerableTimer > 0) {
            ctx.strokeStyle = '#00f0ff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx, cy, this.radius + 6, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw Player Body
        ctx.fillStyle = this.flashTimer > 0 ? '#ffffff' : '#00d2ff';
        ctx.beginPath();
        ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner Core Glow
        ctx.fillStyle = '#0077ff';
        ctx.beginPath();
        ctx.arc(cx, cy, this.radius * 0.55, 0, Math.PI * 2);
        ctx.fill();

        // Draw Weapon Barrel pointing at aim angle
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(this.aimAngle) * (this.radius + 10), cy + Math.sin(this.aimAngle) * (this.radius + 10));
        ctx.stroke();

        ctx.restore();
    }
}
