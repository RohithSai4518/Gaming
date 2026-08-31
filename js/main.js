/**
 * Main Application Bootstrap
 * Initializes the engine on DOMContentLoaded.
 */
window.addEventListener('DOMContentLoaded', () => {
    // Initialize Core Game Engine
    const game = new Engine();

    // Start Engine Loop
    game.run();

    // Expose for debugging if needed
    window.ChamberCrawler = game;
});
