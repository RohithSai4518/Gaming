/**
 * Chamber Crawler - Core Game Engine
 * Coordinates game states, main update/render loop, entity collisions, and floor transitions.
 */
class Engine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.time = new Time();
        this.input = new Input(this.canvas);
        this.sound = new SoundEngine();
        this.camera = new Camera(window.innerWidth, window.innerHeight);
        this.particles = new ParticleEmitter();
        this.hud = new HUD();
        this.menu = new MenuManager(this);

        this.dungeonGen = new DungeonGenerator(46, 46, 48);
        this.tilemap = null;

        this.player = new Player(0, 0);
        this.enemies = [];
        this.projectiles = [];
        this.items = [];

        this.exitPos = null;
        this.floorLevel = 1;
        this.enemiesKilled = 0;
        this.bossEntity = null;

        this.gameState = 'MENU'; // 'MENU', 'PLAYING', 'PAUSED', 'GAMEOVER', 'VICTORY'

        this.setupCanvas();
        this.setupWindowEvents();
    }

    setupCanvas() {
        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.camera.resize(this.canvas.width, this.canvas.height);
        };
        window.addEventListener('resize', resize);
        resize();
    }

    setupWindowEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
                if (this.gameState === 'PLAYING') {
                    this.pauseGame();
                } else if (this.gameState === 'PAUSED') {
                    this.resumeGame();
                }
            }
        });
    }

    startNewGame() {
        this.sound.init();
        this.floorLevel = 1;
        this.enemiesKilled = 0;
        this.player = new Player(0, 0);
        this.loadFloor(this.floorLevel);
        this.gameState = 'PLAYING';
        this.menu.hideAll();
        this.hud.showNotification('Floor 1: Explore & find the portal stairs!');
    }

    loadFloor(level) {
        this.floorLevel = level;
        this.projectiles = [];
        this.items = [];
        this.enemies = [];
        this.bossEntity = null;

        const layout = this.dungeonGen.generate(level);
        this.tilemap = layout.tilemap;
        this.exitPos = layout.exitPos;

        // Position player at entrance
        this.player.pos.copy(layout.playerSpawn);
        this.player.vel.set(0, 0);

        // Spawn Enemies
        for (const spawn of layout.enemySpawns) {
            const enemy = new Enemy(spawn.pos.x, spawn.pos.y, spawn.type);
            this.enemies.push(enemy);
            if (spawn.type === 'boss') {
                this.bossEntity = enemy;
            }
        }

        // Spawn Items
        for (const itemSpawn of layout.itemSpawns) {
            this.items.push(new Item(itemSpawn.pos.x, itemSpawn.pos.y, itemSpawn.type));
        }

        // Configure Camera bounds
        this.camera.setBounds(0, 0, this.tilemap.cols * this.tilemap.tileSize, this.tilemap.rows * this.tilemap.tileSize);
        this.camera.pos.copy(this.player.pos);
        this.camera.target.copy(this.player.pos);

        // Initial visibility
        this.tilemap.updateVisibility(this.player.pos, 8);
    }

    pauseGame() {
        this.gameState = 'PAUSED';
        this.menu.showScreen('pause');
    }

    resumeGame() {
        this.gameState = 'PLAYING';
        this.menu.hideAll();
    }

    triggerGameOver() {
        this.gameState = 'GAMEOVER';
        this.sound.playExplosion();
        this.menu.showScreen('gameover');
    }

    triggerVictory() {
        this.gameState = 'VICTORY';
        this.sound.playLevelClear();
        this.menu.showScreen('victory');
    }

    nextFloor() {
        if (this.floorLevel >= 5) {
            this.triggerVictory();
        } else {
            this.floorLevel++;
            this.sound.playLevelClear();
            this.loadFloor(this.floorLevel);
            this.hud.showNotification(`Descended to Floor ${this.floorLevel}`);
        }
    }

    update() {
        this.time.update();
        const dt = this.time.dt;

        if (this.gameState !== 'PLAYING') {
            this.input.update(this.camera);
            return;
        }

        // Update Input state in world space
        this.input.update(this.camera);

        // Update Player
        this.player.update(dt, this);
        if (this.player.dead) {
            this.triggerGameOver();
            return;
        }

        // Update Camera
        this.camera.follow(this.player.center);
        this.camera.update(dt);

        // Update Tilemap Visibility / Fog of war
        this.tilemap.updateVisibility(this.player.pos, 8);

        // Update Projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.update(dt, this);

            if (p.dead) {
                this.projectiles.splice(i, 1);
                continue;
            }

            // Hit collision detection
            if (p.isEnemy) {
                // Enemy projectile hitting player
                if (Collision.aabb(p.bounds, this.player.bounds) && this.player.invulnerableTimer <= 0) {
                    p.dead = true;
                    this.player.takeDamage(p.damage);
                    this.sound.playHit();
                    this.particles.emitDamageText(this.player.center.x, this.player.center.y, `-${p.damage}`, '#ff3366');
                    this.particles.emitSparks(p.pos.x, p.pos.y, 8, '#ff3366');
                    this.camera.shake(4);
                    this.projectiles.splice(i, 1);
                }
            } else {
                // Player projectile hitting enemies
                for (let k = this.enemies.length - 1; k >= 0; k--) {
                    const enemy = this.enemies[k];
                    if (Collision.aabb(p.bounds, enemy.bounds)) {
                        p.dead = true;
                        const hitAngle = Math.atan2(enemy.center.y - p.pos.y, enemy.center.x - p.pos.x);
                        enemy.takeDamage(p.damage, hitAngle, 180);
                        this.sound.playHit();
                        this.particles.emitDamageText(enemy.center.x, enemy.center.y, `${p.damage}`, '#ffffff');
                        this.particles.emitSparks(p.pos.x, p.pos.y, 8, p.color);

                        if (enemy.dead) {
                            enemy.onDeath(this);
                            this.enemies.splice(k, 1);
                            if (enemy.type === 'boss') {
                                this.triggerVictory();
                            }
                        }
                        this.projectiles.splice(i, 1);
                        break;
                    }
                }
            }
        }

        // Update Enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            enemy.update(dt, this);
            if (enemy.dead) {
                this.enemies.splice(i, 1);
            }
        }

        // Update Items
        for (let i = this.items.length - 1; i >= 0; i--) {
            const item = this.items[i];
            item.update(dt, this);
            if (item.dead) {
                this.items.splice(i, 1);
            }
        }

        // Check Exit / Next Floor trigger (when standing on stairs and pressing E or touching)
        if (this.exitPos) {
            const distToExit = Vec2.distance(this.player.center, this.exitPos);
            if (distToExit < 36 && (this.input.isKeyDown('e') || distToExit < 24)) {
                this.nextFloor();
            }
        }

        // Update Particles
        this.particles.update(dt);

        // Update HUD
        this.hud.update(this.player, this.floorLevel, this.bossEntity);
        this.hud.renderMinimap(this.tilemap, this.player, this.enemies, this.items, this.exitPos);
    }

    render() {
        this.ctx.fillStyle = '#0a0c10';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (!this.tilemap) return;

        // Apply 2D Camera Transformation
        this.camera.apply(this.ctx);

        // Render Tilemap Layer
        this.tilemap.render(this.ctx, this.camera);

        // Render Items
        for (const item of this.items) {
            item.render(this.ctx);
        }

        // Render Enemies
        for (const enemy of this.enemies) {
            enemy.render(this.ctx);
        }

        // Render Player
        if (this.player && !this.player.dead) {
            this.player.render(this.ctx);
        }

        // Render Projectiles
        for (const projectile of this.projectiles) {
            projectile.render(this.ctx);
        }

        // Render Particle Emitters
        this.particles.render(this.ctx);

        // Restore Camera Transformation
        this.camera.restore(this.ctx);
    }

    run() {
        const loop = () => {
            this.update();
            this.render();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }
}
