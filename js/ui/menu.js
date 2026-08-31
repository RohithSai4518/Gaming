/**
 * Menu and Game UI Modal Controller
 */
class MenuManager {
    constructor(engine) {
        this.engine = engine;
        this.backdrop = document.getElementById('menu-overlay');
        this.startScreen = document.getElementById('start-screen');
        this.controlsScreen = document.getElementById('controls-screen');
        this.pauseScreen = document.getElementById('pause-screen');
        this.gameoverScreen = document.getElementById('gameover-screen');
        this.victoryScreen = document.getElementById('victory-screen');

        this.gameoverStats = document.getElementById('gameover-stats');
        this.btnAudioToggle = document.getElementById('btn-audio-toggle');

        this.setupButtons();
    }

    setupButtons() {
        // Start Menu
        document.getElementById('btn-start')?.addEventListener('click', () => {
            this.hideAll();
            this.engine.startNewGame();
        });

        document.getElementById('btn-controls')?.addEventListener('click', () => {
            this.showScreen('controls');
        });

        document.getElementById('btn-controls-back')?.addEventListener('click', () => {
            this.showScreen('start');
        });

        this.btnAudioToggle?.addEventListener('click', () => {
            const enabled = this.engine.sound.toggleSound();
            this.btnAudioToggle.textContent = `SOUND: ${enabled ? 'ON' : 'OFF'}`;
        });

        // Pause Menu
        document.getElementById('btn-resume')?.addEventListener('click', () => {
            this.hideAll();
            this.engine.resumeGame();
        });

        document.getElementById('btn-restart')?.addEventListener('click', () => {
            this.hideAll();
            this.engine.startNewGame();
        });

        document.getElementById('btn-quit')?.addEventListener('click', () => {
            this.showScreen('start');
            this.engine.gameState = 'MENU';
        });

        // Game Over Menu
        document.getElementById('btn-retry')?.addEventListener('click', () => {
            this.hideAll();
            this.engine.startNewGame();
        });

        document.getElementById('btn-gameover-menu')?.addEventListener('click', () => {
            this.showScreen('start');
            this.engine.gameState = 'MENU';
        });

        // Victory Menu
        document.getElementById('btn-victory-retry')?.addEventListener('click', () => {
            this.hideAll();
            this.engine.startNewGame();
        });

        document.getElementById('btn-victory-menu')?.addEventListener('click', () => {
            this.showScreen('start');
            this.engine.gameState = 'MENU';
        });
    }

    hideAll() {
        this.backdrop.classList.add('hidden');
        this.startScreen.classList.add('hidden');
        this.controlsScreen.classList.add('hidden');
        this.pauseScreen.classList.add('hidden');
        this.gameoverScreen.classList.add('hidden');
        this.victoryScreen.classList.add('hidden');
    }

    showScreen(screenName) {
        this.hideAll();
        this.backdrop.classList.remove('hidden');

        if (screenName === 'start') {
            this.startScreen.classList.remove('hidden');
        } else if (screenName === 'controls') {
            this.controlsScreen.classList.remove('hidden');
        } else if (screenName === 'pause') {
            this.pauseScreen.classList.remove('hidden');
        } else if (screenName === 'gameover') {
            this.gameoverScreen.classList.remove('hidden');
            if (this.gameoverStats) {
                this.gameoverStats.textContent = `Floors Cleared: ${this.engine.floorLevel - 1} • Enemies Defeated: ${this.engine.enemiesKilled} • Final Score: ${this.engine.player.score}`;
            }
        } else if (screenName === 'victory') {
            this.victoryScreen.classList.remove('hidden');
        }
    }
}
