/**
 * 2D Vector Math Library
 * Lightweight, zero-dependency vector operations for game physics and geometry.
 */
class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }

    clone() {
        return new Vec2(this.x, this.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    mult(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    div(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        return this;
    }

    magSq() {
        return this.x * this.x + this.y * this.y;
    }

    mag() {
        return Math.sqrt(this.magSq());
    }

    heading() {
        return Math.atan2(this.y, this.x);
    }

    setMag(magnitude) {
        return this.normalize().mult(magnitude);
    }

    normalize() {
        const m = this.mag();
        if (m !== 0) {
            this.div(m);
        }
        return this;
    }

    limit(max) {
        const mSq = this.magSq();
        if (mSq > max * max) {
            this.div(Math.sqrt(mSq)).mult(max);
        }
        return this;
    }

    dist(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.hypot(dx, dy);
    }

    distSq(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return dx * dx + dy * dy;
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    lerp(v, amt) {
        this.x += (v.x - this.x) * amt;
        this.y += (v.y - this.y) * amt;
        return this;
    }

    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rx = this.x * cos - this.y * sin;
        const ry = this.x * sin + this.y * cos;
        this.x = rx;
        this.y = ry;
        return this;
    }

    static fromAngle(angle, length = 1) {
        return new Vec2(Math.cos(angle) * length, Math.sin(angle) * length);
    }

    static distance(v1, v2) {
        return Math.hypot(v1.x - v2.x, v1.y - v2.y);
    }

    static add(v1, v2) {
        return new Vec2(v1.x + v2.x, v1.y + v2.y);
    }

    static sub(v1, v2) {
        return new Vec2(v1.x - v2.x, v1.y - v2.y);
    }

    static mult(v, scalar) {
        return new Vec2(v.x * scalar, v.y * scalar);
    }

    static lerp(v1, v2, amt) {
        return new Vec2(v1.x + (v2.x - v1.x) * amt, v1.y + (v2.y - v1.y) * amt);
    }
}
