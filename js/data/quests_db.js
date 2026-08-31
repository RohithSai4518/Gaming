/**
 * Chamber Crawler - Quests, Bounties & Dialogue Objectives Database
 */
const QUEST_TYPES = {
    ELIMINATION: 'elimination',
    EXPLORATION: 'exploration',
    COLLECTION: 'collection',
    BOSS_HUNT: 'boss_hunt',
    SURVIVAL: 'survival'
};

const QUESTS_DATABASE = [
    {
        id: 'quest_mission_0001',
        title: 'Bounty Contract #1: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0002',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 125,
            experience: 300,
            reputation: 11,
            itemId: 'item_gear_0001'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0002',
        title: 'Bounty Contract #2: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0003',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 150,
            experience: 350,
            reputation: 12,
            itemId: 'item_gear_0002'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0003',
        title: 'Bounty Contract #3: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0004',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 175,
            experience: 400,
            reputation: 13,
            itemId: 'item_gear_0003'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0004',
        title: 'Bounty Contract #4: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0005',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 200,
            experience: 450,
            reputation: 14,
            itemId: 'item_gear_0004'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0005',
        title: 'Bounty Contract #5: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0006',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 225,
            experience: 500,
            reputation: 15,
            itemId: 'item_gear_0005'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0006',
        title: 'Bounty Contract #6: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0007',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 250,
            experience: 550,
            reputation: 16,
            itemId: 'item_gear_0006'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0007',
        title: 'Bounty Contract #7: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0008',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 275,
            experience: 600,
            reputation: 17,
            itemId: 'item_gear_0007'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0008',
        title: 'Bounty Contract #8: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0009',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 300,
            experience: 650,
            reputation: 18,
            itemId: 'item_gear_0008'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0009',
        title: 'Bounty Contract #9: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0010',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 325,
            experience: 700,
            reputation: 19,
            itemId: 'item_gear_0009'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0010',
        title: 'Bounty Contract #10: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0011',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 350,
            experience: 750,
            reputation: 20,
            itemId: 'item_gear_0010'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0011',
        title: 'Bounty Contract #11: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0012',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 375,
            experience: 800,
            reputation: 21,
            itemId: 'item_gear_0011'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0012',
        title: 'Bounty Contract #12: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0013',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 400,
            experience: 850,
            reputation: 22,
            itemId: 'item_gear_0012'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0013',
        title: 'Bounty Contract #13: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0014',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 425,
            experience: 900,
            reputation: 23,
            itemId: 'item_gear_0013'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0014',
        title: 'Bounty Contract #14: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0015',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 450,
            experience: 950,
            reputation: 24,
            itemId: 'item_gear_0014'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0015',
        title: 'Bounty Contract #15: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0016',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 475,
            experience: 1000,
            reputation: 25,
            itemId: 'item_gear_0015'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0016',
        title: 'Bounty Contract #16: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0017',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 500,
            experience: 1050,
            reputation: 26,
            itemId: 'item_gear_0016'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0017',
        title: 'Bounty Contract #17: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0018',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 525,
            experience: 1100,
            reputation: 27,
            itemId: 'item_gear_0017'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0018',
        title: 'Bounty Contract #18: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0019',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 550,
            experience: 1150,
            reputation: 28,
            itemId: 'item_gear_0018'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0019',
        title: 'Bounty Contract #19: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0020',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 575,
            experience: 1200,
            reputation: 29,
            itemId: 'item_gear_0019'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0020',
        title: 'Bounty Contract #20: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0021',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 600,
            experience: 1250,
            reputation: 10,
            itemId: 'item_gear_0020'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0021',
        title: 'Bounty Contract #21: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0022',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 625,
            experience: 1300,
            reputation: 11,
            itemId: 'item_gear_0021'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0022',
        title: 'Bounty Contract #22: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0023',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 650,
            experience: 1350,
            reputation: 12,
            itemId: 'item_gear_0022'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0023',
        title: 'Bounty Contract #23: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0024',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 675,
            experience: 1400,
            reputation: 13,
            itemId: 'item_gear_0023'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0024',
        title: 'Bounty Contract #24: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0025',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 700,
            experience: 1450,
            reputation: 14,
            itemId: 'item_gear_0024'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0025',
        title: 'Bounty Contract #25: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0026',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 725,
            experience: 1500,
            reputation: 15,
            itemId: 'item_gear_0025'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0026',
        title: 'Bounty Contract #26: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0027',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 750,
            experience: 1550,
            reputation: 16,
            itemId: 'item_gear_0026'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0027',
        title: 'Bounty Contract #27: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0028',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 775,
            experience: 1600,
            reputation: 17,
            itemId: 'item_gear_0027'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0028',
        title: 'Bounty Contract #28: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0029',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 800,
            experience: 1650,
            reputation: 18,
            itemId: 'item_gear_0028'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0029',
        title: 'Bounty Contract #29: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0030',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 825,
            experience: 1700,
            reputation: 19,
            itemId: 'item_gear_0029'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0030',
        title: 'Bounty Contract #30: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0031',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 850,
            experience: 1750,
            reputation: 20,
            itemId: 'item_gear_0030'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0031',
        title: 'Bounty Contract #31: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0032',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 875,
            experience: 1800,
            reputation: 21,
            itemId: 'item_gear_0031'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0032',
        title: 'Bounty Contract #32: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0033',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 900,
            experience: 1850,
            reputation: 22,
            itemId: 'item_gear_0032'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0033',
        title: 'Bounty Contract #33: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0034',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 925,
            experience: 1900,
            reputation: 23,
            itemId: 'item_gear_0033'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0034',
        title: 'Bounty Contract #34: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0035',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 950,
            experience: 1950,
            reputation: 24,
            itemId: 'item_gear_0034'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0035',
        title: 'Bounty Contract #35: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0036',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 975,
            experience: 2000,
            reputation: 25,
            itemId: 'item_gear_0035'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0036',
        title: 'Bounty Contract #36: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0037',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 1000,
            experience: 2050,
            reputation: 26,
            itemId: 'item_gear_0036'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0037',
        title: 'Bounty Contract #37: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0038',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 1025,
            experience: 2100,
            reputation: 27,
            itemId: 'item_gear_0037'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0038',
        title: 'Bounty Contract #38: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0039',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 1050,
            experience: 2150,
            reputation: 28,
            itemId: 'item_gear_0038'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0039',
        title: 'Bounty Contract #39: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0040',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 1075,
            experience: 2200,
            reputation: 29,
            itemId: 'item_gear_0039'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0040',
        title: 'Bounty Contract #40: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0041',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 1100,
            experience: 2250,
            reputation: 10,
            itemId: 'item_gear_0040'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0041',
        title: 'Bounty Contract #41: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0042',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 1125,
            experience: 2300,
            reputation: 11,
            itemId: 'item_gear_0041'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0042',
        title: 'Bounty Contract #42: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0043',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 1150,
            experience: 2350,
            reputation: 12,
            itemId: 'item_gear_0042'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0043',
        title: 'Bounty Contract #43: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0044',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 1175,
            experience: 2400,
            reputation: 13,
            itemId: 'item_gear_0043'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0044',
        title: 'Bounty Contract #44: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0045',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 1200,
            experience: 2450,
            reputation: 14,
            itemId: 'item_gear_0044'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0045',
        title: 'Bounty Contract #45: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0046',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 1225,
            experience: 2500,
            reputation: 15,
            itemId: 'item_gear_0045'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0046',
        title: 'Bounty Contract #46: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0047',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 1250,
            experience: 2550,
            reputation: 16,
            itemId: 'item_gear_0046'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0047',
        title: 'Bounty Contract #47: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0048',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 1275,
            experience: 2600,
            reputation: 17,
            itemId: 'item_gear_0047'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0048',
        title: 'Bounty Contract #48: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0049',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 1300,
            experience: 2650,
            reputation: 18,
            itemId: 'item_gear_0048'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0049',
        title: 'Bounty Contract #49: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0050',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 1325,
            experience: 2700,
            reputation: 19,
            itemId: 'item_gear_0049'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0050',
        title: 'Bounty Contract #50: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0051',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 1350,
            experience: 2750,
            reputation: 20,
            itemId: 'item_gear_0050'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0051',
        title: 'Bounty Contract #51: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0052',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 1375,
            experience: 2800,
            reputation: 21,
            itemId: 'item_gear_0051'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0052',
        title: 'Bounty Contract #52: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0053',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 1400,
            experience: 2850,
            reputation: 22,
            itemId: 'item_gear_0052'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0053',
        title: 'Bounty Contract #53: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0054',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 1425,
            experience: 2900,
            reputation: 23,
            itemId: 'item_gear_0053'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0054',
        title: 'Bounty Contract #54: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0055',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 1450,
            experience: 2950,
            reputation: 24,
            itemId: 'item_gear_0054'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0055',
        title: 'Bounty Contract #55: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0056',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 1475,
            experience: 3000,
            reputation: 25,
            itemId: 'item_gear_0055'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0056',
        title: 'Bounty Contract #56: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0057',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 1500,
            experience: 3050,
            reputation: 26,
            itemId: 'item_gear_0056'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0057',
        title: 'Bounty Contract #57: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0058',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 1525,
            experience: 3100,
            reputation: 27,
            itemId: 'item_gear_0057'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0058',
        title: 'Bounty Contract #58: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0059',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 1550,
            experience: 3150,
            reputation: 28,
            itemId: 'item_gear_0058'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0059',
        title: 'Bounty Contract #59: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0060',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 1575,
            experience: 3200,
            reputation: 29,
            itemId: 'item_gear_0059'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0060',
        title: 'Bounty Contract #60: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0061',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 1600,
            experience: 3250,
            reputation: 10,
            itemId: 'item_gear_0060'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0061',
        title: 'Bounty Contract #61: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0062',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 1625,
            experience: 3300,
            reputation: 11,
            itemId: 'item_gear_0061'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0062',
        title: 'Bounty Contract #62: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0063',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 1650,
            experience: 3350,
            reputation: 12,
            itemId: 'item_gear_0062'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0063',
        title: 'Bounty Contract #63: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0064',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 1675,
            experience: 3400,
            reputation: 13,
            itemId: 'item_gear_0063'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0064',
        title: 'Bounty Contract #64: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0065',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 1700,
            experience: 3450,
            reputation: 14,
            itemId: 'item_gear_0064'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0065',
        title: 'Bounty Contract #65: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0066',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 1725,
            experience: 3500,
            reputation: 15,
            itemId: 'item_gear_0065'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0066',
        title: 'Bounty Contract #66: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0067',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 1750,
            experience: 3550,
            reputation: 16,
            itemId: 'item_gear_0066'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0067',
        title: 'Bounty Contract #67: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0068',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 1775,
            experience: 3600,
            reputation: 17,
            itemId: 'item_gear_0067'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0068',
        title: 'Bounty Contract #68: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0069',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 1800,
            experience: 3650,
            reputation: 18,
            itemId: 'item_gear_0068'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0069',
        title: 'Bounty Contract #69: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0070',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 1825,
            experience: 3700,
            reputation: 19,
            itemId: 'item_gear_0069'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0070',
        title: 'Bounty Contract #70: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0071',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 1850,
            experience: 3750,
            reputation: 20,
            itemId: 'item_gear_0070'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0071',
        title: 'Bounty Contract #71: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0072',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 1875,
            experience: 3800,
            reputation: 21,
            itemId: 'item_gear_0071'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0072',
        title: 'Bounty Contract #72: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0073',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 1900,
            experience: 3850,
            reputation: 22,
            itemId: 'item_gear_0072'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0073',
        title: 'Bounty Contract #73: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0074',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 1925,
            experience: 3900,
            reputation: 23,
            itemId: 'item_gear_0073'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0074',
        title: 'Bounty Contract #74: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0075',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 1950,
            experience: 3950,
            reputation: 24,
            itemId: 'item_gear_0074'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0075',
        title: 'Bounty Contract #75: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0076',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 1975,
            experience: 4000,
            reputation: 25,
            itemId: 'item_gear_0075'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0076',
        title: 'Bounty Contract #76: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0077',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 2000,
            experience: 4050,
            reputation: 26,
            itemId: 'item_gear_0076'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0077',
        title: 'Bounty Contract #77: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0078',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 2025,
            experience: 4100,
            reputation: 27,
            itemId: 'item_gear_0077'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0078',
        title: 'Bounty Contract #78: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0079',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 2050,
            experience: 4150,
            reputation: 28,
            itemId: 'item_gear_0078'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0079',
        title: 'Bounty Contract #79: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0080',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 2075,
            experience: 4200,
            reputation: 29,
            itemId: 'item_gear_0079'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0080',
        title: 'Bounty Contract #80: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0081',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 2100,
            experience: 4250,
            reputation: 10,
            itemId: 'item_gear_0080'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0081',
        title: 'Bounty Contract #81: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0082',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 2125,
            experience: 4300,
            reputation: 11,
            itemId: 'item_gear_0081'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0082',
        title: 'Bounty Contract #82: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0083',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 2150,
            experience: 4350,
            reputation: 12,
            itemId: 'item_gear_0082'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0083',
        title: 'Bounty Contract #83: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0084',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 2175,
            experience: 4400,
            reputation: 13,
            itemId: 'item_gear_0083'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0084',
        title: 'Bounty Contract #84: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0085',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 2200,
            experience: 4450,
            reputation: 14,
            itemId: 'item_gear_0084'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0085',
        title: 'Bounty Contract #85: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0086',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 2225,
            experience: 4500,
            reputation: 15,
            itemId: 'item_gear_0085'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0086',
        title: 'Bounty Contract #86: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0087',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 2250,
            experience: 4550,
            reputation: 16,
            itemId: 'item_gear_0086'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0087',
        title: 'Bounty Contract #87: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0088',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 2275,
            experience: 4600,
            reputation: 17,
            itemId: 'item_gear_0087'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0088',
        title: 'Bounty Contract #88: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0089',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 2300,
            experience: 4650,
            reputation: 18,
            itemId: 'item_gear_0088'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0089',
        title: 'Bounty Contract #89: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0090',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 2325,
            experience: 4700,
            reputation: 19,
            itemId: 'item_gear_0089'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0090',
        title: 'Bounty Contract #90: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0091',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 2350,
            experience: 4750,
            reputation: 20,
            itemId: 'item_gear_0090'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0091',
        title: 'Bounty Contract #91: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0092',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 2375,
            experience: 4800,
            reputation: 21,
            itemId: 'item_gear_0091'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0092',
        title: 'Bounty Contract #92: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0093',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 2400,
            experience: 4850,
            reputation: 22,
            itemId: 'item_gear_0092'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0093',
        title: 'Bounty Contract #93: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0094',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 2425,
            experience: 4900,
            reputation: 23,
            itemId: 'item_gear_0093'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0094',
        title: 'Bounty Contract #94: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0095',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 2450,
            experience: 4950,
            reputation: 24,
            itemId: 'item_gear_0094'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0095',
        title: 'Bounty Contract #95: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0096',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 2475,
            experience: 5000,
            reputation: 25,
            itemId: 'item_gear_0095'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0096',
        title: 'Bounty Contract #96: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0097',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 2500,
            experience: 5050,
            reputation: 26,
            itemId: 'item_gear_0096'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0097',
        title: 'Bounty Contract #97: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0098',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 2525,
            experience: 5100,
            reputation: 27,
            itemId: 'item_gear_0097'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0098',
        title: 'Bounty Contract #98: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0099',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 2550,
            experience: 5150,
            reputation: 28,
            itemId: 'item_gear_0098'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0099',
        title: 'Bounty Contract #99: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0100',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 2575,
            experience: 5200,
            reputation: 29,
            itemId: 'item_gear_0099'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0100',
        title: 'Bounty Contract #100: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0101',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 2600,
            experience: 5250,
            reputation: 10,
            itemId: 'item_gear_0100'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0101',
        title: 'Bounty Contract #101: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0102',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 2625,
            experience: 5300,
            reputation: 11,
            itemId: 'item_gear_0101'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0102',
        title: 'Bounty Contract #102: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0103',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 2650,
            experience: 5350,
            reputation: 12,
            itemId: 'item_gear_0102'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0103',
        title: 'Bounty Contract #103: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0104',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 2675,
            experience: 5400,
            reputation: 13,
            itemId: 'item_gear_0103'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0104',
        title: 'Bounty Contract #104: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0105',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 2700,
            experience: 5450,
            reputation: 14,
            itemId: 'item_gear_0104'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0105',
        title: 'Bounty Contract #105: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0106',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 2725,
            experience: 5500,
            reputation: 15,
            itemId: 'item_gear_0105'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0106',
        title: 'Bounty Contract #106: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0107',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 2750,
            experience: 5550,
            reputation: 16,
            itemId: 'item_gear_0106'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0107',
        title: 'Bounty Contract #107: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0108',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 2775,
            experience: 5600,
            reputation: 17,
            itemId: 'item_gear_0107'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0108',
        title: 'Bounty Contract #108: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0109',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 2800,
            experience: 5650,
            reputation: 18,
            itemId: 'item_gear_0108'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0109',
        title: 'Bounty Contract #109: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0110',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 2825,
            experience: 5700,
            reputation: 19,
            itemId: 'item_gear_0109'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0110',
        title: 'Bounty Contract #110: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0111',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 2850,
            experience: 5750,
            reputation: 20,
            itemId: 'item_gear_0110'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0111',
        title: 'Bounty Contract #111: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0112',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 2875,
            experience: 5800,
            reputation: 21,
            itemId: 'item_gear_0111'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0112',
        title: 'Bounty Contract #112: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0113',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 2900,
            experience: 5850,
            reputation: 22,
            itemId: 'item_gear_0112'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0113',
        title: 'Bounty Contract #113: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0114',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 2925,
            experience: 5900,
            reputation: 23,
            itemId: 'item_gear_0113'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0114',
        title: 'Bounty Contract #114: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0115',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 2950,
            experience: 5950,
            reputation: 24,
            itemId: 'item_gear_0114'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0115',
        title: 'Bounty Contract #115: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0116',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 2975,
            experience: 6000,
            reputation: 25,
            itemId: 'item_gear_0115'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0116',
        title: 'Bounty Contract #116: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0117',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 3000,
            experience: 6050,
            reputation: 26,
            itemId: 'item_gear_0116'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0117',
        title: 'Bounty Contract #117: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0118',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 3025,
            experience: 6100,
            reputation: 27,
            itemId: 'item_gear_0117'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0118',
        title: 'Bounty Contract #118: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0119',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 3050,
            experience: 6150,
            reputation: 28,
            itemId: 'item_gear_0118'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0119',
        title: 'Bounty Contract #119: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0120',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 3075,
            experience: 6200,
            reputation: 29,
            itemId: 'item_gear_0119'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0120',
        title: 'Bounty Contract #120: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0121',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 3100,
            experience: 6250,
            reputation: 10,
            itemId: 'item_gear_0120'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0121',
        title: 'Bounty Contract #121: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0122',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 3125,
            experience: 6300,
            reputation: 11,
            itemId: 'item_gear_0121'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0122',
        title: 'Bounty Contract #122: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0123',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 3150,
            experience: 6350,
            reputation: 12,
            itemId: 'item_gear_0122'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0123',
        title: 'Bounty Contract #123: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0124',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 3175,
            experience: 6400,
            reputation: 13,
            itemId: 'item_gear_0123'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0124',
        title: 'Bounty Contract #124: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0125',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 3200,
            experience: 6450,
            reputation: 14,
            itemId: 'item_gear_0124'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0125',
        title: 'Bounty Contract #125: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0126',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 3225,
            experience: 6500,
            reputation: 15,
            itemId: 'item_gear_0125'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0126',
        title: 'Bounty Contract #126: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0127',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 3250,
            experience: 6550,
            reputation: 16,
            itemId: 'item_gear_0126'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0127',
        title: 'Bounty Contract #127: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0128',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 3275,
            experience: 6600,
            reputation: 17,
            itemId: 'item_gear_0127'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0128',
        title: 'Bounty Contract #128: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0129',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 3300,
            experience: 6650,
            reputation: 18,
            itemId: 'item_gear_0128'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0129',
        title: 'Bounty Contract #129: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0130',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 3325,
            experience: 6700,
            reputation: 19,
            itemId: 'item_gear_0129'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0130',
        title: 'Bounty Contract #130: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0131',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 3350,
            experience: 6750,
            reputation: 20,
            itemId: 'item_gear_0130'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0131',
        title: 'Bounty Contract #131: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0132',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 3375,
            experience: 6800,
            reputation: 21,
            itemId: 'item_gear_0131'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0132',
        title: 'Bounty Contract #132: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0133',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 3400,
            experience: 6850,
            reputation: 22,
            itemId: 'item_gear_0132'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0133',
        title: 'Bounty Contract #133: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0134',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 3425,
            experience: 6900,
            reputation: 23,
            itemId: 'item_gear_0133'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0134',
        title: 'Bounty Contract #134: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0135',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 3450,
            experience: 6950,
            reputation: 24,
            itemId: 'item_gear_0134'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0135',
        title: 'Bounty Contract #135: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0136',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 3475,
            experience: 7000,
            reputation: 25,
            itemId: 'item_gear_0135'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0136',
        title: 'Bounty Contract #136: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0137',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 3500,
            experience: 7050,
            reputation: 26,
            itemId: 'item_gear_0136'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0137',
        title: 'Bounty Contract #137: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0138',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 3525,
            experience: 7100,
            reputation: 27,
            itemId: 'item_gear_0137'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0138',
        title: 'Bounty Contract #138: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0139',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 3550,
            experience: 7150,
            reputation: 28,
            itemId: 'item_gear_0138'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0139',
        title: 'Bounty Contract #139: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0140',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 3575,
            experience: 7200,
            reputation: 29,
            itemId: 'item_gear_0139'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0140',
        title: 'Bounty Contract #140: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0141',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 3600,
            experience: 7250,
            reputation: 10,
            itemId: 'item_gear_0140'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0141',
        title: 'Bounty Contract #141: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0142',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 3625,
            experience: 7300,
            reputation: 11,
            itemId: 'item_gear_0141'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0142',
        title: 'Bounty Contract #142: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0143',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 3650,
            experience: 7350,
            reputation: 12,
            itemId: 'item_gear_0142'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0143',
        title: 'Bounty Contract #143: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0144',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 3675,
            experience: 7400,
            reputation: 13,
            itemId: 'item_gear_0143'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0144',
        title: 'Bounty Contract #144: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0145',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 3700,
            experience: 7450,
            reputation: 14,
            itemId: 'item_gear_0144'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0145',
        title: 'Bounty Contract #145: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0146',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 3725,
            experience: 7500,
            reputation: 15,
            itemId: 'item_gear_0145'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0146',
        title: 'Bounty Contract #146: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0147',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 3750,
            experience: 7550,
            reputation: 16,
            itemId: 'item_gear_0146'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0147',
        title: 'Bounty Contract #147: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0148',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 3775,
            experience: 7600,
            reputation: 17,
            itemId: 'item_gear_0147'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0148',
        title: 'Bounty Contract #148: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0149',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 3800,
            experience: 7650,
            reputation: 18,
            itemId: 'item_gear_0148'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0149',
        title: 'Bounty Contract #149: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0150',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 3825,
            experience: 7700,
            reputation: 19,
            itemId: 'item_gear_0149'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0150',
        title: 'Bounty Contract #150: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0151',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 3850,
            experience: 7750,
            reputation: 20,
            itemId: 'item_gear_0150'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0151',
        title: 'Bounty Contract #151: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0152',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 3875,
            experience: 7800,
            reputation: 21,
            itemId: 'item_gear_0151'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0152',
        title: 'Bounty Contract #152: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0153',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 3900,
            experience: 7850,
            reputation: 22,
            itemId: 'item_gear_0152'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0153',
        title: 'Bounty Contract #153: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0154',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 3925,
            experience: 7900,
            reputation: 23,
            itemId: 'item_gear_0153'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0154',
        title: 'Bounty Contract #154: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0155',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 3950,
            experience: 7950,
            reputation: 24,
            itemId: 'item_gear_0154'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0155',
        title: 'Bounty Contract #155: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0156',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 3975,
            experience: 8000,
            reputation: 25,
            itemId: 'item_gear_0155'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0156',
        title: 'Bounty Contract #156: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0157',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 4000,
            experience: 8050,
            reputation: 26,
            itemId: 'item_gear_0156'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0157',
        title: 'Bounty Contract #157: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0158',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 4025,
            experience: 8100,
            reputation: 27,
            itemId: 'item_gear_0157'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0158',
        title: 'Bounty Contract #158: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0159',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 4050,
            experience: 8150,
            reputation: 28,
            itemId: 'item_gear_0158'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0159',
        title: 'Bounty Contract #159: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0160',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 4075,
            experience: 8200,
            reputation: 29,
            itemId: 'item_gear_0159'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0160',
        title: 'Bounty Contract #160: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0161',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 4100,
            experience: 8250,
            reputation: 10,
            itemId: 'item_gear_0160'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0161',
        title: 'Bounty Contract #161: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0162',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 4125,
            experience: 8300,
            reputation: 11,
            itemId: 'item_gear_0161'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0162',
        title: 'Bounty Contract #162: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0163',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 4150,
            experience: 8350,
            reputation: 12,
            itemId: 'item_gear_0162'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0163',
        title: 'Bounty Contract #163: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0164',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 4175,
            experience: 8400,
            reputation: 13,
            itemId: 'item_gear_0163'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0164',
        title: 'Bounty Contract #164: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0165',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 4200,
            experience: 8450,
            reputation: 14,
            itemId: 'item_gear_0164'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0165',
        title: 'Bounty Contract #165: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0166',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 4225,
            experience: 8500,
            reputation: 15,
            itemId: 'item_gear_0165'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0166',
        title: 'Bounty Contract #166: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0167',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 4250,
            experience: 8550,
            reputation: 16,
            itemId: 'item_gear_0166'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0167',
        title: 'Bounty Contract #167: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0168',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 4275,
            experience: 8600,
            reputation: 17,
            itemId: 'item_gear_0167'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0168',
        title: 'Bounty Contract #168: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0169',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 4300,
            experience: 8650,
            reputation: 18,
            itemId: 'item_gear_0168'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0169',
        title: 'Bounty Contract #169: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0170',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 4325,
            experience: 8700,
            reputation: 19,
            itemId: 'item_gear_0169'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0170',
        title: 'Bounty Contract #170: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0171',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 4350,
            experience: 8750,
            reputation: 20,
            itemId: 'item_gear_0170'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0171',
        title: 'Bounty Contract #171: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0172',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 4375,
            experience: 8800,
            reputation: 21,
            itemId: 'item_gear_0171'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0172',
        title: 'Bounty Contract #172: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0173',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 4400,
            experience: 8850,
            reputation: 22,
            itemId: 'item_gear_0172'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0173',
        title: 'Bounty Contract #173: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0174',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 4425,
            experience: 8900,
            reputation: 23,
            itemId: 'item_gear_0173'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0174',
        title: 'Bounty Contract #174: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0175',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 4450,
            experience: 8950,
            reputation: 24,
            itemId: 'item_gear_0174'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0175',
        title: 'Bounty Contract #175: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0176',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 4475,
            experience: 9000,
            reputation: 25,
            itemId: 'item_gear_0175'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0176',
        title: 'Bounty Contract #176: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0177',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 4500,
            experience: 9050,
            reputation: 26,
            itemId: 'item_gear_0176'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0177',
        title: 'Bounty Contract #177: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0178',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 4525,
            experience: 9100,
            reputation: 27,
            itemId: 'item_gear_0177'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0178',
        title: 'Bounty Contract #178: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0179',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 4550,
            experience: 9150,
            reputation: 28,
            itemId: 'item_gear_0178'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0179',
        title: 'Bounty Contract #179: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0180',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 4575,
            experience: 9200,
            reputation: 29,
            itemId: 'item_gear_0179'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0180',
        title: 'Bounty Contract #180: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0181',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 4600,
            experience: 9250,
            reputation: 10,
            itemId: 'item_gear_0180'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0181',
        title: 'Bounty Contract #181: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0182',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 4625,
            experience: 9300,
            reputation: 11,
            itemId: 'item_gear_0181'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0182',
        title: 'Bounty Contract #182: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0183',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 4650,
            experience: 9350,
            reputation: 12,
            itemId: 'item_gear_0182'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0183',
        title: 'Bounty Contract #183: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0184',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 4675,
            experience: 9400,
            reputation: 13,
            itemId: 'item_gear_0183'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0184',
        title: 'Bounty Contract #184: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0185',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 4700,
            experience: 9450,
            reputation: 14,
            itemId: 'item_gear_0184'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0185',
        title: 'Bounty Contract #185: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0186',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 4725,
            experience: 9500,
            reputation: 15,
            itemId: 'item_gear_0185'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0186',
        title: 'Bounty Contract #186: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0187',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 4750,
            experience: 9550,
            reputation: 16,
            itemId: 'item_gear_0186'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0187',
        title: 'Bounty Contract #187: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0188',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 4775,
            experience: 9600,
            reputation: 17,
            itemId: 'item_gear_0187'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0188',
        title: 'Bounty Contract #188: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0189',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 4800,
            experience: 9650,
            reputation: 18,
            itemId: 'item_gear_0188'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0189',
        title: 'Bounty Contract #189: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0190',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 4825,
            experience: 9700,
            reputation: 19,
            itemId: 'item_gear_0189'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0190',
        title: 'Bounty Contract #190: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0191',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 4850,
            experience: 9750,
            reputation: 20,
            itemId: 'item_gear_0190'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0191',
        title: 'Bounty Contract #191: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0192',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 4875,
            experience: 9800,
            reputation: 21,
            itemId: 'item_gear_0191'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0192',
        title: 'Bounty Contract #192: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0193',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 4900,
            experience: 9850,
            reputation: 22,
            itemId: 'item_gear_0192'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0193',
        title: 'Bounty Contract #193: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0194',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 4925,
            experience: 9900,
            reputation: 23,
            itemId: 'item_gear_0193'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0194',
        title: 'Bounty Contract #194: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0195',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 4950,
            experience: 9950,
            reputation: 24,
            itemId: 'item_gear_0194'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0195',
        title: 'Bounty Contract #195: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0196',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 4975,
            experience: 10000,
            reputation: 25,
            itemId: 'item_gear_0195'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0196',
        title: 'Bounty Contract #196: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0197',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 5000,
            experience: 10050,
            reputation: 26,
            itemId: 'item_gear_0196'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0197',
        title: 'Bounty Contract #197: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0198',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 5025,
            experience: 10100,
            reputation: 27,
            itemId: 'item_gear_0197'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0198',
        title: 'Bounty Contract #198: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0199',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 5050,
            experience: 10150,
            reputation: 28,
            itemId: 'item_gear_0198'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0199',
        title: 'Bounty Contract #199: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0200',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 5075,
            experience: 10200,
            reputation: 29,
            itemId: 'item_gear_0199'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0200',
        title: 'Bounty Contract #200: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0201',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 5100,
            experience: 10250,
            reputation: 10,
            itemId: 'item_gear_0200'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0201',
        title: 'Bounty Contract #201: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0202',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 5125,
            experience: 10300,
            reputation: 11,
            itemId: 'item_gear_0201'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0202',
        title: 'Bounty Contract #202: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0203',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 5150,
            experience: 10350,
            reputation: 12,
            itemId: 'item_gear_0202'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0203',
        title: 'Bounty Contract #203: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0204',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 5175,
            experience: 10400,
            reputation: 13,
            itemId: 'item_gear_0203'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0204',
        title: 'Bounty Contract #204: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0205',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 5200,
            experience: 10450,
            reputation: 14,
            itemId: 'item_gear_0204'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0205',
        title: 'Bounty Contract #205: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0206',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 5225,
            experience: 10500,
            reputation: 15,
            itemId: 'item_gear_0205'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0206',
        title: 'Bounty Contract #206: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0207',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 5250,
            experience: 10550,
            reputation: 16,
            itemId: 'item_gear_0206'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0207',
        title: 'Bounty Contract #207: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0208',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 5275,
            experience: 10600,
            reputation: 17,
            itemId: 'item_gear_0207'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0208',
        title: 'Bounty Contract #208: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0209',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 5300,
            experience: 10650,
            reputation: 18,
            itemId: 'item_gear_0208'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0209',
        title: 'Bounty Contract #209: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0210',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 5325,
            experience: 10700,
            reputation: 19,
            itemId: 'item_gear_0209'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0210',
        title: 'Bounty Contract #210: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0211',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 5350,
            experience: 10750,
            reputation: 20,
            itemId: 'item_gear_0210'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0211',
        title: 'Bounty Contract #211: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0212',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 5375,
            experience: 10800,
            reputation: 21,
            itemId: 'item_gear_0211'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0212',
        title: 'Bounty Contract #212: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0213',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 5400,
            experience: 10850,
            reputation: 22,
            itemId: 'item_gear_0212'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0213',
        title: 'Bounty Contract #213: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0214',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 5425,
            experience: 10900,
            reputation: 23,
            itemId: 'item_gear_0213'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0214',
        title: 'Bounty Contract #214: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0215',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 5450,
            experience: 10950,
            reputation: 24,
            itemId: 'item_gear_0214'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0215',
        title: 'Bounty Contract #215: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0216',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 5475,
            experience: 11000,
            reputation: 25,
            itemId: 'item_gear_0215'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0216',
        title: 'Bounty Contract #216: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0217',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 5500,
            experience: 11050,
            reputation: 26,
            itemId: 'item_gear_0216'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0217',
        title: 'Bounty Contract #217: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0218',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 5525,
            experience: 11100,
            reputation: 27,
            itemId: 'item_gear_0217'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0218',
        title: 'Bounty Contract #218: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0219',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 5550,
            experience: 11150,
            reputation: 28,
            itemId: 'item_gear_0218'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0219',
        title: 'Bounty Contract #219: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0220',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 5575,
            experience: 11200,
            reputation: 29,
            itemId: 'item_gear_0219'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0220',
        title: 'Bounty Contract #220: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0221',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 5600,
            experience: 11250,
            reputation: 10,
            itemId: 'item_gear_0220'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0221',
        title: 'Bounty Contract #221: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0222',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 5625,
            experience: 11300,
            reputation: 11,
            itemId: 'item_gear_0221'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0222',
        title: 'Bounty Contract #222: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0223',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 5650,
            experience: 11350,
            reputation: 12,
            itemId: 'item_gear_0222'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0223',
        title: 'Bounty Contract #223: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0224',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 5675,
            experience: 11400,
            reputation: 13,
            itemId: 'item_gear_0223'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0224',
        title: 'Bounty Contract #224: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0225',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 5700,
            experience: 11450,
            reputation: 14,
            itemId: 'item_gear_0224'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0225',
        title: 'Bounty Contract #225: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0226',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 5725,
            experience: 11500,
            reputation: 15,
            itemId: 'item_gear_0225'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0226',
        title: 'Bounty Contract #226: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0227',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 5750,
            experience: 11550,
            reputation: 16,
            itemId: 'item_gear_0226'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0227',
        title: 'Bounty Contract #227: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0228',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 5775,
            experience: 11600,
            reputation: 17,
            itemId: 'item_gear_0227'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0228',
        title: 'Bounty Contract #228: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0229',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 5800,
            experience: 11650,
            reputation: 18,
            itemId: 'item_gear_0228'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0229',
        title: 'Bounty Contract #229: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0230',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 5825,
            experience: 11700,
            reputation: 19,
            itemId: 'item_gear_0229'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0230',
        title: 'Bounty Contract #230: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0231',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 5850,
            experience: 11750,
            reputation: 20,
            itemId: 'item_gear_0230'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0231',
        title: 'Bounty Contract #231: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0232',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 5875,
            experience: 11800,
            reputation: 21,
            itemId: 'item_gear_0231'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0232',
        title: 'Bounty Contract #232: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0233',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 5900,
            experience: 11850,
            reputation: 22,
            itemId: 'item_gear_0232'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0233',
        title: 'Bounty Contract #233: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0234',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 5925,
            experience: 11900,
            reputation: 23,
            itemId: 'item_gear_0233'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0234',
        title: 'Bounty Contract #234: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0235',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 5950,
            experience: 11950,
            reputation: 24,
            itemId: 'item_gear_0234'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0235',
        title: 'Bounty Contract #235: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0236',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 5975,
            experience: 12000,
            reputation: 25,
            itemId: 'item_gear_0235'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0236',
        title: 'Bounty Contract #236: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0237',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 6000,
            experience: 12050,
            reputation: 26,
            itemId: 'item_gear_0236'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0237',
        title: 'Bounty Contract #237: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0238',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 6025,
            experience: 12100,
            reputation: 27,
            itemId: 'item_gear_0237'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0238',
        title: 'Bounty Contract #238: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0239',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 6050,
            experience: 12150,
            reputation: 28,
            itemId: 'item_gear_0238'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0239',
        title: 'Bounty Contract #239: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0240',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 6075,
            experience: 12200,
            reputation: 29,
            itemId: 'item_gear_0239'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0240',
        title: 'Bounty Contract #240: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0241',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 6100,
            experience: 12250,
            reputation: 10,
            itemId: 'item_gear_0240'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0241',
        title: 'Bounty Contract #241: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0242',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 6125,
            experience: 12300,
            reputation: 11,
            itemId: 'item_gear_0241'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0242',
        title: 'Bounty Contract #242: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0243',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 6150,
            experience: 12350,
            reputation: 12,
            itemId: 'item_gear_0242'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0243',
        title: 'Bounty Contract #243: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0244',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 6175,
            experience: 12400,
            reputation: 13,
            itemId: 'item_gear_0243'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0244',
        title: 'Bounty Contract #244: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0245',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 6200,
            experience: 12450,
            reputation: 14,
            itemId: 'item_gear_0244'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0245',
        title: 'Bounty Contract #245: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0246',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 6225,
            experience: 12500,
            reputation: 15,
            itemId: 'item_gear_0245'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0246',
        title: 'Bounty Contract #246: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0247',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 6250,
            experience: 12550,
            reputation: 16,
            itemId: 'item_gear_0246'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0247',
        title: 'Bounty Contract #247: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0248',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 6275,
            experience: 12600,
            reputation: 17,
            itemId: 'item_gear_0247'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0248',
        title: 'Bounty Contract #248: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0249',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 6300,
            experience: 12650,
            reputation: 18,
            itemId: 'item_gear_0248'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0249',
        title: 'Bounty Contract #249: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0250',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 6325,
            experience: 12700,
            reputation: 19,
            itemId: 'item_gear_0249'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0250',
        title: 'Bounty Contract #250: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0251',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 6350,
            experience: 12750,
            reputation: 20,
            itemId: 'item_gear_0250'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0251',
        title: 'Bounty Contract #251: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0252',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 6375,
            experience: 12800,
            reputation: 21,
            itemId: 'item_gear_0251'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0252',
        title: 'Bounty Contract #252: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0253',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 6400,
            experience: 12850,
            reputation: 22,
            itemId: 'item_gear_0252'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0253',
        title: 'Bounty Contract #253: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0254',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 6425,
            experience: 12900,
            reputation: 23,
            itemId: 'item_gear_0253'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0254',
        title: 'Bounty Contract #254: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0255',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 6450,
            experience: 12950,
            reputation: 24,
            itemId: 'item_gear_0254'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0255',
        title: 'Bounty Contract #255: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0256',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 6475,
            experience: 13000,
            reputation: 25,
            itemId: 'item_gear_0255'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0256',
        title: 'Bounty Contract #256: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0257',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 6500,
            experience: 13050,
            reputation: 26,
            itemId: 'item_gear_0256'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0257',
        title: 'Bounty Contract #257: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0258',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 6525,
            experience: 13100,
            reputation: 27,
            itemId: 'item_gear_0257'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0258',
        title: 'Bounty Contract #258: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0259',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 6550,
            experience: 13150,
            reputation: 28,
            itemId: 'item_gear_0258'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0259',
        title: 'Bounty Contract #259: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0260',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 6575,
            experience: 13200,
            reputation: 29,
            itemId: 'item_gear_0259'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0260',
        title: 'Bounty Contract #260: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0261',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 6600,
            experience: 13250,
            reputation: 10,
            itemId: 'item_gear_0260'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0261',
        title: 'Bounty Contract #261: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0262',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 6625,
            experience: 13300,
            reputation: 11,
            itemId: 'item_gear_0261'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0262',
        title: 'Bounty Contract #262: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0263',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 6650,
            experience: 13350,
            reputation: 12,
            itemId: 'item_gear_0262'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0263',
        title: 'Bounty Contract #263: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0264',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 6675,
            experience: 13400,
            reputation: 13,
            itemId: 'item_gear_0263'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0264',
        title: 'Bounty Contract #264: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0265',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 6700,
            experience: 13450,
            reputation: 14,
            itemId: 'item_gear_0264'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0265',
        title: 'Bounty Contract #265: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0266',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 6725,
            experience: 13500,
            reputation: 15,
            itemId: 'item_gear_0265'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0266',
        title: 'Bounty Contract #266: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0267',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 6750,
            experience: 13550,
            reputation: 16,
            itemId: 'item_gear_0266'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0267',
        title: 'Bounty Contract #267: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0268',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 6775,
            experience: 13600,
            reputation: 17,
            itemId: 'item_gear_0267'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0268',
        title: 'Bounty Contract #268: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0269',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 6800,
            experience: 13650,
            reputation: 18,
            itemId: 'item_gear_0268'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0269',
        title: 'Bounty Contract #269: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0270',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 6825,
            experience: 13700,
            reputation: 19,
            itemId: 'item_gear_0269'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0270',
        title: 'Bounty Contract #270: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0271',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 6850,
            experience: 13750,
            reputation: 20,
            itemId: 'item_gear_0270'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0271',
        title: 'Bounty Contract #271: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0272',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 6875,
            experience: 13800,
            reputation: 21,
            itemId: 'item_gear_0271'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0272',
        title: 'Bounty Contract #272: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0273',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 6900,
            experience: 13850,
            reputation: 22,
            itemId: 'item_gear_0272'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0273',
        title: 'Bounty Contract #273: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0274',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 6925,
            experience: 13900,
            reputation: 23,
            itemId: 'item_gear_0273'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0274',
        title: 'Bounty Contract #274: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0275',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 6950,
            experience: 13950,
            reputation: 24,
            itemId: 'item_gear_0274'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0275',
        title: 'Bounty Contract #275: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0276',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 6975,
            experience: 14000,
            reputation: 25,
            itemId: 'item_gear_0275'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0276',
        title: 'Bounty Contract #276: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0277',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 7000,
            experience: 14050,
            reputation: 26,
            itemId: 'item_gear_0276'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0277',
        title: 'Bounty Contract #277: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0278',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 7025,
            experience: 14100,
            reputation: 27,
            itemId: 'item_gear_0277'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0278',
        title: 'Bounty Contract #278: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0279',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 7050,
            experience: 14150,
            reputation: 28,
            itemId: 'item_gear_0278'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0279',
        title: 'Bounty Contract #279: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0280',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 7075,
            experience: 14200,
            reputation: 29,
            itemId: 'item_gear_0279'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0280',
        title: 'Bounty Contract #280: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0281',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 7100,
            experience: 14250,
            reputation: 10,
            itemId: 'item_gear_0280'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0281',
        title: 'Bounty Contract #281: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0282',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 7125,
            experience: 14300,
            reputation: 11,
            itemId: 'item_gear_0281'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0282',
        title: 'Bounty Contract #282: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0283',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 7150,
            experience: 14350,
            reputation: 12,
            itemId: 'item_gear_0282'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0283',
        title: 'Bounty Contract #283: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0284',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 7175,
            experience: 14400,
            reputation: 13,
            itemId: 'item_gear_0283'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0284',
        title: 'Bounty Contract #284: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0285',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 7200,
            experience: 14450,
            reputation: 14,
            itemId: 'item_gear_0284'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0285',
        title: 'Bounty Contract #285: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0286',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 7225,
            experience: 14500,
            reputation: 15,
            itemId: 'item_gear_0285'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0286',
        title: 'Bounty Contract #286: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0287',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 7250,
            experience: 14550,
            reputation: 16,
            itemId: 'item_gear_0286'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0287',
        title: 'Bounty Contract #287: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0288',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 7275,
            experience: 14600,
            reputation: 17,
            itemId: 'item_gear_0287'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0288',
        title: 'Bounty Contract #288: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0289',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 7300,
            experience: 14650,
            reputation: 18,
            itemId: 'item_gear_0288'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0289',
        title: 'Bounty Contract #289: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0290',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 7325,
            experience: 14700,
            reputation: 19,
            itemId: 'item_gear_0289'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0290',
        title: 'Bounty Contract #290: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0291',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 7350,
            experience: 14750,
            reputation: 20,
            itemId: 'item_gear_0290'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0291',
        title: 'Bounty Contract #291: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0292',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 7375,
            experience: 14800,
            reputation: 21,
            itemId: 'item_gear_0291'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0292',
        title: 'Bounty Contract #292: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0293',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 7400,
            experience: 14850,
            reputation: 22,
            itemId: 'item_gear_0292'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0293',
        title: 'Bounty Contract #293: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0294',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 7425,
            experience: 14900,
            reputation: 23,
            itemId: 'item_gear_0293'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0294',
        title: 'Bounty Contract #294: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0295',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 7450,
            experience: 14950,
            reputation: 24,
            itemId: 'item_gear_0294'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0295',
        title: 'Bounty Contract #295: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0296',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 7475,
            experience: 15000,
            reputation: 25,
            itemId: 'item_gear_0295'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0296',
        title: 'Bounty Contract #296: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0297',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 7500,
            experience: 15050,
            reputation: 26,
            itemId: 'item_gear_0296'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0297',
        title: 'Bounty Contract #297: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0298',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 7525,
            experience: 15100,
            reputation: 27,
            itemId: 'item_gear_0297'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0298',
        title: 'Bounty Contract #298: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0299',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 7550,
            experience: 15150,
            reputation: 28,
            itemId: 'item_gear_0298'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0299',
        title: 'Bounty Contract #299: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0300',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 7575,
            experience: 15200,
            reputation: 29,
            itemId: 'item_gear_0299'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0300',
        title: 'Bounty Contract #300: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0301',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 7600,
            experience: 15250,
            reputation: 10,
            itemId: 'item_gear_0300'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0301',
        title: 'Bounty Contract #301: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0302',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 7625,
            experience: 15300,
            reputation: 11,
            itemId: 'item_gear_0301'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0302',
        title: 'Bounty Contract #302: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0303',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 7650,
            experience: 15350,
            reputation: 12,
            itemId: 'item_gear_0302'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0303',
        title: 'Bounty Contract #303: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0304',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 7675,
            experience: 15400,
            reputation: 13,
            itemId: 'item_gear_0303'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0304',
        title: 'Bounty Contract #304: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0305',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 7700,
            experience: 15450,
            reputation: 14,
            itemId: 'item_gear_0304'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0305',
        title: 'Bounty Contract #305: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0306',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 7725,
            experience: 15500,
            reputation: 15,
            itemId: 'item_gear_0305'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0306',
        title: 'Bounty Contract #306: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0307',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 7750,
            experience: 15550,
            reputation: 16,
            itemId: 'item_gear_0306'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0307',
        title: 'Bounty Contract #307: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0308',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 7775,
            experience: 15600,
            reputation: 17,
            itemId: 'item_gear_0307'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0308',
        title: 'Bounty Contract #308: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0309',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 7800,
            experience: 15650,
            reputation: 18,
            itemId: 'item_gear_0308'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0309',
        title: 'Bounty Contract #309: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0310',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 7825,
            experience: 15700,
            reputation: 19,
            itemId: 'item_gear_0309'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0310',
        title: 'Bounty Contract #310: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0311',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 7850,
            experience: 15750,
            reputation: 20,
            itemId: 'item_gear_0310'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0311',
        title: 'Bounty Contract #311: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0312',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 7875,
            experience: 15800,
            reputation: 21,
            itemId: 'item_gear_0311'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0312',
        title: 'Bounty Contract #312: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0313',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 7900,
            experience: 15850,
            reputation: 22,
            itemId: 'item_gear_0312'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0313',
        title: 'Bounty Contract #313: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0314',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 7925,
            experience: 15900,
            reputation: 23,
            itemId: 'item_gear_0313'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0314',
        title: 'Bounty Contract #314: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0315',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 7950,
            experience: 15950,
            reputation: 24,
            itemId: 'item_gear_0314'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0315',
        title: 'Bounty Contract #315: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0316',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 7975,
            experience: 16000,
            reputation: 25,
            itemId: 'item_gear_0315'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0316',
        title: 'Bounty Contract #316: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0317',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 8000,
            experience: 16050,
            reputation: 26,
            itemId: 'item_gear_0316'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0317',
        title: 'Bounty Contract #317: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0318',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 8025,
            experience: 16100,
            reputation: 27,
            itemId: 'item_gear_0317'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0318',
        title: 'Bounty Contract #318: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0319',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 8050,
            experience: 16150,
            reputation: 28,
            itemId: 'item_gear_0318'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0319',
        title: 'Bounty Contract #319: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0320',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 8075,
            experience: 16200,
            reputation: 29,
            itemId: 'item_gear_0319'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0320',
        title: 'Bounty Contract #320: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0321',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 8100,
            experience: 16250,
            reputation: 10,
            itemId: 'item_gear_0320'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0321',
        title: 'Bounty Contract #321: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0322',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 8125,
            experience: 16300,
            reputation: 11,
            itemId: 'item_gear_0321'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0322',
        title: 'Bounty Contract #322: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0323',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 8150,
            experience: 16350,
            reputation: 12,
            itemId: 'item_gear_0322'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0323',
        title: 'Bounty Contract #323: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0324',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 8175,
            experience: 16400,
            reputation: 13,
            itemId: 'item_gear_0323'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0324',
        title: 'Bounty Contract #324: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0325',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 8200,
            experience: 16450,
            reputation: 14,
            itemId: 'item_gear_0324'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0325',
        title: 'Bounty Contract #325: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0326',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 8225,
            experience: 16500,
            reputation: 15,
            itemId: 'item_gear_0325'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0326',
        title: 'Bounty Contract #326: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0327',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 8250,
            experience: 16550,
            reputation: 16,
            itemId: 'item_gear_0326'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0327',
        title: 'Bounty Contract #327: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0328',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 8275,
            experience: 16600,
            reputation: 17,
            itemId: 'item_gear_0327'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0328',
        title: 'Bounty Contract #328: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0329',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 8300,
            experience: 16650,
            reputation: 18,
            itemId: 'item_gear_0328'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0329',
        title: 'Bounty Contract #329: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0330',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 8325,
            experience: 16700,
            reputation: 19,
            itemId: 'item_gear_0329'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0330',
        title: 'Bounty Contract #330: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0331',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 8350,
            experience: 16750,
            reputation: 20,
            itemId: 'item_gear_0330'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0331',
        title: 'Bounty Contract #331: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 32,
        targetFloor: 2,
        targetMonster: 'monster_0332',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 8375,
            experience: 16800,
            reputation: 21,
            itemId: 'item_gear_0331'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0332',
        title: 'Bounty Contract #332: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 33,
        targetFloor: 3,
        targetMonster: 'monster_0333',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 8400,
            experience: 16850,
            reputation: 22,
            itemId: 'item_gear_0332'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0333',
        title: 'Bounty Contract #333: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 34,
        targetFloor: 4,
        targetMonster: 'monster_0334',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 8425,
            experience: 16900,
            reputation: 23,
            itemId: 'item_gear_0333'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0334',
        title: 'Bounty Contract #334: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 35,
        targetFloor: 5,
        targetMonster: 'monster_0335',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 8450,
            experience: 16950,
            reputation: 24,
            itemId: 'item_gear_0334'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0335',
        title: 'Bounty Contract #335: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 36,
        targetFloor: 1,
        targetMonster: 'monster_0336',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 8475,
            experience: 17000,
            reputation: 25,
            itemId: 'item_gear_0335'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0336',
        title: 'Bounty Contract #336: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 37,
        targetFloor: 2,
        targetMonster: 'monster_0337',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 8500,
            experience: 17050,
            reputation: 26,
            itemId: 'item_gear_0336'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0337',
        title: 'Bounty Contract #337: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 38,
        targetFloor: 3,
        targetMonster: 'monster_0338',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 8525,
            experience: 17100,
            reputation: 27,
            itemId: 'item_gear_0337'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0338',
        title: 'Bounty Contract #338: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 39,
        targetFloor: 4,
        targetMonster: 'monster_0339',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 8550,
            experience: 17150,
            reputation: 28,
            itemId: 'item_gear_0338'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0339',
        title: 'Bounty Contract #339: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 40,
        targetFloor: 5,
        targetMonster: 'monster_0340',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 8575,
            experience: 17200,
            reputation: 29,
            itemId: 'item_gear_0339'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0340',
        title: 'Bounty Contract #340: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 41,
        targetFloor: 1,
        targetMonster: 'monster_0341',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 8600,
            experience: 17250,
            reputation: 10,
            itemId: 'item_gear_0340'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0341',
        title: 'Bounty Contract #341: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 42,
        targetFloor: 2,
        targetMonster: 'monster_0342',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 8625,
            experience: 17300,
            reputation: 11,
            itemId: 'item_gear_0341'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0342',
        title: 'Bounty Contract #342: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 43,
        targetFloor: 3,
        targetMonster: 'monster_0343',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 8650,
            experience: 17350,
            reputation: 12,
            itemId: 'item_gear_0342'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0343',
        title: 'Bounty Contract #343: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 44,
        targetFloor: 4,
        targetMonster: 'monster_0344',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 8675,
            experience: 17400,
            reputation: 13,
            itemId: 'item_gear_0343'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0344',
        title: 'Bounty Contract #344: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 45,
        targetFloor: 5,
        targetMonster: 'monster_0345',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 8700,
            experience: 17450,
            reputation: 14,
            itemId: 'item_gear_0344'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0345',
        title: 'Bounty Contract #345: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 46,
        targetFloor: 1,
        targetMonster: 'monster_0346',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 8725,
            experience: 17500,
            reputation: 15,
            itemId: 'item_gear_0345'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0346',
        title: 'Bounty Contract #346: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 47,
        targetFloor: 2,
        targetMonster: 'monster_0347',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 8750,
            experience: 17550,
            reputation: 16,
            itemId: 'item_gear_0346'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0347',
        title: 'Bounty Contract #347: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 48,
        targetFloor: 3,
        targetMonster: 'monster_0348',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 8775,
            experience: 17600,
            reputation: 17,
            itemId: 'item_gear_0347'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0348',
        title: 'Bounty Contract #348: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 49,
        targetFloor: 4,
        targetMonster: 'monster_0349',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 8800,
            experience: 17650,
            reputation: 18,
            itemId: 'item_gear_0348'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0349',
        title: 'Bounty Contract #349: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 50,
        targetFloor: 5,
        targetMonster: 'monster_0350',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 8825,
            experience: 17700,
            reputation: 19,
            itemId: 'item_gear_0349'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0350',
        title: 'Bounty Contract #350: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 1,
        targetFloor: 1,
        targetMonster: 'monster_0351',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 8850,
            experience: 17750,
            reputation: 20,
            itemId: 'item_gear_0350'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0351',
        title: 'Bounty Contract #351: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 2,
        targetFloor: 2,
        targetMonster: 'monster_0352',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 8875,
            experience: 17800,
            reputation: 21,
            itemId: 'item_gear_0351'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0352',
        title: 'Bounty Contract #352: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 3,
        targetFloor: 3,
        targetMonster: 'monster_0353',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 8900,
            experience: 17850,
            reputation: 22,
            itemId: 'item_gear_0352'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0353',
        title: 'Bounty Contract #353: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 4,
        targetFloor: 4,
        targetMonster: 'monster_0354',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 8925,
            experience: 17900,
            reputation: 23,
            itemId: 'item_gear_0353'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0354',
        title: 'Bounty Contract #354: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 5,
        targetFloor: 5,
        targetMonster: 'monster_0355',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 8950,
            experience: 17950,
            reputation: 24,
            itemId: 'item_gear_0354'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0355',
        title: 'Bounty Contract #355: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 6,
        targetFloor: 1,
        targetMonster: 'monster_0356',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 8975,
            experience: 18000,
            reputation: 25,
            itemId: 'item_gear_0355'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0356',
        title: 'Bounty Contract #356: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 7,
        targetFloor: 2,
        targetMonster: 'monster_0357',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 9000,
            experience: 18050,
            reputation: 26,
            itemId: 'item_gear_0356'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0357',
        title: 'Bounty Contract #357: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 8,
        targetFloor: 3,
        targetMonster: 'monster_0358',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 9025,
            experience: 18100,
            reputation: 27,
            itemId: 'item_gear_0357'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0358',
        title: 'Bounty Contract #358: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 9,
        targetFloor: 4,
        targetMonster: 'monster_0359',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 9050,
            experience: 18150,
            reputation: 28,
            itemId: 'item_gear_0358'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0359',
        title: 'Bounty Contract #359: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 10,
        targetFloor: 5,
        targetMonster: 'monster_0360',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 9075,
            experience: 18200,
            reputation: 29,
            itemId: 'item_gear_0359'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0360',
        title: 'Bounty Contract #360: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 11,
        targetFloor: 1,
        targetMonster: 'monster_0361',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 9100,
            experience: 18250,
            reputation: 10,
            itemId: 'item_gear_0360'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0361',
        title: 'Bounty Contract #361: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 12,
        targetFloor: 2,
        targetMonster: 'monster_0362',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 9125,
            experience: 18300,
            reputation: 11,
            itemId: 'item_gear_0361'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0362',
        title: 'Bounty Contract #362: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 13,
        targetFloor: 3,
        targetMonster: 'monster_0363',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 9150,
            experience: 18350,
            reputation: 12,
            itemId: 'item_gear_0362'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0363',
        title: 'Bounty Contract #363: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 14,
        targetFloor: 4,
        targetMonster: 'monster_0364',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 9175,
            experience: 18400,
            reputation: 13,
            itemId: 'item_gear_0363'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0364',
        title: 'Bounty Contract #364: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 15,
        targetFloor: 5,
        targetMonster: 'monster_0365',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 9200,
            experience: 18450,
            reputation: 14,
            itemId: 'item_gear_0364'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0365',
        title: 'Bounty Contract #365: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 16,
        targetFloor: 1,
        targetMonster: 'monster_0366',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 9225,
            experience: 18500,
            reputation: 15,
            itemId: 'item_gear_0365'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0366',
        title: 'Bounty Contract #366: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 17,
        targetFloor: 2,
        targetMonster: 'monster_0367',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 9250,
            experience: 18550,
            reputation: 16,
            itemId: 'item_gear_0366'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0367',
        title: 'Bounty Contract #367: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 18,
        targetFloor: 3,
        targetMonster: 'monster_0368',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 9275,
            experience: 18600,
            reputation: 17,
            itemId: 'item_gear_0367'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0368',
        title: 'Bounty Contract #368: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 19,
        targetFloor: 4,
        targetMonster: 'monster_0369',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 9300,
            experience: 18650,
            reputation: 18,
            itemId: 'item_gear_0368'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0369',
        title: 'Bounty Contract #369: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 20,
        targetFloor: 5,
        targetMonster: 'monster_0370',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 9325,
            experience: 18700,
            reputation: 19,
            itemId: 'item_gear_0369'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0370',
        title: 'Bounty Contract #370: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 21,
        targetFloor: 1,
        targetMonster: 'monster_0371',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 9350,
            experience: 18750,
            reputation: 20,
            itemId: 'item_gear_0370'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0371',
        title: 'Bounty Contract #371: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 22,
        targetFloor: 2,
        targetMonster: 'monster_0372',
        requiredCount: 4,
        currentProgress: 0,
        rewards: {
            gold: 9375,
            experience: 18800,
            reputation: 21,
            itemId: 'item_gear_0371'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0372',
        title: 'Bounty Contract #372: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 23,
        targetFloor: 3,
        targetMonster: 'monster_0373',
        requiredCount: 5,
        currentProgress: 0,
        rewards: {
            gold: 9400,
            experience: 18850,
            reputation: 22,
            itemId: 'item_gear_0372'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0373',
        title: 'Bounty Contract #373: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 24,
        targetFloor: 4,
        targetMonster: 'monster_0374',
        requiredCount: 6,
        currentProgress: 0,
        rewards: {
            gold: 9425,
            experience: 18900,
            reputation: 23,
            itemId: 'item_gear_0373'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0374',
        title: 'Bounty Contract #374: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 25,
        targetFloor: 5,
        targetMonster: 'monster_0375',
        requiredCount: 7,
        currentProgress: 0,
        rewards: {
            gold: 9450,
            experience: 18950,
            reputation: 24,
            itemId: 'item_gear_0374'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0375',
        title: 'Bounty Contract #375: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 26,
        targetFloor: 1,
        targetMonster: 'monster_0376',
        requiredCount: 8,
        currentProgress: 0,
        rewards: {
            gold: 9475,
            experience: 19000,
            reputation: 25,
            itemId: 'item_gear_0375'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0376',
        title: 'Bounty Contract #376: Expedition into The Obsidian Crypt',
        type: QUEST_TYPES.EXPLORATION,
        recommendedLevel: 27,
        targetFloor: 2,
        targetMonster: 'monster_0377',
        requiredCount: 9,
        currentProgress: 0,
        rewards: {
            gold: 9500,
            experience: 19050,
            reputation: 26,
            itemId: 'item_gear_0376'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Obsidian Crypt. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0377',
        title: 'Bounty Contract #377: Expedition into The Whispering Sanctum',
        type: QUEST_TYPES.COLLECTION,
        recommendedLevel: 28,
        targetFloor: 3,
        targetMonster: 'monster_0378',
        requiredCount: 10,
        currentProgress: 0,
        rewards: {
            gold: 9525,
            experience: 19100,
            reputation: 27,
            itemId: 'item_gear_0377'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Whispering Sanctum. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0378',
        title: 'Bounty Contract #378: Expedition into The Shattered Core',
        type: QUEST_TYPES.BOSS_HUNT,
        recommendedLevel: 29,
        targetFloor: 4,
        targetMonster: 'monster_0379',
        requiredCount: 11,
        currentProgress: 0,
        rewards: {
            gold: 9550,
            experience: 19150,
            reputation: 28,
            itemId: 'item_gear_0378'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Shattered Core. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0379',
        title: 'Bounty Contract #379: Expedition into The Abyssal Rift',
        type: QUEST_TYPES.SURVIVAL,
        recommendedLevel: 30,
        targetFloor: 5,
        targetMonster: 'monster_0380',
        requiredCount: 12,
        currentProgress: 0,
        rewards: {
            gold: 9575,
            experience: 19200,
            reputation: 29,
            itemId: 'item_gear_0379'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Abyssal Rift. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
    {
        id: 'quest_mission_0380',
        title: 'Bounty Contract #380: Expedition into The Sunken Vaults',
        type: QUEST_TYPES.ELIMINATION,
        recommendedLevel: 31,
        targetFloor: 1,
        targetMonster: 'monster_0381',
        requiredCount: 3,
        currentProgress: 0,
        rewards: {
            gold: 9600,
            experience: 19250,
            reputation: 10,
            itemId: 'item_gear_0380'
        },
        dialogue: {
            giver: 'Guild Master Vance',
            introText: 'We have received reports of disturbances in The Sunken Vaults. Scout the perimeter and clear all hostiles.',
            completionText: 'Outstanding work, explorer. Here is your contracted reward from the Guild coffers.',
            reminderText: 'Do not delay your mission. The safety of the outpost depends on your speed.'
        },
        isCompleted: false,
        isActive: false
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUEST_TYPES, QUESTS_DATABASE };
}
