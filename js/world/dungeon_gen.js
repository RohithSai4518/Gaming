/**
 * Procedural Dungeon Generator
 * Generates room layouts, connecting corridors, enemy spawns, and loot placement.
 */
class DungeonRoom {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.center = new Vec2(
            Math.floor(x + w / 2),
            Math.floor(y + h / 2)
        );
    }

    intersects(other, padding = 1) {
        return (
            this.x - padding < other.x + other.w + padding &&
            this.x + this.w + padding > other.x - padding &&
            this.y - padding < other.y + other.h + padding &&
            this.y + this.h + padding > other.y - padding
        );
    }
}

class DungeonGenerator {
    constructor(cols = 50, rows = 50, tileSize = 48) {
        this.cols = cols;
        this.rows = rows;
        this.tileSize = tileSize;
    }

    generate(floorLevel = 1) {
        const tilemap = new Tilemap(this.cols, this.rows, this.tileSize);
        const rooms = [];
        const isBossFloor = floorLevel >= 5;

        if (isBossFloor) {
            // Generate a grand Boss Arena room
            const arenaW = 28;
            const arenaH = 28;
            const startX = Math.floor((this.cols - arenaW) / 2);
            const startY = Math.floor((this.rows - arenaH) / 2);
            const bossRoom = new DungeonRoom(startX, startY, arenaW, arenaH);
            rooms.push(bossRoom);

            this.carveRoom(tilemap, bossRoom);
        } else {
            // Generate standard procedural dungeon rooms
            const minRooms = 6 + Math.min(floorLevel * 2, 8);
            const maxRooms = 10 + Math.min(floorLevel * 2, 10);
            const targetRoomCount = Math.floor(minRooms + Math.random() * (maxRooms - minRooms));

            const minSize = 6;
            const maxSize = 12;

            for (let attempt = 0; attempt < 120 && rooms.length < targetRoomCount; attempt++) {
                const w = Math.floor(minSize + Math.random() * (maxSize - minSize));
                const h = Math.floor(minSize + Math.random() * (maxSize - minSize));
                const x = Math.floor(2 + Math.random() * (this.cols - w - 4));
                const y = Math.floor(2 + Math.random() * (this.rows - h - 4));

                const newRoom = new DungeonRoom(x, y, w, h);
                let overlaps = false;

                for (const r of rooms) {
                    if (newRoom.intersects(r, 2)) {
                        overlaps = true;
                        break;
                    }
                }

                if (!overlaps) {
                    this.carveRoom(tilemap, newRoom);

                    if (rooms.length > 0) {
                        const prevRoom = rooms[rooms.length - 1];
                        this.carveCorridor(tilemap, prevRoom.center, newRoom.center);
                    }

                    rooms.push(newRoom);
                }
            }
        }

        // Place Player in the first room
        const startRoom = rooms[0];
        const playerSpawn = new Vec2(
            (startRoom.center.x + 0.5) * this.tileSize,
            (startRoom.center.y + 0.5) * this.tileSize
        );

        // Place Stairs in the furthest room
        const exitRoom = rooms[rooms.length - 1];
        tilemap.set(exitRoom.center.x, exitRoom.center.y, TILE_STAIRS);
        const exitPos = new Vec2(
            (exitRoom.center.x + 0.5) * this.tileSize,
            (exitRoom.center.y + 0.5) * this.tileSize
        );

        // Populate Enemy Spawns and Item Spawns
        const enemySpawns = [];
        const itemSpawns = [];

        if (isBossFloor) {
            // Spawn Boss in arena center
            enemySpawns.push({
                type: 'boss',
                pos: new Vec2((startRoom.center.x + 0.5) * this.tileSize, (startRoom.center.y - 4) * this.tileSize)
            });
            // Spawn some health pickups in corners
            itemSpawns.push({ type: 'health', pos: new Vec2((startRoom.x + 3) * this.tileSize, (startRoom.y + 3) * this.tileSize) });
            itemSpawns.push({ type: 'energy', pos: new Vec2((startRoom.x + startRoom.w - 3) * this.tileSize, (startRoom.y + 3) * this.tileSize) });
        } else {
            // Populate regular rooms (skip room 0 where player starts)
            for (let i = 1; i < rooms.length; i++) {
                const room = rooms[i];
                const enemyCount = Math.floor(1 + Math.random() * (2 + Math.floor(floorLevel * 0.7)));

                for (let k = 0; k < enemyCount; k++) {
                    const ex = Math.floor(room.x + 1 + Math.random() * (room.w - 2));
                    const ey = Math.floor(room.y + 1 + Math.random() * (room.h - 2));

                    let enemyType = 'slime';
                    const roll = Math.random();
                    if (floorLevel >= 3 && roll > 0.65) {
                        enemyType = 'mage';
                    } else if (floorLevel >= 2 && roll > 0.4) {
                        enemyType = 'archer';
                    }

                    enemySpawns.push({
                        type: enemyType,
                        pos: new Vec2((ex + 0.5) * this.tileSize, (ey + 0.5) * this.tileSize)
                    });
                }

                // Random loot chance
                if (Math.random() < 0.7) {
                    const ix = Math.floor(room.x + 1 + Math.random() * (room.w - 2));
                    const iy = Math.floor(room.y + 1 + Math.random() * (room.h - 2));

                    const lootRoll = Math.random();
                    let itemType = 'coin';
                    if (lootRoll < 0.3) itemType = 'health';
                    else if (lootRoll < 0.5) itemType = 'energy';
                    else if (lootRoll < 0.65) itemType = 'weapon_crate';

                    itemSpawns.push({
                        type: itemType,
                        pos: new Vec2((ix + 0.5) * this.tileSize, (iy + 0.5) * this.tileSize)
                    });
                }
            }
        }

        return {
            tilemap,
            playerSpawn,
            exitPos,
            enemySpawns,
            itemSpawns,
            rooms
        };
    }

    carveRoom(tilemap, room) {
        for (let y = room.y; y < room.y + room.h; y++) {
            for (let x = room.x; x < room.x + room.w; x++) {
                tilemap.set(x, y, TILE_FLOOR);
            }
        }

        // Add surrounding walls
        for (let y = room.y - 1; y <= room.y + room.h; y++) {
            for (let x = room.x - 1; x <= room.x + room.w; x++) {
                if (tilemap.get(x, y) === TILE_EMPTY) {
                    tilemap.set(x, y, TILE_WALL);
                }
            }
        }
    }

    carveCorridor(tilemap, start, end) {
        let curX = start.x;
        let curY = start.y;

        while (curX !== end.x) {
            this.carveHallTile(tilemap, curX, curY);
            curX += curX < end.x ? 1 : -1;
        }

        while (curY !== end.y) {
            this.carveHallTile(tilemap, curX, curY);
            curY += curY < end.y ? 1 : -1;
        }
    }

    carveHallTile(tilemap, x, y) {
        tilemap.set(x, y, TILE_FLOOR);

        // Ensure adjacent empty tiles become walls
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (tilemap.get(x + dx, y + dy) === TILE_EMPTY) {
                    tilemap.set(x + dx, y + dy, TILE_WALL);
                }
            }
        }
    }
}
