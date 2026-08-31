/**
 * Quest Tracker & Bounty Progression Engine
 */
class QuestSystem {
    constructor() {
        this.activeQuests = [];
        this.completedQuests = [];
    }

    acceptQuest(quest) {
        if (this.activeQuests.find(q => q.id === quest.id)) return false;
        quest.isActive = true;
        quest.currentProgress = 0;
        this.activeQuests.push(quest);
        return true;
    }

    onMonsterKilled(monsterId) {
        for (const quest of this.activeQuests) {
            if (quest.targetMonster === monsterId && !quest.isCompleted) {
                quest.currentProgress++;
                if (quest.currentProgress >= quest.requiredCount) {
                    this.completeQuest(quest);
                }
            }
        }
    }

    completeQuest(quest) {
        quest.isCompleted = true;
        quest.isActive = false;
        const idx = this.activeQuests.indexOf(quest);
        if (idx !== -1) {
            this.activeQuests.splice(idx, 1);
            this.completedQuests.push(quest);
        }
    }

    getActiveProgress() {
        return this.activeQuests.map(q => ({
            id: q.id,
            title: q.title,
            progress: `${q.currentProgress}/${q.requiredCount}`,
            isDone: q.currentProgress >= q.requiredCount
        }));
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QuestSystem };
}
