/**
 * Heads-Up Display (HUD) & Minimap Controller
 */
class HUD {
    constructor() {
        this.hpFill = document.getElementById('hp-fill');
        this.hpText = document.getElementById('hp-text');
        this.energyFill = document.getElementById('energy-fill');
        this.energyText = document.getElementById('energy-text');

        this.depthDisplay = document.getElementById('dungeon-depth');
        this.scoreDisplay = document.getElementById('score-display');
        this.goldText = document.getElementById('gold-text');
        this.weaponIcon = document.getElementById('weapon-icon');
        this.weaponName = document.getElementById('weapon-name');

        this.bossHud = document.getElementById('boss-hud');
        this.bossHpFill = document.getElementById('boss-hp-fill');

        this.minimapCanvas = document.getElementById('minimapCanvas');
        this.minimapCtx = this.minimapCanvas ? this.minimapCanvas.getContext('2d') : null;

        this.notifications = document.getElementById('notifications');
    }

    update(player, floorLevel, bossEntity) {
        if (!player) return;

        // Update Health Bar
        const hpPercent = Math.max(0, Math.min(100, (player.hp / player.maxHp) * 100));
        this.hpFill.style.width = `${hpPercent}%`;
        this.hpText.textContent = `${Math.ceil(player.hp)} / ${player.maxHp}`;

        // Update Energy Bar
        const energyPercent = Math.max(0, Math.min(100, (player.energy / player.maxEnergy) * 100));
        this.energyFill.style.width = `${energyPercent}%`;
        this.energyText.textContent = `${Math.floor(player.energy)} / ${player.maxEnergy}`;

        // Update Status Pills
        this.depthDisplay.textContent = `Floor ${floorLevel}`;
        this.scoreDisplay.textContent = `Score: ${player.score}`;
        this.goldText.textContent = `${player.gold}`;

        // Update Weapon Indicator
        const curWeapon = player.activeWeapon;
        this.weaponIcon.textContent = curWeapon.icon;
        this.weaponName.textContent = curWeapon.name;

        // Update Boss Health Bar
        if (bossEntity && !bossEntity.dead) {
            this.bossHud.classList.remove('hidden');
            const bossHpPercent = Math.max(0, Math.min(100, (bossEntity.hp / bossEntity.maxHp) * 100));
            this.bossHpFill.style.width = `${bossHpPercent}%`;
        } else {
            this.bossHud.classList.add('hidden');
        }
    }

    renderMinimap(tilemap, player, enemies, items, exitPos) {
        if (!this.minimapCtx || !tilemap) return;

        const ctx = this.minimapCtx;
        const w = this.minimapCanvas.width;
        const h = this.minimapCanvas.height;

        ctx.clearRect(0, 0, w, h);

        const scaleX = w / tilemap.cols;
        const scaleY = h / tilemap.rows;

        // Draw discovered tiles
        for (let y = 0; y < tilemap.rows; y++) {
            for (let x = 0; x < tilemap.cols; x++) {
                const idx = y * tilemap.cols + x;
                if (tilemap.discovered[idx]) {
                    const tile = tilemap.data[idx];
                    if (tile === TILE_FLOOR || tile === TILE_STAIRS) {
                        ctx.fillStyle = '#2e3440';
                        ctx.fillRect(x * scaleX, y * scaleY, scaleX + 0.5, scaleY + 0.5);
                    }
                }
            }
        }

        // Draw Stairs Exit
        if (exitPos) {
            const exitTileX = Math.floor(exitPos.x / tilemap.tileSize);
            const exitTileY = Math.floor(exitPos.y / tilemap.tileSize);
            if (tilemap.discovered[exitTileY * tilemap.cols + exitTileX]) {
                ctx.fillStyle = '#00f0ff';
                ctx.fillRect(exitTileX * scaleX - 1, exitTileY * scaleY - 1, 3, 3);
            }
        }

        // Draw Items (Gold/Health)
        if (items) {
            ctx.fillStyle = '#ffcc00';
            for (const item of items) {
                const tx = Math.floor(item.pos.x / tilemap.tileSize);
                const ty = Math.floor(item.pos.y / tilemap.tileSize);
                if (tilemap.discovered[ty * tilemap.cols + tx]) {
                    ctx.fillRect(tx * scaleX, ty * scaleY, 2, 2);
                }
            }
        }

        // Draw Enemies in visible areas
        if (enemies) {
            ctx.fillStyle = '#ff3366';
            for (const enemy of enemies) {
                const tx = Math.floor(enemy.pos.x / tilemap.tileSize);
                const ty = Math.floor(enemy.pos.y / tilemap.tileSize);
                if (tilemap.visible[ty * tilemap.cols + tx]) {
                    ctx.fillRect(tx * scaleX - 1, ty * scaleY - 1, 3, 3);
                }
            }
        }

        // Draw Player on Minimap
        if (player) {
            const px = (player.pos.x / tilemap.tileSize) * scaleX;
            const py = (player.pos.y / tilemap.tileSize) * scaleY;
            ctx.fillStyle = '#00ff66';
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    showNotification(text) {
        if (!this.notifications) return;
        const toast = document.createElement('div');
        toast.className = 'notification-toast';
        toast.textContent = text;
        this.notifications.appendChild(toast);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.parentElement.removeChild(toast);
            }
        }, 2000);
    }
}
