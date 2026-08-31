/**
 * 2D Game Camera with Smooth Tracking, Zoom, and Screen Shake
 */
class Camera {
    constructor(width, height) {
        this.pos = new Vec2(0, 0);
        this.target = new Vec2(0, 0);
        this.viewport = new Vec2(width, height);
        this.smoothSpeed = 0.1;
        this.zoom = 1.0;

        // Screen Shake
        this.shakeIntensity = 0;
        this.shakeDecay = 0.9;
        this.shakeOffset = new Vec2(0, 0);

        // Bounds
        this.bounds = { minX: 0, minY: 0, maxX: 2000, maxY: 2000 };
    }

    resize(w, h) {
        this.viewport.set(w, h);
    }

    setBounds(minX, minY, maxX, maxY) {
        this.bounds = { minX, minY, maxX, maxY };
    }

    shake(amount = 8) {
        this.shakeIntensity = Math.min(this.shakeIntensity + amount, 25);
    }

    follow(targetPos) {
        this.target.copy(targetPos);
    }

    update(dt) {
        // Smooth lerp towards target
        this.pos.lerp(this.target, this.smoothSpeed);

        // Clamping to map bounds
        const halfW = (this.viewport.x / 2) / this.zoom;
        const halfH = (this.viewport.y / 2) / this.zoom;

        if (this.bounds.maxX - this.bounds.minX > this.viewport.x) {
            this.pos.x = Math.max(this.bounds.minX + halfW, Math.min(this.pos.x, this.bounds.maxX - halfW));
        }
        if (this.bounds.maxY - this.bounds.minY > this.viewport.y) {
            this.pos.y = Math.max(this.bounds.minY + halfH, Math.min(this.pos.y, this.bounds.maxY - halfH));
        }

        // Screen shake computation
        if (this.shakeIntensity > 0.1) {
            const angle = Math.random() * Math.PI * 2;
            const dist = (Math.random() * 2 - 1) * this.shakeIntensity;
            this.shakeOffset.set(Math.cos(angle) * dist, Math.sin(angle) * dist);
            this.shakeIntensity *= this.shakeDecay;
        } else {
            this.shakeIntensity = 0;
            this.shakeOffset.set(0, 0);
        }
    }

    apply(ctx) {
        ctx.save();
        ctx.translate(this.viewport.x / 2, this.viewport.y / 2);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-this.pos.x + this.shakeOffset.x, -this.pos.y + this.shakeOffset.y);
    }

    restore(ctx) {
        ctx.restore();
    }
}
