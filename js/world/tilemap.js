/**
 * Grid-based Tilemap System
 * Manages dungeon tile layers, wall collisions, and procedural visual styling.
 */
const TILE_EMPTY = 0;
const TILE_FLOOR = 1;
const TILE_WALL = 2;
const TILE_DOOR = 3;
const TILE_STAIRS = 4;

class Tilemap {
    constructor(cols, rows, tileSize = 48) {
        this.cols = cols;
        this.rows = rows;
        this.tileSize = tileSize;
        this.data = new Array(cols * rows).fill(TILE_EMPTY);
        this.discovered = new Array(cols * rows).fill(false);
        this.visible = new Array(cols * rows).fill(false);

        // Procedural decorative noise for floor stones and wall bricks
        this.decor = new Array(cols * rows).fill(0).map(() => Math.floor(Math.random() * 4));
    }

    get(x, y) {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) return TILE_WALL;
        return this.data[y * this.cols + x];
    }

    set(x, y, tile) {
        if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
            this.data[y * this.cols + x] = tile;
        }
    }

    isSolid(x, y) {
        const t = this.get(x, y);
        return t === TILE_WALL || t === TILE_EMPTY;
    }

    worldToTile(wx, wy) {
        return {
            x: Math.floor(wx / this.tileSize),
            y: Math.floor(wy / this.tileSize)
        };
    }

    tileToWorld(tx, ty) {
        return {
            x: tx * this.tileSize,
            y: ty * this.tileSize
        };
    }

    updateVisibility(playerPos, radius = 7) {
        const center = this.worldToTile(playerPos.x, playerPos.y);

        // Reset visibility
        this.visible.fill(false);

        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const tx = center.x + dx;
                const ty = center.y + dy;
                if (tx >= 0 && tx < this.cols && ty >= 0 && ty < this.rows) {
                    const distSq = dx * dx + dy * dy;
                    if (distSq <= radius * radius) {
                        const idx = ty * this.cols + tx;
                        this.visible[idx] = true;
                        this.discovered[idx] = true;
                    }
                }
            }
        }
    }

    render(ctx, camera) {
        const startCol = Math.max(0, Math.floor((camera.pos.x - camera.viewport.x / 2) / this.tileSize) - 1);
        const endCol = Math.min(this.cols - 1, Math.ceil((camera.pos.x + camera.viewport.x / 2) / this.tileSize) + 1);
        const startRow = Math.max(0, Math.floor((camera.pos.y - camera.viewport.y / 2) / this.tileSize) - 1);
        const endRow = Math.min(this.rows - 1, Math.ceil((camera.pos.y + camera.viewport.y / 2) / this.tileSize) + 1);

        for (let y = startRow; y <= endRow; y++) {
            for (let x = startCol; x <= endCol; x++) {
                const idx = y * this.cols + x;
                const tile = this.data[idx];
                const isDiscovered = this.discovered[idx];
                const isVis = this.visible[idx];

                if (!isDiscovered && tile === TILE_EMPTY) continue;

                const rx = x * this.tileSize;
                const ry = y * this.tileSize;
                const decorVariant = this.decor[idx];

                if (tile === TILE_FLOOR || tile === TILE_DOOR || tile === TILE_STAIRS) {
                    // Draw floor tiles
                    ctx.fillStyle = decorVariant === 0 ? '#1e2430' : (decorVariant === 1 ? '#222938' : '#1a202c');
                    ctx.fillRect(rx, ry, this.tileSize, this.tileSize);

                    // Floor grid lines
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
                    ctx.strokeRect(rx, ry, this.tileSize, this.tileSize);

                    if (tile === TILE_STAIRS) {
                        // Exit stairs marker
                        ctx.fillStyle = '#00f0ff';
                        ctx.beginPath();
                        ctx.arc(rx + this.tileSize / 2, ry + this.tileSize / 2, 14, 0, Math.PI * 2);
                        ctx.fill();

                        ctx.fillStyle = '#0a0c10';
                        ctx.beginPath();
                        ctx.arc(rx + this.tileSize / 2, ry + this.tileSize / 2, 8, 0, Math.PI * 2);
                        ctx.fill();

                        // Pulsing glow
                        ctx.strokeStyle = '#00f0ff';
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.arc(rx + this.tileSize / 2, ry + this.tileSize / 2, 18, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                } else if (tile === TILE_WALL) {
                    // Draw Wall
                    ctx.fillStyle = '#2e3440';
                    ctx.fillRect(rx, ry, this.tileSize, this.tileSize);

                    // Top highlight for 3D bevel look
                    ctx.fillStyle = '#434c5e';
                    ctx.fillRect(rx, ry, this.tileSize, 4);

                    // Wall decorative bricks
                    ctx.strokeStyle = '#3b4252';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(rx + 2, ry + 2, this.tileSize - 4, this.tileSize - 4);
                }

                // Fog of war / shadow rendering
                if (!isVis && isDiscovered) {
                    ctx.fillStyle = 'rgba(10, 12, 16, 0.65)';
                    ctx.fillRect(rx, ry, this.tileSize, this.tileSize);
                } else if (!isDiscovered) {
                    ctx.fillStyle = '#0a0c10';
                    ctx.fillRect(rx, ry, this.tileSize, this.tileSize);
                }
            }
        }
    }
}
