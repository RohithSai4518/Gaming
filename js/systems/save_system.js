/**
 * Save State, Statistics & Local Storage Persistence Engine
 */
class SaveSystem {
    constructor(storageKey = 'chamber_crawler_save') {
        this.storageKey = storageKey;
    }

    saveGame(player, floorLevel, score) {
        const data = {
            timestamp: Date.now(),
            floorLevel: floorLevel,
            score: score,
            player: {
                hp: player.hp,
                maxHp: player.maxHp,
                energy: player.energy,
                gold: player.gold,
                activeWeaponIdx: player.activeWeaponIdx
            }
        };
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (e) {
            return false;
        }
    }

    loadGame() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    hasSave() {
        return !!localStorage.getItem(this.storageKey);
    }

    deleteSave() {
        localStorage.removeItem(this.storageKey);
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SaveSystem };
}
