/**
 * 2D Collision and Spatial Geometry Solver
 * Handles AABB (Axis-Aligned Bounding Box), Circle, Raycasting, and Tilemap collisions.
 */
class Collision {
    /**
     * Checks collision between two Axis-Aligned Bounding Boxes.
     */
    static aabb(r1, r2) {
        return (
            r1.x < r2.x + r2.w &&
            r1.x + r1.w > r2.x &&
            r1.y < r2.y + r2.h &&
            r1.y + r1.h > r2.y
        );
    }

    /**
     * Checks collision between two circles.
     */
    static circleCircle(c1, c2) {
        const dx = c1.x - c2.x;
        const dy = c1.y - c2.y;
        const distSq = dx * dx + dy * dy;
        const radSum = c1.radius + c2.radius;
        return distSq <= radSum * radSum;
    }

    /**
     * Checks collision between a Circle and an AABB box.
     */
    static circleBox(circle, box) {
        // Find closest point on box to circle center
        const closestX = Math.max(box.x, Math.min(circle.x, box.x + box.w));
        const closestY = Math.max(box.y, Math.min(circle.y, box.y + box.h));

        const dx = circle.x - closestX;
        const dy = circle.y - closestY;
        return dx * dx + dy * dy < circle.radius * circle.radius;
    }

    /**
     * Point in AABB box test.
     */
    static pointInBox(px, py, box) {
        return (
            px >= box.x &&
            px <= box.x + box.w &&
            py >= box.y &&
            py <= box.y + box.h
        );
    }

    /**
     * Point in Circle test.
     */
    static pointInCircle(px, py, circle) {
        const dx = px - circle.x;
        const dy = py - circle.y;
        return dx * dx + dy * dy <= circle.radius * circle.radius;
    }

    /**
     * Raycast against a line segment.
     */
    static rayLine(x1, y1, x2, y2, x3, y3, x4, y4) {
        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den === 0) return null;

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            return new Vec2(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
        }
        return null;
    }

    /**
     * Resolves entity movement against static obstacles / tilemap walls with sliding.
     */
    static resolveBoxTilemap(entity, tilemap) {
        const tileSize = tilemap.tileSize;

        // Check horizontal movement first
        let minTileX = Math.floor(entity.pos.x / tileSize);
        let maxTileX = Math.floor((entity.pos.x + entity.size.x) / tileSize);
        let minTileY = Math.floor(entity.pos.y / tileSize);
        let maxTileY = Math.floor((entity.pos.y + entity.size.y) / tileSize);

        for (let ty = minTileY; ty <= maxTileY; ty++) {
            for (let tx = minTileX; tx <= maxTileX; tx++) {
                if (tilemap.isSolid(tx, ty)) {
                    const wallBox = { x: tx * tileSize, y: ty * tileSize, w: tileSize, h: tileSize };
                    const entityBox = { x: entity.pos.x, y: entity.pos.y, w: entity.size.x, h: entity.size.y };

                    if (Collision.aabb(entityBox, wallBox)) {
                        // Calculate overlap on each side
                        const overlapLeft = (entity.pos.x + entity.size.x) - wallBox.x;
                        const overlapRight = (wallBox.x + wallBox.w) - entity.pos.x;
                        const overlapTop = (entity.pos.y + entity.size.y) - wallBox.y;
                        const overlapBottom = (wallBox.y + wallBox.h) - entity.pos.y;

                        const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

                        if (minOverlap === overlapLeft) {
                            entity.pos.x = wallBox.x - entity.size.x;
                            entity.vel.x = 0;
                        } else if (minOverlap === overlapRight) {
                            entity.pos.x = wallBox.x + wallBox.w;
                            entity.vel.x = 0;
                        } else if (minOverlap === overlapTop) {
                            entity.pos.y = wallBox.y - entity.size.y;
                            entity.vel.y = 0;
                        } else if (minOverlap === overlapBottom) {
                            entity.pos.y = wallBox.y + wallBox.h;
                            entity.vel.y = 0;
                        }
                    }
                }
            }
        }
    }
}
