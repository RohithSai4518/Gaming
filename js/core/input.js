/**
 * Comprehensive Input Manager
 * Handles Keyboard, Mouse, and Touch Virtual Joystick.
 */
class Input {
    constructor(canvas) {
        this.canvas = canvas;
        this.keys = {};
        this.keysDown = {};
        this.keysUp = {};

        this.mousePos = new Vec2(0, 0);
        this.worldMousePos = new Vec2(0, 0);
        this.mouseDown = false;
        this.mouseRightDown = false;
        this.mousePressed = false;
        this.mouseRightPressed = false;

        // Virtual Touch Joystick
        this.touchMoveDir = new Vec2(0, 0);
        this.touchFiring = false;
        this.touchDashing = false;

        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            if (!this.keys[key]) {
                this.keysDown[key] = true;
            }
            this.keys[key] = true;

            // Prevent default page scroll on arrow keys/space
            if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'space'].includes(key)) {
                e.preventDefault();
            }
        });

        window.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            this.keys[key] = false;
            this.keysUp[key] = true;
        });

        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = e.clientX - rect.left;
            this.mousePos.y = e.clientY - rect.top;
        });

        this.canvas.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                this.mouseDown = true;
                this.mousePressed = true;
            } else if (e.button === 2) {
                this.mouseRightDown = true;
                this.mouseRightPressed = true;
            }
        });

        this.canvas.addEventListener('mouseup', (e) => {
            if (e.button === 0) this.mouseDown = false;
            if (e.button === 2) this.mouseRightDown = false;
        });

        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

        this.setupTouchControls();
    }

    setupTouchControls() {
        const joystickZone = document.getElementById('joystick-zone');
        const joystickStick = document.getElementById('joystick-stick');
        const btnDash = document.getElementById('btn-dash');
        const btnFire = document.getElementById('btn-fire');
        const btnSwap = document.getElementById('btn-swap');

        if (!joystickZone) return;

        let touchId = null;
        let startX = 0;
        let startY = 0;
        const maxRadius = 40;

        joystickZone.addEventListener('touchstart', (e) => {
            if (touchId === null && e.changedTouches.length > 0) {
                const touch = e.changedTouches[0];
                touchId = touch.identifier;
                const rect = joystickZone.getBoundingClientRect();
                startX = rect.left + rect.width / 2;
                startY = rect.top + rect.height / 2;
            }
        }, { passive: false });

        window.addEventListener('touchmove', (e) => {
            for (let i = 0; i < e.changedTouches.length; i++) {
                const touch = e.changedTouches[i];
                if (touch.identifier === touchId) {
                    let dx = touch.clientX - startX;
                    let dy = touch.clientY - startY;
                    const dist = Math.hypot(dx, dy);

                    if (dist > maxRadius) {
                        dx = (dx / dist) * maxRadius;
                        dy = (dy / dist) * maxRadius;
                    }

                    if (joystickStick) {
                        joystickStick.style.transform = `translate(${dx}px, ${dy}px)`;
                    }

                    this.touchMoveDir.x = dx / maxRadius;
                    this.touchMoveDir.y = dy / maxRadius;
                }
            }
        }, { passive: false });

        const endTouch = (e) => {
            for (let i = 0; i < e.changedTouches.length; i++) {
                if (e.changedTouches[i].identifier === touchId) {
                    touchId = null;
                    this.touchMoveDir.set(0, 0);
                    if (joystickStick) {
                        joystickStick.style.transform = 'translate(0px, 0px)';
                    }
                }
            }
        };

        window.addEventListener('touchend', endTouch);
        window.addEventListener('touchcancel', endTouch);

        if (btnDash) {
            btnDash.addEventListener('touchstart', (e) => { e.preventDefault(); this.touchDashing = true; });
            btnDash.addEventListener('touchend', (e) => { e.preventDefault(); this.touchDashing = false; });
        }
        if (btnFire) {
            btnFire.addEventListener('touchstart', (e) => { e.preventDefault(); this.touchFiring = true; });
            btnFire.addEventListener('touchend', (e) => { e.preventDefault(); this.touchFiring = false; });
        }
        if (btnSwap) {
            btnSwap.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.keysDown['q'] = true;
            });
        }
    }

    update(camera) {
        // Reset single-frame triggers
        this.keysDown = {};
        this.keysUp = {};
        this.mousePressed = false;
        this.mouseRightPressed = false;

        // Calculate mouse position in world space
        if (camera) {
            this.worldMousePos.x = this.mousePos.x + camera.pos.x - camera.viewport.x / 2;
            this.worldMousePos.y = this.mousePos.y + camera.pos.y - camera.viewport.y / 2;
        }
    }

    isKey(key) {
        return !!this.keys[key.toLowerCase()];
    }

    isKeyDown(key) {
        return !!this.keysDown[key.toLowerCase()];
    }

    getMovementVector() {
        const move = new Vec2(0, 0);

        if (this.isKey('w') || this.isKey('arrowup')) move.y -= 1;
        if (this.isKey('s') || this.isKey('arrowdown')) move.y += 1;
        if (this.isKey('a') || this.isKey('arrowleft')) move.x -= 1;
        if (this.isKey('d') || this.isKey('arrowright')) move.x += 1;

        if (this.touchMoveDir.magSq() > 0.05) {
            move.x += this.touchMoveDir.x;
            move.y += this.touchMoveDir.y;
        }

        if (move.magSq() > 0) {
            move.normalize();
        }

        return move;
    }
}
