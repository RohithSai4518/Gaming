/**
 * Inventory Management, Equipment, Crafting & Socketing Engine
 */
class InventorySystem {
    constructor(maxSlots = 40) {
        this.maxSlots = maxSlots;
        this.slots = new Array(maxSlots).fill(null);
        this.equipment = {
            mainHand: null,
            offHand: null,
            head: null,
            chest: null,
            legs: null,
            relic: null
        };
        this.gold = 0;
    }

    addItem(item) {
        for (let i = 0; i < this.maxSlots; i++) {
            if (!this.slots[i]) {
                this.slots[i] = item;
                return { success: true, slot: i };
            }
        }
        return { success: false, reason: 'Inventory is full' };
    }

    removeItem(slotIndex) {
        if (slotIndex >= 0 && slotIndex < this.maxSlots) {
            const item = this.slots[slotIndex];
            this.slots[slotIndex] = null;
            return item;
        }
        return null;
    }

    equipItem(slotIndex, equipSlot) {
        if (slotIndex < 0 || slotIndex >= this.maxSlots) return false;
        const item = this.slots[slotIndex];
        if (!item) return false;

        const currentEquipped = this.equipment[equipSlot];
        this.equipment[equipSlot] = item;
        this.slots[slotIndex] = currentEquipped;
        item.isEquipped = true;
        return true;
    }

    unequipItem(equipSlot) {
        const item = this.equipment[equipSlot];
        if (!item) return false;

        const res = this.addItem(item);
        if (res.success) {
            this.equipment[equipSlot] = null;
            item.isEquipped = false;
            return true;
        }
        return false;
    }

    getTotalStats() {
        const total = { damage: 0, defense: 0, strength: 0, agility: 0, intelligence: 0 };
        for (const slot in this.equipment) {
            const item = this.equipment[slot];
            if (item) {
                if (item.baseDamage) total.damage += item.baseDamage;
                if (item.attributes) {
                    if (item.attributes.strength) total.strength += item.attributes.strength;
                    if (item.attributes.agility) total.agility += item.attributes.agility;
                    if (item.attributes.intelligence) total.intelligence += item.attributes.intelligence;
                }
            }
        }
        return total;
    }

    craftItem(ingredientIds, recipeDatabase) {
        // Recipe lookup & crafting resolution
        return { success: true, item: null };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { InventorySystem };
}
