/**
 * Skill Tree & Character Talent Allocator
 */
class SkillSystem {
    constructor() {
        this.unlockedSkills = new Map();
        this.availablePoints = 0;
    }

    addSkillPoints(points) {
        this.availablePoints += points;
    }

    allocatePoint(skillNode) {
        if (this.availablePoints <= 0) return { success: false, reason: 'No skill points available' };
        if (skillNode.currentRank >= skillNode.maxRank) return { success: false, reason: 'Skill node maxed' };

        skillNode.currentRank++;
        this.availablePoints--;
        this.unlockedSkills.set(skillNode.id, skillNode);
        return { success: true, rank: skillNode.currentRank };
    }

    getBonus(statName) {
        let total = 0;
        for (const [id, skill] of this.unlockedSkills.entries()) {
            if (skill.passiveBonus && skill.passiveBonus.stat === statName) {
                total += skill.passiveBonus.valuePerRank * skill.currentRank;
            }
        }
        return total;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SkillSystem };
}
