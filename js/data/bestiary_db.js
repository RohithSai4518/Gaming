/**
 * Chamber Crawler - Comprehensive Bestiary & Monster Database
 * Monster stat tables, AI behavior configs, elemental resistances, and drop rates.
 */
const MONSTER_CATEGORIES = {
    BEAST: 'beast',
    UNDEAD: 'undead',
    CONSTRUCT: 'construct',
    DEMON: 'demon',
    ELEMENTAL: 'elemental',
    ABERRATION: 'aberration',
    BOSS: 'boss'
};

const BESTIARY_DATABASE = [
    {
        id: 'monster_0001',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 2,
        maxHp: 125,
        baseDamage: 19,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 66,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0001', chance: 0.25 },
            { itemId: 'item_gear_0001', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0002',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 3,
        maxHp: 165,
        baseDamage: 24,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 80,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0001', chance: 0.25 },
            { itemId: 'item_gear_0002', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0003',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 4,
        maxHp: 205,
        baseDamage: 29,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 94,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0002', chance: 0.25 },
            { itemId: 'item_gear_0003', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0004',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 5,
        maxHp: 245,
        baseDamage: 34,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 108,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0003', chance: 0.25 },
            { itemId: 'item_gear_0004', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0005',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 6,
        maxHp: 285,
        baseDamage: 39,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 122,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0004', chance: 0.25 },
            { itemId: 'item_gear_0005', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0006',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 7,
        maxHp: 325,
        baseDamage: 44,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 136,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0005', chance: 0.25 },
            { itemId: 'item_gear_0006', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0007',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 8,
        maxHp: 365,
        baseDamage: 49,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 150,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0006', chance: 0.25 },
            { itemId: 'item_gear_0007', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0008',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 9,
        maxHp: 405,
        baseDamage: 54,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 164,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0007', chance: 0.25 },
            { itemId: 'item_gear_0008', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0009',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 10,
        maxHp: 445,
        baseDamage: 59,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 178,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0008', chance: 0.25 },
            { itemId: 'item_gear_0009', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0010',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 11,
        maxHp: 485,
        baseDamage: 64,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 192,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0009', chance: 0.25 },
            { itemId: 'item_gear_0010', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0011',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 12,
        maxHp: 525,
        baseDamage: 69,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 206,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0010', chance: 0.25 },
            { itemId: 'item_gear_0011', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0012',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 13,
        maxHp: 565,
        baseDamage: 74,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 220,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0011', chance: 0.25 },
            { itemId: 'item_gear_0012', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0013',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 14,
        maxHp: 605,
        baseDamage: 79,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 234,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0012', chance: 0.25 },
            { itemId: 'item_gear_0013', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0014',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 15,
        maxHp: 645,
        baseDamage: 84,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 248,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0013', chance: 0.25 },
            { itemId: 'item_gear_0014', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0015',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 16,
        maxHp: 685,
        baseDamage: 74,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 262,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0014', chance: 0.25 },
            { itemId: 'item_gear_0015', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0016',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 17,
        maxHp: 725,
        baseDamage: 79,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 276,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0015', chance: 0.25 },
            { itemId: 'item_gear_0016', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0017',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 18,
        maxHp: 765,
        baseDamage: 84,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 290,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0016', chance: 0.25 },
            { itemId: 'item_gear_0017', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0018',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 19,
        maxHp: 805,
        baseDamage: 89,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 304,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0017', chance: 0.25 },
            { itemId: 'item_gear_0018', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0019',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 20,
        maxHp: 845,
        baseDamage: 94,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 318,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0018', chance: 0.25 },
            { itemId: 'item_gear_0019', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0020',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 21,
        maxHp: 885,
        baseDamage: 99,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 332,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0019', chance: 0.25 },
            { itemId: 'item_gear_0020', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0021',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 22,
        maxHp: 925,
        baseDamage: 104,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 346,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0020', chance: 0.25 },
            { itemId: 'item_gear_0021', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0022',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 23,
        maxHp: 965,
        baseDamage: 109,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 360,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0021', chance: 0.25 },
            { itemId: 'item_gear_0022', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0023',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 24,
        maxHp: 1005,
        baseDamage: 114,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 374,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0022', chance: 0.25 },
            { itemId: 'item_gear_0023', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0024',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 25,
        maxHp: 1045,
        baseDamage: 119,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 388,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0023', chance: 0.25 },
            { itemId: 'item_gear_0024', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0025',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 26,
        maxHp: 1085,
        baseDamage: 124,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 402,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0024', chance: 0.25 },
            { itemId: 'item_gear_0025', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0026',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 27,
        maxHp: 1125,
        baseDamage: 129,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 416,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0025', chance: 0.25 },
            { itemId: 'item_gear_0026', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0027',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 28,
        maxHp: 1165,
        baseDamage: 134,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 430,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0026', chance: 0.25 },
            { itemId: 'item_gear_0027', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0028',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 29,
        maxHp: 1205,
        baseDamage: 139,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 444,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0027', chance: 0.25 },
            { itemId: 'item_gear_0028', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0029',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 30,
        maxHp: 1245,
        baseDamage: 144,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 458,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0028', chance: 0.25 },
            { itemId: 'item_gear_0029', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0030',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 31,
        maxHp: 1285,
        baseDamage: 134,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 472,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0029', chance: 0.25 },
            { itemId: 'item_gear_0030', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0031',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 32,
        maxHp: 1325,
        baseDamage: 139,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 486,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0030', chance: 0.25 },
            { itemId: 'item_gear_0031', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0032',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 33,
        maxHp: 1365,
        baseDamage: 144,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 500,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0031', chance: 0.25 },
            { itemId: 'item_gear_0032', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0033',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 34,
        maxHp: 1405,
        baseDamage: 149,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 514,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0032', chance: 0.25 },
            { itemId: 'item_gear_0033', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0034',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 35,
        maxHp: 1445,
        baseDamage: 154,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 528,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0033', chance: 0.25 },
            { itemId: 'item_gear_0034', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0035',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 36,
        maxHp: 1485,
        baseDamage: 159,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 542,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0034', chance: 0.25 },
            { itemId: 'item_gear_0035', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0036',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 37,
        maxHp: 1525,
        baseDamage: 164,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 556,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0035', chance: 0.25 },
            { itemId: 'item_gear_0036', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0037',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 38,
        maxHp: 1565,
        baseDamage: 169,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 570,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0036', chance: 0.25 },
            { itemId: 'item_gear_0037', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0038',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 39,
        maxHp: 1605,
        baseDamage: 174,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 584,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0037', chance: 0.25 },
            { itemId: 'item_gear_0038', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0039',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 40,
        maxHp: 1645,
        baseDamage: 179,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 598,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0038', chance: 0.25 },
            { itemId: 'item_gear_0039', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0040',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 41,
        maxHp: 1485,
        baseDamage: 184,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 612,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0039', chance: 0.25 },
            { itemId: 'item_gear_0040', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0041',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 42,
        maxHp: 1525,
        baseDamage: 189,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 626,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0040', chance: 0.25 },
            { itemId: 'item_gear_0041', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0042',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 43,
        maxHp: 1565,
        baseDamage: 194,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 640,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0041', chance: 0.25 },
            { itemId: 'item_gear_0042', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0043',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 44,
        maxHp: 1605,
        baseDamage: 199,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 654,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0042', chance: 0.25 },
            { itemId: 'item_gear_0043', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0044',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 45,
        maxHp: 1645,
        baseDamage: 204,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 668,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0043', chance: 0.25 },
            { itemId: 'item_gear_0044', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0045',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 46,
        maxHp: 1685,
        baseDamage: 194,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 682,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0044', chance: 0.25 },
            { itemId: 'item_gear_0045', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0046',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 47,
        maxHp: 1725,
        baseDamage: 199,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 696,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0045', chance: 0.25 },
            { itemId: 'item_gear_0046', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0047',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 48,
        maxHp: 1765,
        baseDamage: 204,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 710,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0046', chance: 0.25 },
            { itemId: 'item_gear_0047', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0048',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 49,
        maxHp: 1805,
        baseDamage: 209,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 724,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0047', chance: 0.25 },
            { itemId: 'item_gear_0048', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0049',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 50,
        maxHp: 1845,
        baseDamage: 214,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 738,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0048', chance: 0.25 },
            { itemId: 'item_gear_0049', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0050',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 1,
        maxHp: 135,
        baseDamage: 19,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 152,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0049', chance: 0.25 },
            { itemId: 'item_gear_0050', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0051',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 2,
        maxHp: 175,
        baseDamage: 24,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 166,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0050', chance: 0.25 },
            { itemId: 'item_gear_0051', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0052',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 3,
        maxHp: 215,
        baseDamage: 29,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 180,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0051', chance: 0.25 },
            { itemId: 'item_gear_0052', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0053',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 4,
        maxHp: 255,
        baseDamage: 34,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 194,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0052', chance: 0.25 },
            { itemId: 'item_gear_0053', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0054',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 5,
        maxHp: 295,
        baseDamage: 39,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 208,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0053', chance: 0.25 },
            { itemId: 'item_gear_0054', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0055',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 6,
        maxHp: 335,
        baseDamage: 44,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 222,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0054', chance: 0.25 },
            { itemId: 'item_gear_0055', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0056',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 7,
        maxHp: 375,
        baseDamage: 49,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 236,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0055', chance: 0.25 },
            { itemId: 'item_gear_0056', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0057',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 8,
        maxHp: 415,
        baseDamage: 54,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 250,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0056', chance: 0.25 },
            { itemId: 'item_gear_0057', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0058',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 9,
        maxHp: 455,
        baseDamage: 59,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 264,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0057', chance: 0.25 },
            { itemId: 'item_gear_0058', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0059',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 10,
        maxHp: 495,
        baseDamage: 64,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 278,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0058', chance: 0.25 },
            { itemId: 'item_gear_0059', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0060',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 11,
        maxHp: 535,
        baseDamage: 54,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 292,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0059', chance: 0.25 },
            { itemId: 'item_gear_0060', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0061',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 12,
        maxHp: 575,
        baseDamage: 59,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 306,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0060', chance: 0.25 },
            { itemId: 'item_gear_0061', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0062',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 13,
        maxHp: 615,
        baseDamage: 64,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 320,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0061', chance: 0.25 },
            { itemId: 'item_gear_0062', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0063',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 14,
        maxHp: 655,
        baseDamage: 69,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 334,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0062', chance: 0.25 },
            { itemId: 'item_gear_0063', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0064',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 15,
        maxHp: 695,
        baseDamage: 74,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 348,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0063', chance: 0.25 },
            { itemId: 'item_gear_0064', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0065',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 16,
        maxHp: 735,
        baseDamage: 79,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 362,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0064', chance: 0.25 },
            { itemId: 'item_gear_0065', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0066',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 17,
        maxHp: 775,
        baseDamage: 84,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 376,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0065', chance: 0.25 },
            { itemId: 'item_gear_0066', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0067',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 18,
        maxHp: 815,
        baseDamage: 89,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 390,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0066', chance: 0.25 },
            { itemId: 'item_gear_0067', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0068',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 19,
        maxHp: 855,
        baseDamage: 94,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 404,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0067', chance: 0.25 },
            { itemId: 'item_gear_0068', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0069',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 20,
        maxHp: 895,
        baseDamage: 99,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 418,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0068', chance: 0.25 },
            { itemId: 'item_gear_0069', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0070',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 21,
        maxHp: 935,
        baseDamage: 104,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 432,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0069', chance: 0.25 },
            { itemId: 'item_gear_0070', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0071',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 22,
        maxHp: 975,
        baseDamage: 109,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 446,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0070', chance: 0.25 },
            { itemId: 'item_gear_0071', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0072',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 23,
        maxHp: 1015,
        baseDamage: 114,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 460,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0071', chance: 0.25 },
            { itemId: 'item_gear_0072', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0073',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 24,
        maxHp: 1055,
        baseDamage: 119,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 474,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0072', chance: 0.25 },
            { itemId: 'item_gear_0073', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0074',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 25,
        maxHp: 1095,
        baseDamage: 124,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 488,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0073', chance: 0.25 },
            { itemId: 'item_gear_0074', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0075',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 26,
        maxHp: 1135,
        baseDamage: 114,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 502,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0074', chance: 0.25 },
            { itemId: 'item_gear_0075', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0076',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 27,
        maxHp: 1175,
        baseDamage: 119,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 516,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0075', chance: 0.25 },
            { itemId: 'item_gear_0076', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0077',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 28,
        maxHp: 1215,
        baseDamage: 124,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 530,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0076', chance: 0.25 },
            { itemId: 'item_gear_0077', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0078',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 29,
        maxHp: 1255,
        baseDamage: 129,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 544,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0077', chance: 0.25 },
            { itemId: 'item_gear_0078', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0079',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 30,
        maxHp: 1295,
        baseDamage: 134,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 558,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0078', chance: 0.25 },
            { itemId: 'item_gear_0079', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0080',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 31,
        maxHp: 1135,
        baseDamage: 139,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 572,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0079', chance: 0.25 },
            { itemId: 'item_gear_0080', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0081',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 32,
        maxHp: 1175,
        baseDamage: 144,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 586,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0080', chance: 0.25 },
            { itemId: 'item_gear_0081', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0082',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 33,
        maxHp: 1215,
        baseDamage: 149,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 600,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0081', chance: 0.25 },
            { itemId: 'item_gear_0082', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0083',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 34,
        maxHp: 1255,
        baseDamage: 154,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 614,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0082', chance: 0.25 },
            { itemId: 'item_gear_0083', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0084',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 35,
        maxHp: 1295,
        baseDamage: 159,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 628,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0083', chance: 0.25 },
            { itemId: 'item_gear_0084', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0085',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 36,
        maxHp: 1335,
        baseDamage: 164,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 642,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0084', chance: 0.25 },
            { itemId: 'item_gear_0085', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0086',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 37,
        maxHp: 1375,
        baseDamage: 169,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 656,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0085', chance: 0.25 },
            { itemId: 'item_gear_0086', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0087',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 38,
        maxHp: 1415,
        baseDamage: 174,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 670,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0086', chance: 0.25 },
            { itemId: 'item_gear_0087', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0088',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 39,
        maxHp: 1455,
        baseDamage: 179,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 684,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0087', chance: 0.25 },
            { itemId: 'item_gear_0088', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0089',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 40,
        maxHp: 1495,
        baseDamage: 184,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 698,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0088', chance: 0.25 },
            { itemId: 'item_gear_0089', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0090',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 41,
        maxHp: 1535,
        baseDamage: 174,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 712,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0089', chance: 0.25 },
            { itemId: 'item_gear_0090', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0091',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 42,
        maxHp: 1575,
        baseDamage: 179,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 726,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0090', chance: 0.25 },
            { itemId: 'item_gear_0091', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0092',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 43,
        maxHp: 1615,
        baseDamage: 184,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 740,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0091', chance: 0.25 },
            { itemId: 'item_gear_0092', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0093',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 44,
        maxHp: 1655,
        baseDamage: 189,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 754,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0092', chance: 0.25 },
            { itemId: 'item_gear_0093', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0094',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 45,
        maxHp: 1695,
        baseDamage: 194,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 768,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0093', chance: 0.25 },
            { itemId: 'item_gear_0094', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0095',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 46,
        maxHp: 1735,
        baseDamage: 199,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 782,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0094', chance: 0.25 },
            { itemId: 'item_gear_0095', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0096',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 47,
        maxHp: 1775,
        baseDamage: 204,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 796,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0095', chance: 0.25 },
            { itemId: 'item_gear_0096', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0097',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 48,
        maxHp: 1815,
        baseDamage: 209,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 810,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0096', chance: 0.25 },
            { itemId: 'item_gear_0097', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0098',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 49,
        maxHp: 1855,
        baseDamage: 214,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 824,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0097', chance: 0.25 },
            { itemId: 'item_gear_0098', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0099',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 50,
        maxHp: 1895,
        baseDamage: 219,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 838,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0098', chance: 0.25 },
            { itemId: 'item_gear_0099', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0100',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 1,
        maxHp: 185,
        baseDamage: 24,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 252,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0099', chance: 0.25 },
            { itemId: 'item_gear_0100', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0101',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 2,
        maxHp: 225,
        baseDamage: 29,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 266,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0100', chance: 0.25 },
            { itemId: 'item_gear_0101', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0102',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 3,
        maxHp: 265,
        baseDamage: 34,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 280,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0101', chance: 0.25 },
            { itemId: 'item_gear_0102', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0103',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 4,
        maxHp: 305,
        baseDamage: 39,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 294,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0102', chance: 0.25 },
            { itemId: 'item_gear_0103', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0104',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 5,
        maxHp: 345,
        baseDamage: 44,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 308,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0103', chance: 0.25 },
            { itemId: 'item_gear_0104', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0105',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 6,
        maxHp: 385,
        baseDamage: 34,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 322,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0104', chance: 0.25 },
            { itemId: 'item_gear_0105', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0106',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 7,
        maxHp: 425,
        baseDamage: 39,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 336,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0105', chance: 0.25 },
            { itemId: 'item_gear_0106', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0107',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 8,
        maxHp: 465,
        baseDamage: 44,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 350,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0106', chance: 0.25 },
            { itemId: 'item_gear_0107', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0108',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 9,
        maxHp: 505,
        baseDamage: 49,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 364,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0107', chance: 0.25 },
            { itemId: 'item_gear_0108', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0109',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 10,
        maxHp: 545,
        baseDamage: 54,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 378,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0108', chance: 0.25 },
            { itemId: 'item_gear_0109', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0110',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 11,
        maxHp: 585,
        baseDamage: 59,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 392,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0109', chance: 0.25 },
            { itemId: 'item_gear_0110', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0111',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 12,
        maxHp: 625,
        baseDamage: 64,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 406,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0110', chance: 0.25 },
            { itemId: 'item_gear_0111', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0112',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 13,
        maxHp: 665,
        baseDamage: 69,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 420,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0111', chance: 0.25 },
            { itemId: 'item_gear_0112', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0113',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 14,
        maxHp: 705,
        baseDamage: 74,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 434,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0112', chance: 0.25 },
            { itemId: 'item_gear_0113', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0114',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 15,
        maxHp: 745,
        baseDamage: 79,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 448,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0113', chance: 0.25 },
            { itemId: 'item_gear_0114', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0115',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 16,
        maxHp: 785,
        baseDamage: 84,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 462,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0114', chance: 0.25 },
            { itemId: 'item_gear_0115', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0116',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 17,
        maxHp: 825,
        baseDamage: 89,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 476,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0115', chance: 0.25 },
            { itemId: 'item_gear_0116', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0117',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 18,
        maxHp: 865,
        baseDamage: 94,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 490,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0116', chance: 0.25 },
            { itemId: 'item_gear_0117', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0118',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 19,
        maxHp: 905,
        baseDamage: 99,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 504,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0117', chance: 0.25 },
            { itemId: 'item_gear_0118', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0119',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 20,
        maxHp: 945,
        baseDamage: 104,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 518,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0118', chance: 0.25 },
            { itemId: 'item_gear_0119', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0120',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 21,
        maxHp: 785,
        baseDamage: 94,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 532,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0119', chance: 0.25 },
            { itemId: 'item_gear_0120', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0121',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 22,
        maxHp: 825,
        baseDamage: 99,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 546,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0120', chance: 0.25 },
            { itemId: 'item_gear_0121', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0122',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 23,
        maxHp: 865,
        baseDamage: 104,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 560,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0121', chance: 0.25 },
            { itemId: 'item_gear_0122', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0123',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 24,
        maxHp: 905,
        baseDamage: 109,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 574,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0122', chance: 0.25 },
            { itemId: 'item_gear_0123', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0124',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 25,
        maxHp: 945,
        baseDamage: 114,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 588,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0123', chance: 0.25 },
            { itemId: 'item_gear_0124', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0125',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 26,
        maxHp: 985,
        baseDamage: 119,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 602,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0124', chance: 0.25 },
            { itemId: 'item_gear_0125', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0126',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 27,
        maxHp: 1025,
        baseDamage: 124,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 616,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0125', chance: 0.25 },
            { itemId: 'item_gear_0126', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0127',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 28,
        maxHp: 1065,
        baseDamage: 129,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 630,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0126', chance: 0.25 },
            { itemId: 'item_gear_0127', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0128',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 29,
        maxHp: 1105,
        baseDamage: 134,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 644,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0127', chance: 0.25 },
            { itemId: 'item_gear_0128', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0129',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 30,
        maxHp: 1145,
        baseDamage: 139,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 658,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0128', chance: 0.25 },
            { itemId: 'item_gear_0129', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0130',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 31,
        maxHp: 1185,
        baseDamage: 144,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 672,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0129', chance: 0.25 },
            { itemId: 'item_gear_0130', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0131',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 32,
        maxHp: 1225,
        baseDamage: 149,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 686,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0130', chance: 0.25 },
            { itemId: 'item_gear_0131', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0132',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 33,
        maxHp: 1265,
        baseDamage: 154,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 700,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0131', chance: 0.25 },
            { itemId: 'item_gear_0132', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0133',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 34,
        maxHp: 1305,
        baseDamage: 159,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 714,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0132', chance: 0.25 },
            { itemId: 'item_gear_0133', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0134',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 35,
        maxHp: 1345,
        baseDamage: 164,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 728,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0133', chance: 0.25 },
            { itemId: 'item_gear_0134', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0135',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 36,
        maxHp: 1385,
        baseDamage: 154,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 742,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0134', chance: 0.25 },
            { itemId: 'item_gear_0135', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0136',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 37,
        maxHp: 1425,
        baseDamage: 159,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 756,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0135', chance: 0.25 },
            { itemId: 'item_gear_0136', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0137',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 38,
        maxHp: 1465,
        baseDamage: 164,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 770,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0136', chance: 0.25 },
            { itemId: 'item_gear_0137', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0138',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 39,
        maxHp: 1505,
        baseDamage: 169,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 784,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0137', chance: 0.25 },
            { itemId: 'item_gear_0138', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0139',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 40,
        maxHp: 1545,
        baseDamage: 174,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 798,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0138', chance: 0.25 },
            { itemId: 'item_gear_0139', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0140',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 41,
        maxHp: 1585,
        baseDamage: 179,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 812,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0139', chance: 0.25 },
            { itemId: 'item_gear_0140', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0141',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 42,
        maxHp: 1625,
        baseDamage: 184,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 826,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0140', chance: 0.25 },
            { itemId: 'item_gear_0141', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0142',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 43,
        maxHp: 1665,
        baseDamage: 189,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 840,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0141', chance: 0.25 },
            { itemId: 'item_gear_0142', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0143',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 44,
        maxHp: 1705,
        baseDamage: 194,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 854,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0142', chance: 0.25 },
            { itemId: 'item_gear_0143', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0144',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 45,
        maxHp: 1745,
        baseDamage: 199,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 868,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0143', chance: 0.25 },
            { itemId: 'item_gear_0144', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0145',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 46,
        maxHp: 1785,
        baseDamage: 204,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 882,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0144', chance: 0.25 },
            { itemId: 'item_gear_0145', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0146',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 47,
        maxHp: 1825,
        baseDamage: 209,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 896,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0145', chance: 0.25 },
            { itemId: 'item_gear_0146', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0147',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 48,
        maxHp: 1865,
        baseDamage: 214,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 910,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0146', chance: 0.25 },
            { itemId: 'item_gear_0147', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0148',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 49,
        maxHp: 1905,
        baseDamage: 219,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 924,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0147', chance: 0.25 },
            { itemId: 'item_gear_0148', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0149',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 50,
        maxHp: 1945,
        baseDamage: 224,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 938,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0148', chance: 0.25 },
            { itemId: 'item_gear_0149', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0150',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 1,
        maxHp: 235,
        baseDamage: 14,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 352,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0149', chance: 0.25 },
            { itemId: 'item_gear_0150', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0151',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 2,
        maxHp: 275,
        baseDamage: 19,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 366,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0150', chance: 0.25 },
            { itemId: 'item_gear_0151', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0152',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 3,
        maxHp: 315,
        baseDamage: 24,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 380,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0151', chance: 0.25 },
            { itemId: 'item_gear_0152', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0153',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 4,
        maxHp: 355,
        baseDamage: 29,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 394,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0152', chance: 0.25 },
            { itemId: 'item_gear_0153', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0154',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 5,
        maxHp: 395,
        baseDamage: 34,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 408,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0153', chance: 0.25 },
            { itemId: 'item_gear_0154', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0155',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 6,
        maxHp: 435,
        baseDamage: 39,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 422,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0154', chance: 0.25 },
            { itemId: 'item_gear_0155', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0156',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 7,
        maxHp: 475,
        baseDamage: 44,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 436,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0155', chance: 0.25 },
            { itemId: 'item_gear_0156', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0157',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 8,
        maxHp: 515,
        baseDamage: 49,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 450,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0156', chance: 0.25 },
            { itemId: 'item_gear_0157', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0158',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 9,
        maxHp: 555,
        baseDamage: 54,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 464,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0157', chance: 0.25 },
            { itemId: 'item_gear_0158', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0159',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 10,
        maxHp: 595,
        baseDamage: 59,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 478,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0158', chance: 0.25 },
            { itemId: 'item_gear_0159', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0160',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 11,
        maxHp: 435,
        baseDamage: 64,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 492,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0159', chance: 0.25 },
            { itemId: 'item_gear_0160', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0161',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 12,
        maxHp: 475,
        baseDamage: 69,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 506,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0160', chance: 0.25 },
            { itemId: 'item_gear_0161', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0162',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 13,
        maxHp: 515,
        baseDamage: 74,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 520,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0161', chance: 0.25 },
            { itemId: 'item_gear_0162', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0163',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 14,
        maxHp: 555,
        baseDamage: 79,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 534,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0162', chance: 0.25 },
            { itemId: 'item_gear_0163', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0164',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 15,
        maxHp: 595,
        baseDamage: 84,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 548,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0163', chance: 0.25 },
            { itemId: 'item_gear_0164', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0165',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 16,
        maxHp: 635,
        baseDamage: 74,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 562,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0164', chance: 0.25 },
            { itemId: 'item_gear_0165', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0166',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 17,
        maxHp: 675,
        baseDamage: 79,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 576,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0165', chance: 0.25 },
            { itemId: 'item_gear_0166', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0167',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 18,
        maxHp: 715,
        baseDamage: 84,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 590,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0166', chance: 0.25 },
            { itemId: 'item_gear_0167', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0168',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 19,
        maxHp: 755,
        baseDamage: 89,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 604,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0167', chance: 0.25 },
            { itemId: 'item_gear_0168', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0169',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 20,
        maxHp: 795,
        baseDamage: 94,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 618,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0168', chance: 0.25 },
            { itemId: 'item_gear_0169', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0170',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 21,
        maxHp: 835,
        baseDamage: 99,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 632,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0169', chance: 0.25 },
            { itemId: 'item_gear_0170', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0171',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 22,
        maxHp: 875,
        baseDamage: 104,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 646,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0170', chance: 0.25 },
            { itemId: 'item_gear_0171', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0172',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 23,
        maxHp: 915,
        baseDamage: 109,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 660,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0171', chance: 0.25 },
            { itemId: 'item_gear_0172', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0173',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 24,
        maxHp: 955,
        baseDamage: 114,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 674,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0172', chance: 0.25 },
            { itemId: 'item_gear_0173', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0174',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 25,
        maxHp: 995,
        baseDamage: 119,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 688,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0173', chance: 0.25 },
            { itemId: 'item_gear_0174', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0175',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 26,
        maxHp: 1035,
        baseDamage: 124,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 702,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0174', chance: 0.25 },
            { itemId: 'item_gear_0175', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0176',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 27,
        maxHp: 1075,
        baseDamage: 129,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 716,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0175', chance: 0.25 },
            { itemId: 'item_gear_0176', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0177',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 28,
        maxHp: 1115,
        baseDamage: 134,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 730,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0176', chance: 0.25 },
            { itemId: 'item_gear_0177', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0178',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 29,
        maxHp: 1155,
        baseDamage: 139,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 744,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0177', chance: 0.25 },
            { itemId: 'item_gear_0178', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0179',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 30,
        maxHp: 1195,
        baseDamage: 144,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 758,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0178', chance: 0.25 },
            { itemId: 'item_gear_0179', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0180',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 31,
        maxHp: 1235,
        baseDamage: 134,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 772,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0179', chance: 0.25 },
            { itemId: 'item_gear_0180', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0181',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 32,
        maxHp: 1275,
        baseDamage: 139,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 786,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0180', chance: 0.25 },
            { itemId: 'item_gear_0181', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0182',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 33,
        maxHp: 1315,
        baseDamage: 144,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 800,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0181', chance: 0.25 },
            { itemId: 'item_gear_0182', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0183',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 34,
        maxHp: 1355,
        baseDamage: 149,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 814,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0182', chance: 0.25 },
            { itemId: 'item_gear_0183', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0184',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 35,
        maxHp: 1395,
        baseDamage: 154,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 828,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0183', chance: 0.25 },
            { itemId: 'item_gear_0184', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0185',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 36,
        maxHp: 1435,
        baseDamage: 159,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 842,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0184', chance: 0.25 },
            { itemId: 'item_gear_0185', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0186',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 37,
        maxHp: 1475,
        baseDamage: 164,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 856,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0185', chance: 0.25 },
            { itemId: 'item_gear_0186', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0187',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 38,
        maxHp: 1515,
        baseDamage: 169,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 870,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0186', chance: 0.25 },
            { itemId: 'item_gear_0187', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0188',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 39,
        maxHp: 1555,
        baseDamage: 174,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 884,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0187', chance: 0.25 },
            { itemId: 'item_gear_0188', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0189',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 40,
        maxHp: 1595,
        baseDamage: 179,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 898,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0188', chance: 0.25 },
            { itemId: 'item_gear_0189', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0190',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 41,
        maxHp: 1635,
        baseDamage: 184,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 912,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0189', chance: 0.25 },
            { itemId: 'item_gear_0190', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0191',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 42,
        maxHp: 1675,
        baseDamage: 189,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 926,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0190', chance: 0.25 },
            { itemId: 'item_gear_0191', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0192',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 43,
        maxHp: 1715,
        baseDamage: 194,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 940,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0191', chance: 0.25 },
            { itemId: 'item_gear_0192', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0193',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 44,
        maxHp: 1755,
        baseDamage: 199,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 954,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0192', chance: 0.25 },
            { itemId: 'item_gear_0193', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0194',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 45,
        maxHp: 1795,
        baseDamage: 204,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 968,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0193', chance: 0.25 },
            { itemId: 'item_gear_0194', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0195',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 46,
        maxHp: 1835,
        baseDamage: 194,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 982,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0194', chance: 0.25 },
            { itemId: 'item_gear_0195', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0196',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 47,
        maxHp: 1875,
        baseDamage: 199,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 996,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0195', chance: 0.25 },
            { itemId: 'item_gear_0196', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0197',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 48,
        maxHp: 1915,
        baseDamage: 204,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 1010,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0196', chance: 0.25 },
            { itemId: 'item_gear_0197', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0198',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 49,
        maxHp: 1955,
        baseDamage: 209,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 1024,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0197', chance: 0.25 },
            { itemId: 'item_gear_0198', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0199',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 50,
        maxHp: 1995,
        baseDamage: 214,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 1038,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0198', chance: 0.25 },
            { itemId: 'item_gear_0199', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0200',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 1,
        maxHp: 85,
        baseDamage: 19,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 452,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0199', chance: 0.25 },
            { itemId: 'item_gear_0200', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0201',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 2,
        maxHp: 125,
        baseDamage: 24,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 466,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0200', chance: 0.25 },
            { itemId: 'item_gear_0201', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0202',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 3,
        maxHp: 165,
        baseDamage: 29,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 480,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0201', chance: 0.25 },
            { itemId: 'item_gear_0202', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0203',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 4,
        maxHp: 205,
        baseDamage: 34,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 494,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0202', chance: 0.25 },
            { itemId: 'item_gear_0203', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0204',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 5,
        maxHp: 245,
        baseDamage: 39,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 508,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0203', chance: 0.25 },
            { itemId: 'item_gear_0204', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0205',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 6,
        maxHp: 285,
        baseDamage: 44,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 522,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0204', chance: 0.25 },
            { itemId: 'item_gear_0205', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0206',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 7,
        maxHp: 325,
        baseDamage: 49,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 536,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0205', chance: 0.25 },
            { itemId: 'item_gear_0206', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0207',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 8,
        maxHp: 365,
        baseDamage: 54,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 550,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0206', chance: 0.25 },
            { itemId: 'item_gear_0207', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0208',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 9,
        maxHp: 405,
        baseDamage: 59,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 564,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0207', chance: 0.25 },
            { itemId: 'item_gear_0208', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0209',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 10,
        maxHp: 445,
        baseDamage: 64,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 578,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0208', chance: 0.25 },
            { itemId: 'item_gear_0209', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0210',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 11,
        maxHp: 485,
        baseDamage: 54,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 592,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0209', chance: 0.25 },
            { itemId: 'item_gear_0210', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0211',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 12,
        maxHp: 525,
        baseDamage: 59,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 606,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0210', chance: 0.25 },
            { itemId: 'item_gear_0211', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0212',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 13,
        maxHp: 565,
        baseDamage: 64,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 620,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0211', chance: 0.25 },
            { itemId: 'item_gear_0212', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0213',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 14,
        maxHp: 605,
        baseDamage: 69,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 634,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0212', chance: 0.25 },
            { itemId: 'item_gear_0213', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0214',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 15,
        maxHp: 645,
        baseDamage: 74,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 648,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0213', chance: 0.25 },
            { itemId: 'item_gear_0214', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0215',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 16,
        maxHp: 685,
        baseDamage: 79,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 662,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0214', chance: 0.25 },
            { itemId: 'item_gear_0215', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0216',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 17,
        maxHp: 725,
        baseDamage: 84,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 676,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0215', chance: 0.25 },
            { itemId: 'item_gear_0216', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0217',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 18,
        maxHp: 765,
        baseDamage: 89,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 690,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0216', chance: 0.25 },
            { itemId: 'item_gear_0217', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0218',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 19,
        maxHp: 805,
        baseDamage: 94,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 704,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0217', chance: 0.25 },
            { itemId: 'item_gear_0218', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0219',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 20,
        maxHp: 845,
        baseDamage: 99,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 718,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0218', chance: 0.25 },
            { itemId: 'item_gear_0219', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0220',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 21,
        maxHp: 885,
        baseDamage: 104,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 732,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0219', chance: 0.25 },
            { itemId: 'item_gear_0220', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0221',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 22,
        maxHp: 925,
        baseDamage: 109,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 746,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0220', chance: 0.25 },
            { itemId: 'item_gear_0221', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0222',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 23,
        maxHp: 965,
        baseDamage: 114,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 760,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0221', chance: 0.25 },
            { itemId: 'item_gear_0222', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0223',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 24,
        maxHp: 1005,
        baseDamage: 119,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 774,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0222', chance: 0.25 },
            { itemId: 'item_gear_0223', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0224',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 25,
        maxHp: 1045,
        baseDamage: 124,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 788,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0223', chance: 0.25 },
            { itemId: 'item_gear_0224', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0225',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 26,
        maxHp: 1085,
        baseDamage: 114,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 802,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0224', chance: 0.25 },
            { itemId: 'item_gear_0225', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0226',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 27,
        maxHp: 1125,
        baseDamage: 119,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 816,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0225', chance: 0.25 },
            { itemId: 'item_gear_0226', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0227',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 28,
        maxHp: 1165,
        baseDamage: 124,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 830,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0226', chance: 0.25 },
            { itemId: 'item_gear_0227', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0228',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 29,
        maxHp: 1205,
        baseDamage: 129,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 844,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0227', chance: 0.25 },
            { itemId: 'item_gear_0228', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0229',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 30,
        maxHp: 1245,
        baseDamage: 134,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 858,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0228', chance: 0.25 },
            { itemId: 'item_gear_0229', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0230',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 31,
        maxHp: 1285,
        baseDamage: 139,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 872,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0229', chance: 0.25 },
            { itemId: 'item_gear_0230', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0231',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 32,
        maxHp: 1325,
        baseDamage: 144,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 886,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0230', chance: 0.25 },
            { itemId: 'item_gear_0231', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0232',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 33,
        maxHp: 1365,
        baseDamage: 149,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 900,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0231', chance: 0.25 },
            { itemId: 'item_gear_0232', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0233',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 34,
        maxHp: 1405,
        baseDamage: 154,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 914,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0232', chance: 0.25 },
            { itemId: 'item_gear_0233', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0234',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 35,
        maxHp: 1445,
        baseDamage: 159,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 928,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0233', chance: 0.25 },
            { itemId: 'item_gear_0234', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0235',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 36,
        maxHp: 1485,
        baseDamage: 164,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 942,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0234', chance: 0.25 },
            { itemId: 'item_gear_0235', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0236',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 37,
        maxHp: 1525,
        baseDamage: 169,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 956,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0235', chance: 0.25 },
            { itemId: 'item_gear_0236', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0237',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 38,
        maxHp: 1565,
        baseDamage: 174,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 970,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0236', chance: 0.25 },
            { itemId: 'item_gear_0237', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0238',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 39,
        maxHp: 1605,
        baseDamage: 179,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 984,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0237', chance: 0.25 },
            { itemId: 'item_gear_0238', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0239',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 40,
        maxHp: 1645,
        baseDamage: 184,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 998,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0238', chance: 0.25 },
            { itemId: 'item_gear_0239', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0240',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 41,
        maxHp: 1485,
        baseDamage: 174,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 1012,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0239', chance: 0.25 },
            { itemId: 'item_gear_0240', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0241',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 42,
        maxHp: 1525,
        baseDamage: 179,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 1026,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0240', chance: 0.25 },
            { itemId: 'item_gear_0241', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0242',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 43,
        maxHp: 1565,
        baseDamage: 184,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 1040,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0241', chance: 0.25 },
            { itemId: 'item_gear_0242', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0243',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 44,
        maxHp: 1605,
        baseDamage: 189,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 1054,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0242', chance: 0.25 },
            { itemId: 'item_gear_0243', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0244',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 45,
        maxHp: 1645,
        baseDamage: 194,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 1068,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0243', chance: 0.25 },
            { itemId: 'item_gear_0244', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0245',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 46,
        maxHp: 1685,
        baseDamage: 199,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 1082,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0244', chance: 0.25 },
            { itemId: 'item_gear_0245', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0246',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 47,
        maxHp: 1725,
        baseDamage: 204,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 1096,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0245', chance: 0.25 },
            { itemId: 'item_gear_0246', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0247',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 48,
        maxHp: 1765,
        baseDamage: 209,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 1110,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0246', chance: 0.25 },
            { itemId: 'item_gear_0247', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0248',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 49,
        maxHp: 1805,
        baseDamage: 214,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 1124,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0247', chance: 0.25 },
            { itemId: 'item_gear_0248', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0249',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 50,
        maxHp: 1845,
        baseDamage: 219,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 1138,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0248', chance: 0.25 },
            { itemId: 'item_gear_0249', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0250',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 1,
        maxHp: 135,
        baseDamage: 24,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 552,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0249', chance: 0.25 },
            { itemId: 'item_gear_0250', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0251',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 2,
        maxHp: 175,
        baseDamage: 29,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 566,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0250', chance: 0.25 },
            { itemId: 'item_gear_0251', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0252',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 3,
        maxHp: 215,
        baseDamage: 34,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 580,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0251', chance: 0.25 },
            { itemId: 'item_gear_0252', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0253',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 4,
        maxHp: 255,
        baseDamage: 39,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 594,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0252', chance: 0.25 },
            { itemId: 'item_gear_0253', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0254',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 5,
        maxHp: 295,
        baseDamage: 44,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 608,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0253', chance: 0.25 },
            { itemId: 'item_gear_0254', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0255',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 6,
        maxHp: 335,
        baseDamage: 34,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 622,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0254', chance: 0.25 },
            { itemId: 'item_gear_0255', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0256',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 7,
        maxHp: 375,
        baseDamage: 39,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 636,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0255', chance: 0.25 },
            { itemId: 'item_gear_0256', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0257',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 8,
        maxHp: 415,
        baseDamage: 44,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 650,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0256', chance: 0.25 },
            { itemId: 'item_gear_0257', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0258',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 9,
        maxHp: 455,
        baseDamage: 49,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 664,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0257', chance: 0.25 },
            { itemId: 'item_gear_0258', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0259',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 10,
        maxHp: 495,
        baseDamage: 54,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 678,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0258', chance: 0.25 },
            { itemId: 'item_gear_0259', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0260',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 11,
        maxHp: 535,
        baseDamage: 59,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 692,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0259', chance: 0.25 },
            { itemId: 'item_gear_0260', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0261',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 12,
        maxHp: 575,
        baseDamage: 64,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 706,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0260', chance: 0.25 },
            { itemId: 'item_gear_0261', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0262',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 13,
        maxHp: 615,
        baseDamage: 69,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 720,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0261', chance: 0.25 },
            { itemId: 'item_gear_0262', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0263',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 14,
        maxHp: 655,
        baseDamage: 74,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 734,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0262', chance: 0.25 },
            { itemId: 'item_gear_0263', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0264',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 15,
        maxHp: 695,
        baseDamage: 79,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 748,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0263', chance: 0.25 },
            { itemId: 'item_gear_0264', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0265',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 16,
        maxHp: 735,
        baseDamage: 84,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 762,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0264', chance: 0.25 },
            { itemId: 'item_gear_0265', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0266',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 17,
        maxHp: 775,
        baseDamage: 89,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 776,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0265', chance: 0.25 },
            { itemId: 'item_gear_0266', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0267',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 18,
        maxHp: 815,
        baseDamage: 94,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 790,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0266', chance: 0.25 },
            { itemId: 'item_gear_0267', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0268',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 19,
        maxHp: 855,
        baseDamage: 99,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 804,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0267', chance: 0.25 },
            { itemId: 'item_gear_0268', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0269',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 20,
        maxHp: 895,
        baseDamage: 104,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 818,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0268', chance: 0.25 },
            { itemId: 'item_gear_0269', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0270',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 21,
        maxHp: 935,
        baseDamage: 94,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 832,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0269', chance: 0.25 },
            { itemId: 'item_gear_0270', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0271',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 22,
        maxHp: 975,
        baseDamage: 99,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 846,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0270', chance: 0.25 },
            { itemId: 'item_gear_0271', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0272',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 23,
        maxHp: 1015,
        baseDamage: 104,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 860,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0271', chance: 0.25 },
            { itemId: 'item_gear_0272', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0273',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 24,
        maxHp: 1055,
        baseDamage: 109,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 874,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0272', chance: 0.25 },
            { itemId: 'item_gear_0273', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0274',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 25,
        maxHp: 1095,
        baseDamage: 114,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 888,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0273', chance: 0.25 },
            { itemId: 'item_gear_0274', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0275',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 26,
        maxHp: 1135,
        baseDamage: 119,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 902,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0274', chance: 0.25 },
            { itemId: 'item_gear_0275', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0276',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 27,
        maxHp: 1175,
        baseDamage: 124,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 916,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0275', chance: 0.25 },
            { itemId: 'item_gear_0276', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0277',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 28,
        maxHp: 1215,
        baseDamage: 129,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 930,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0276', chance: 0.25 },
            { itemId: 'item_gear_0277', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0278',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 29,
        maxHp: 1255,
        baseDamage: 134,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 944,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0277', chance: 0.25 },
            { itemId: 'item_gear_0278', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0279',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 30,
        maxHp: 1295,
        baseDamage: 139,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 958,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0278', chance: 0.25 },
            { itemId: 'item_gear_0279', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0280',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 31,
        maxHp: 1135,
        baseDamage: 144,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 972,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0279', chance: 0.25 },
            { itemId: 'item_gear_0280', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0281',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 32,
        maxHp: 1175,
        baseDamage: 149,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 986,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0280', chance: 0.25 },
            { itemId: 'item_gear_0281', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0282',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 33,
        maxHp: 1215,
        baseDamage: 154,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 1000,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0281', chance: 0.25 },
            { itemId: 'item_gear_0282', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0283',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 34,
        maxHp: 1255,
        baseDamage: 159,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 1014,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0282', chance: 0.25 },
            { itemId: 'item_gear_0283', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0284',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 35,
        maxHp: 1295,
        baseDamage: 164,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 1028,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0283', chance: 0.25 },
            { itemId: 'item_gear_0284', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0285',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 36,
        maxHp: 1335,
        baseDamage: 154,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 1042,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0284', chance: 0.25 },
            { itemId: 'item_gear_0285', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0286',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 37,
        maxHp: 1375,
        baseDamage: 159,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 1056,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0285', chance: 0.25 },
            { itemId: 'item_gear_0286', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0287',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 38,
        maxHp: 1415,
        baseDamage: 164,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 1070,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0286', chance: 0.25 },
            { itemId: 'item_gear_0287', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0288',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 39,
        maxHp: 1455,
        baseDamage: 169,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 1084,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0287', chance: 0.25 },
            { itemId: 'item_gear_0288', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0289',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 40,
        maxHp: 1495,
        baseDamage: 174,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 1098,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0288', chance: 0.25 },
            { itemId: 'item_gear_0289', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0290',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 41,
        maxHp: 1535,
        baseDamage: 179,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 1112,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0289', chance: 0.25 },
            { itemId: 'item_gear_0290', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0291',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 42,
        maxHp: 1575,
        baseDamage: 184,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 1126,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0290', chance: 0.25 },
            { itemId: 'item_gear_0291', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0292',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 43,
        maxHp: 1615,
        baseDamage: 189,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 1140,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0291', chance: 0.25 },
            { itemId: 'item_gear_0292', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0293',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 44,
        maxHp: 1655,
        baseDamage: 194,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 1154,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0292', chance: 0.25 },
            { itemId: 'item_gear_0293', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0294',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 45,
        maxHp: 1695,
        baseDamage: 199,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 1168,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0293', chance: 0.25 },
            { itemId: 'item_gear_0294', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0295',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 46,
        maxHp: 1735,
        baseDamage: 204,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 1182,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0294', chance: 0.25 },
            { itemId: 'item_gear_0295', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0296',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 47,
        maxHp: 1775,
        baseDamage: 209,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 1196,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0295', chance: 0.25 },
            { itemId: 'item_gear_0296', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0297',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 48,
        maxHp: 1815,
        baseDamage: 214,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 1210,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0296', chance: 0.25 },
            { itemId: 'item_gear_0297', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0298',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 49,
        maxHp: 1855,
        baseDamage: 219,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 1224,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0297', chance: 0.25 },
            { itemId: 'item_gear_0298', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0299',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 50,
        maxHp: 1895,
        baseDamage: 224,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 1238,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0298', chance: 0.25 },
            { itemId: 'item_gear_0299', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0300',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 1,
        maxHp: 185,
        baseDamage: 14,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 652,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0299', chance: 0.25 },
            { itemId: 'item_gear_0300', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0301',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 2,
        maxHp: 225,
        baseDamage: 19,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 666,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0300', chance: 0.25 },
            { itemId: 'item_gear_0301', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0302',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 3,
        maxHp: 265,
        baseDamage: 24,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 680,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0301', chance: 0.25 },
            { itemId: 'item_gear_0302', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0303',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 4,
        maxHp: 305,
        baseDamage: 29,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 694,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0302', chance: 0.25 },
            { itemId: 'item_gear_0303', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0304',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 5,
        maxHp: 345,
        baseDamage: 34,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 708,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0303', chance: 0.25 },
            { itemId: 'item_gear_0304', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0305',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 6,
        maxHp: 385,
        baseDamage: 39,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 722,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0304', chance: 0.25 },
            { itemId: 'item_gear_0305', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0306',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 7,
        maxHp: 425,
        baseDamage: 44,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 736,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0305', chance: 0.25 },
            { itemId: 'item_gear_0306', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0307',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 8,
        maxHp: 465,
        baseDamage: 49,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 750,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0306', chance: 0.25 },
            { itemId: 'item_gear_0307', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0308',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 9,
        maxHp: 505,
        baseDamage: 54,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 764,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0307', chance: 0.25 },
            { itemId: 'item_gear_0308', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0309',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 10,
        maxHp: 545,
        baseDamage: 59,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 778,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0308', chance: 0.25 },
            { itemId: 'item_gear_0309', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0310',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 11,
        maxHp: 585,
        baseDamage: 64,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 792,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0309', chance: 0.25 },
            { itemId: 'item_gear_0310', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0311',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 12,
        maxHp: 625,
        baseDamage: 69,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 806,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0310', chance: 0.25 },
            { itemId: 'item_gear_0311', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0312',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 13,
        maxHp: 665,
        baseDamage: 74,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 820,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0311', chance: 0.25 },
            { itemId: 'item_gear_0312', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0313',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 14,
        maxHp: 705,
        baseDamage: 79,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 834,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0312', chance: 0.25 },
            { itemId: 'item_gear_0313', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0314',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 15,
        maxHp: 745,
        baseDamage: 84,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 848,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0313', chance: 0.25 },
            { itemId: 'item_gear_0314', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0315',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 16,
        maxHp: 785,
        baseDamage: 74,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 862,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0314', chance: 0.25 },
            { itemId: 'item_gear_0315', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0316',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 17,
        maxHp: 825,
        baseDamage: 79,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 876,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0315', chance: 0.25 },
            { itemId: 'item_gear_0316', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0317',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 18,
        maxHp: 865,
        baseDamage: 84,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 890,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0316', chance: 0.25 },
            { itemId: 'item_gear_0317', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0318',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 19,
        maxHp: 905,
        baseDamage: 89,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 904,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0317', chance: 0.25 },
            { itemId: 'item_gear_0318', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0319',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 20,
        maxHp: 945,
        baseDamage: 94,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 918,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0318', chance: 0.25 },
            { itemId: 'item_gear_0319', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0320',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 21,
        maxHp: 785,
        baseDamage: 99,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 932,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0319', chance: 0.25 },
            { itemId: 'item_gear_0320', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0321',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 22,
        maxHp: 825,
        baseDamage: 104,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 946,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0320', chance: 0.25 },
            { itemId: 'item_gear_0321', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0322',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 23,
        maxHp: 865,
        baseDamage: 109,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 960,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0321', chance: 0.25 },
            { itemId: 'item_gear_0322', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0323',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 24,
        maxHp: 905,
        baseDamage: 114,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 974,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0322', chance: 0.25 },
            { itemId: 'item_gear_0323', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0324',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 25,
        maxHp: 945,
        baseDamage: 119,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 988,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0323', chance: 0.25 },
            { itemId: 'item_gear_0324', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0325',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 26,
        maxHp: 985,
        baseDamage: 124,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 1002,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0324', chance: 0.25 },
            { itemId: 'item_gear_0325', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0326',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 27,
        maxHp: 1025,
        baseDamage: 129,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 1016,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0325', chance: 0.25 },
            { itemId: 'item_gear_0326', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0327',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 28,
        maxHp: 1065,
        baseDamage: 134,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 1030,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0326', chance: 0.25 },
            { itemId: 'item_gear_0327', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0328',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 29,
        maxHp: 1105,
        baseDamage: 139,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 1044,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0327', chance: 0.25 },
            { itemId: 'item_gear_0328', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0329',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 30,
        maxHp: 1145,
        baseDamage: 144,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 1058,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0328', chance: 0.25 },
            { itemId: 'item_gear_0329', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0330',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 31,
        maxHp: 1185,
        baseDamage: 134,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 1072,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0329', chance: 0.25 },
            { itemId: 'item_gear_0330', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0331',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 32,
        maxHp: 1225,
        baseDamage: 139,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 1086,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0330', chance: 0.25 },
            { itemId: 'item_gear_0331', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0332',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 33,
        maxHp: 1265,
        baseDamage: 144,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 1100,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0331', chance: 0.25 },
            { itemId: 'item_gear_0332', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0333',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 34,
        maxHp: 1305,
        baseDamage: 149,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 1114,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0332', chance: 0.25 },
            { itemId: 'item_gear_0333', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0334',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 35,
        maxHp: 1345,
        baseDamage: 154,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 1128,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0333', chance: 0.25 },
            { itemId: 'item_gear_0334', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0335',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 36,
        maxHp: 1385,
        baseDamage: 159,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 1142,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0334', chance: 0.25 },
            { itemId: 'item_gear_0335', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0336',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 37,
        maxHp: 1425,
        baseDamage: 164,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 1156,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0335', chance: 0.25 },
            { itemId: 'item_gear_0336', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0337',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 38,
        maxHp: 1465,
        baseDamage: 169,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 1170,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0336', chance: 0.25 },
            { itemId: 'item_gear_0337', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0338',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 39,
        maxHp: 1505,
        baseDamage: 174,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 1184,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0337', chance: 0.25 },
            { itemId: 'item_gear_0338', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0339',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 40,
        maxHp: 1545,
        baseDamage: 179,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 1198,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0338', chance: 0.25 },
            { itemId: 'item_gear_0339', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0340',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 41,
        maxHp: 1585,
        baseDamage: 184,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 1212,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0339', chance: 0.25 },
            { itemId: 'item_gear_0340', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0341',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 42,
        maxHp: 1625,
        baseDamage: 189,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 1226,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0340', chance: 0.25 },
            { itemId: 'item_gear_0341', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0342',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 43,
        maxHp: 1665,
        baseDamage: 194,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 1240,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0341', chance: 0.25 },
            { itemId: 'item_gear_0342', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0343',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 44,
        maxHp: 1705,
        baseDamage: 199,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 1254,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0342', chance: 0.25 },
            { itemId: 'item_gear_0343', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0344',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 45,
        maxHp: 1745,
        baseDamage: 204,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 1268,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0343', chance: 0.25 },
            { itemId: 'item_gear_0344', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0345',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 46,
        maxHp: 1785,
        baseDamage: 194,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 1282,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0344', chance: 0.25 },
            { itemId: 'item_gear_0345', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0346',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 47,
        maxHp: 1825,
        baseDamage: 199,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 1296,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0345', chance: 0.25 },
            { itemId: 'item_gear_0346', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0347',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 48,
        maxHp: 1865,
        baseDamage: 204,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 1310,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0346', chance: 0.25 },
            { itemId: 'item_gear_0347', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0348',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 49,
        maxHp: 1905,
        baseDamage: 209,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 1324,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0347', chance: 0.25 },
            { itemId: 'item_gear_0348', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0349',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 50,
        maxHp: 1945,
        baseDamage: 214,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 1338,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0348', chance: 0.25 },
            { itemId: 'item_gear_0349', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0350',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 1,
        maxHp: 235,
        baseDamage: 19,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 752,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0349', chance: 0.25 },
            { itemId: 'item_gear_0350', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0351',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 2,
        maxHp: 275,
        baseDamage: 24,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 766,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0350', chance: 0.25 },
            { itemId: 'item_gear_0351', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0352',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 3,
        maxHp: 315,
        baseDamage: 29,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 780,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0351', chance: 0.25 },
            { itemId: 'item_gear_0352', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0353',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 4,
        maxHp: 355,
        baseDamage: 34,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 794,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0352', chance: 0.25 },
            { itemId: 'item_gear_0353', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0354',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 5,
        maxHp: 395,
        baseDamage: 39,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 808,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0353', chance: 0.25 },
            { itemId: 'item_gear_0354', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0355',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 6,
        maxHp: 435,
        baseDamage: 44,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 822,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0354', chance: 0.25 },
            { itemId: 'item_gear_0355', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0356',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 7,
        maxHp: 475,
        baseDamage: 49,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 836,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0355', chance: 0.25 },
            { itemId: 'item_gear_0356', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0357',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 8,
        maxHp: 515,
        baseDamage: 54,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 850,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0356', chance: 0.25 },
            { itemId: 'item_gear_0357', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0358',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 9,
        maxHp: 555,
        baseDamage: 59,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 864,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0357', chance: 0.25 },
            { itemId: 'item_gear_0358', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0359',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 10,
        maxHp: 595,
        baseDamage: 64,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 878,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0358', chance: 0.25 },
            { itemId: 'item_gear_0359', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0360',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 11,
        maxHp: 435,
        baseDamage: 54,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 892,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0359', chance: 0.25 },
            { itemId: 'item_gear_0360', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0361',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 12,
        maxHp: 475,
        baseDamage: 59,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 906,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0360', chance: 0.25 },
            { itemId: 'item_gear_0361', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0362',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 13,
        maxHp: 515,
        baseDamage: 64,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 920,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0361', chance: 0.25 },
            { itemId: 'item_gear_0362', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0363',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 14,
        maxHp: 555,
        baseDamage: 69,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 934,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0362', chance: 0.25 },
            { itemId: 'item_gear_0363', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0364',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 15,
        maxHp: 595,
        baseDamage: 74,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 948,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0363', chance: 0.25 },
            { itemId: 'item_gear_0364', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0365',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 16,
        maxHp: 635,
        baseDamage: 79,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 962,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0364', chance: 0.25 },
            { itemId: 'item_gear_0365', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0366',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 17,
        maxHp: 675,
        baseDamage: 84,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 976,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0365', chance: 0.25 },
            { itemId: 'item_gear_0366', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0367',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 18,
        maxHp: 715,
        baseDamage: 89,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 990,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0366', chance: 0.25 },
            { itemId: 'item_gear_0367', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0368',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 19,
        maxHp: 755,
        baseDamage: 94,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 1004,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0367', chance: 0.25 },
            { itemId: 'item_gear_0368', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0369',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 20,
        maxHp: 795,
        baseDamage: 99,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 1018,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0368', chance: 0.25 },
            { itemId: 'item_gear_0369', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0370',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 21,
        maxHp: 835,
        baseDamage: 104,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 1032,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0369', chance: 0.25 },
            { itemId: 'item_gear_0370', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0371',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 22,
        maxHp: 875,
        baseDamage: 109,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 1046,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0370', chance: 0.25 },
            { itemId: 'item_gear_0371', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0372',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 23,
        maxHp: 915,
        baseDamage: 114,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 1060,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0371', chance: 0.25 },
            { itemId: 'item_gear_0372', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0373',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 24,
        maxHp: 955,
        baseDamage: 119,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 1074,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0372', chance: 0.25 },
            { itemId: 'item_gear_0373', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0374',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 25,
        maxHp: 995,
        baseDamage: 124,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 1088,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0373', chance: 0.25 },
            { itemId: 'item_gear_0374', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0375',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 26,
        maxHp: 1035,
        baseDamage: 114,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 1102,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0374', chance: 0.25 },
            { itemId: 'item_gear_0375', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0376',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 27,
        maxHp: 1075,
        baseDamage: 119,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 1116,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0375', chance: 0.25 },
            { itemId: 'item_gear_0376', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0377',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 28,
        maxHp: 1115,
        baseDamage: 124,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 1130,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0376', chance: 0.25 },
            { itemId: 'item_gear_0377', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0378',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 29,
        maxHp: 1155,
        baseDamage: 129,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 1144,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0377', chance: 0.25 },
            { itemId: 'item_gear_0378', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0379',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 30,
        maxHp: 1195,
        baseDamage: 134,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 1158,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0378', chance: 0.25 },
            { itemId: 'item_gear_0379', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0380',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 31,
        maxHp: 1235,
        baseDamage: 139,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 1172,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0379', chance: 0.25 },
            { itemId: 'item_gear_0380', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0381',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 32,
        maxHp: 1275,
        baseDamage: 144,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 1186,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0380', chance: 0.25 },
            { itemId: 'item_gear_0381', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0382',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 33,
        maxHp: 1315,
        baseDamage: 149,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 1200,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0381', chance: 0.25 },
            { itemId: 'item_gear_0382', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0383',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 34,
        maxHp: 1355,
        baseDamage: 154,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 1214,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0382', chance: 0.25 },
            { itemId: 'item_gear_0383', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0384',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 35,
        maxHp: 1395,
        baseDamage: 159,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 1228,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0383', chance: 0.25 },
            { itemId: 'item_gear_0384', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0385',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 36,
        maxHp: 1435,
        baseDamage: 164,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 1242,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0384', chance: 0.25 },
            { itemId: 'item_gear_0385', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0386',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 37,
        maxHp: 1475,
        baseDamage: 169,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 1256,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0385', chance: 0.25 },
            { itemId: 'item_gear_0386', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0387',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 38,
        maxHp: 1515,
        baseDamage: 174,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 1270,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0386', chance: 0.25 },
            { itemId: 'item_gear_0387', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0388',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 39,
        maxHp: 1555,
        baseDamage: 179,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 1284,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0387', chance: 0.25 },
            { itemId: 'item_gear_0388', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0389',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 40,
        maxHp: 1595,
        baseDamage: 184,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 1298,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0388', chance: 0.25 },
            { itemId: 'item_gear_0389', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0390',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 41,
        maxHp: 1635,
        baseDamage: 174,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 1312,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0389', chance: 0.25 },
            { itemId: 'item_gear_0390', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0391',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 42,
        maxHp: 1675,
        baseDamage: 179,
        moveSpeed: 101,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 1326,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0390', chance: 0.25 },
            { itemId: 'item_gear_0391', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0392',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 43,
        maxHp: 1715,
        baseDamage: 184,
        moveSpeed: 102,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 1340,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0391', chance: 0.25 },
            { itemId: 'item_gear_0392', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0393',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 44,
        maxHp: 1755,
        baseDamage: 189,
        moveSpeed: 103,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 1354,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0392', chance: 0.25 },
            { itemId: 'item_gear_0393', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0394',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 45,
        maxHp: 1795,
        baseDamage: 194,
        moveSpeed: 104,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 1368,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0393', chance: 0.25 },
            { itemId: 'item_gear_0394', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0395',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 46,
        maxHp: 1835,
        baseDamage: 199,
        moveSpeed: 105,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 1382,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0394', chance: 0.25 },
            { itemId: 'item_gear_0395', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0396',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 47,
        maxHp: 1875,
        baseDamage: 204,
        moveSpeed: 106,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 1396,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0395', chance: 0.25 },
            { itemId: 'item_gear_0396', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0397',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 48,
        maxHp: 1915,
        baseDamage: 209,
        moveSpeed: 107,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 1410,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0396', chance: 0.25 },
            { itemId: 'item_gear_0397', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0398',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 49,
        maxHp: 1955,
        baseDamage: 214,
        moveSpeed: 108,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 1424,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0397', chance: 0.25 },
            { itemId: 'item_gear_0398', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0399',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 50,
        maxHp: 1995,
        baseDamage: 219,
        moveSpeed: 109,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 1438,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0398', chance: 0.25 },
            { itemId: 'item_gear_0399', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0400',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 1,
        maxHp: 85,
        baseDamage: 24,
        moveSpeed: 110,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 852,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0399', chance: 0.25 },
            { itemId: 'item_gear_0400', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0401',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 2,
        maxHp: 125,
        baseDamage: 29,
        moveSpeed: 111,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 6,
        experienceReward: 866,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0400', chance: 0.25 },
            { itemId: 'item_gear_0401', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 2. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0402',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 3,
        maxHp: 165,
        baseDamage: 34,
        moveSpeed: 112,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 7,
        experienceReward: 880,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0401', chance: 0.25 },
            { itemId: 'item_gear_0402', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 3. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0403',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 4,
        maxHp: 205,
        baseDamage: 39,
        moveSpeed: 113,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 8,
        experienceReward: 894,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0402', chance: 0.25 },
            { itemId: 'item_gear_0403', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 4. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0404',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 5,
        maxHp: 245,
        baseDamage: 44,
        moveSpeed: 114,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 9,
        experienceReward: 908,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0403', chance: 0.25 },
            { itemId: 'item_gear_0404', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 5. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0405',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 6,
        maxHp: 285,
        baseDamage: 34,
        moveSpeed: 115,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 10,
        experienceReward: 922,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0404', chance: 0.25 },
            { itemId: 'item_gear_0405', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 6. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0406',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 7,
        maxHp: 325,
        baseDamage: 39,
        moveSpeed: 116,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 11,
        experienceReward: 936,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0405', chance: 0.25 },
            { itemId: 'item_gear_0406', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 7. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0407',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 8,
        maxHp: 365,
        baseDamage: 44,
        moveSpeed: 117,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 12,
        experienceReward: 950,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0406', chance: 0.25 },
            { itemId: 'item_gear_0407', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 8. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0408',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 9,
        maxHp: 405,
        baseDamage: 49,
        moveSpeed: 118,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 13,
        experienceReward: 964,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0407', chance: 0.25 },
            { itemId: 'item_gear_0408', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 9. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0409',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 10,
        maxHp: 445,
        baseDamage: 54,
        moveSpeed: 119,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 14,
        experienceReward: 978,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0408', chance: 0.25 },
            { itemId: 'item_gear_0409', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 10. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0410',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 11,
        maxHp: 485,
        baseDamage: 59,
        moveSpeed: 120,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 15,
        experienceReward: 992,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0409', chance: 0.25 },
            { itemId: 'item_gear_0410', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 11. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0411',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 12,
        maxHp: 525,
        baseDamage: 64,
        moveSpeed: 121,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 16,
        experienceReward: 1006,
        resistances: {
            physical: 11,
            fire: 14,
            frost: 18,
            lightning: 22,
            void: 26
        },
        lootTable: [
            { itemId: 'item_gear_0410', chance: 0.25 },
            { itemId: 'item_gear_0411', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 12. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0412',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 13,
        maxHp: 565,
        baseDamage: 69,
        moveSpeed: 122,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 17,
        experienceReward: 1020,
        resistances: {
            physical: 12,
            fire: 15,
            frost: 19,
            lightning: 23,
            void: 27
        },
        lootTable: [
            { itemId: 'item_gear_0411', chance: 0.25 },
            { itemId: 'item_gear_0412', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 13. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0413',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 14,
        maxHp: 605,
        baseDamage: 74,
        moveSpeed: 123,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 18,
        experienceReward: 1034,
        resistances: {
            physical: 13,
            fire: 16,
            frost: 20,
            lightning: 24,
            void: 28
        },
        lootTable: [
            { itemId: 'item_gear_0412', chance: 0.25 },
            { itemId: 'item_gear_0413', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 14. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0414',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 15,
        maxHp: 645,
        baseDamage: 79,
        moveSpeed: 124,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 19,
        experienceReward: 1048,
        resistances: {
            physical: 14,
            fire: 17,
            frost: 21,
            lightning: 25,
            void: 29
        },
        lootTable: [
            { itemId: 'item_gear_0413', chance: 0.25 },
            { itemId: 'item_gear_0414', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 15. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0415',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 16,
        maxHp: 685,
        baseDamage: 84,
        moveSpeed: 125,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 20,
        experienceReward: 1062,
        resistances: {
            physical: 15,
            fire: 18,
            frost: 22,
            lightning: 26,
            void: 30
        },
        lootTable: [
            { itemId: 'item_gear_0414', chance: 0.25 },
            { itemId: 'item_gear_0415', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 16. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0416',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 17,
        maxHp: 725,
        baseDamage: 89,
        moveSpeed: 126,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 21,
        experienceReward: 1076,
        resistances: {
            physical: 16,
            fire: 19,
            frost: 23,
            lightning: 27,
            void: 31
        },
        lootTable: [
            { itemId: 'item_gear_0415', chance: 0.25 },
            { itemId: 'item_gear_0416', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 17. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0417',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 18,
        maxHp: 765,
        baseDamage: 94,
        moveSpeed: 127,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 22,
        experienceReward: 1090,
        resistances: {
            physical: 17,
            fire: 20,
            frost: 24,
            lightning: 28,
            void: 32
        },
        lootTable: [
            { itemId: 'item_gear_0416', chance: 0.25 },
            { itemId: 'item_gear_0417', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 18. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0418',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 19,
        maxHp: 805,
        baseDamage: 99,
        moveSpeed: 128,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 23,
        experienceReward: 1104,
        resistances: {
            physical: 18,
            fire: 21,
            frost: 25,
            lightning: 29,
            void: 33
        },
        lootTable: [
            { itemId: 'item_gear_0417', chance: 0.25 },
            { itemId: 'item_gear_0418', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 19. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0419',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 20,
        maxHp: 845,
        baseDamage: 104,
        moveSpeed: 129,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 24,
        experienceReward: 1118,
        resistances: {
            physical: 19,
            fire: 22,
            frost: 26,
            lightning: 30,
            void: 34
        },
        lootTable: [
            { itemId: 'item_gear_0418', chance: 0.25 },
            { itemId: 'item_gear_0419', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 20. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0420',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 21,
        maxHp: 885,
        baseDamage: 94,
        moveSpeed: 70,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 25,
        experienceReward: 1132,
        resistances: {
            physical: 0,
            fire: 23,
            frost: 27,
            lightning: 31,
            void: 35
        },
        lootTable: [
            { itemId: 'item_gear_0419', chance: 0.25 },
            { itemId: 'item_gear_0420', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 21. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0421',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 22,
        maxHp: 925,
        baseDamage: 99,
        moveSpeed: 71,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 26,
        experienceReward: 1146,
        resistances: {
            physical: 1,
            fire: 24,
            frost: 28,
            lightning: 32,
            void: 36
        },
        lootTable: [
            { itemId: 'item_gear_0420', chance: 0.25 },
            { itemId: 'item_gear_0421', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 22. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0422',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 23,
        maxHp: 965,
        baseDamage: 104,
        moveSpeed: 72,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 27,
        experienceReward: 1160,
        resistances: {
            physical: 2,
            fire: 25,
            frost: 29,
            lightning: 33,
            void: 37
        },
        lootTable: [
            { itemId: 'item_gear_0421', chance: 0.25 },
            { itemId: 'item_gear_0422', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 23. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0423',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 24,
        maxHp: 1005,
        baseDamage: 109,
        moveSpeed: 73,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 28,
        experienceReward: 1174,
        resistances: {
            physical: 3,
            fire: 26,
            frost: 30,
            lightning: 34,
            void: 38
        },
        lootTable: [
            { itemId: 'item_gear_0422', chance: 0.25 },
            { itemId: 'item_gear_0423', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 24. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0424',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 25,
        maxHp: 1045,
        baseDamage: 114,
        moveSpeed: 74,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 29,
        experienceReward: 1188,
        resistances: {
            physical: 4,
            fire: 27,
            frost: 31,
            lightning: 35,
            void: 39
        },
        lootTable: [
            { itemId: 'item_gear_0423', chance: 0.25 },
            { itemId: 'item_gear_0424', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 25. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0425',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 26,
        maxHp: 1085,
        baseDamage: 119,
        moveSpeed: 75,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 5,
        experienceReward: 1202,
        resistances: {
            physical: 5,
            fire: 28,
            frost: 32,
            lightning: 36,
            void: 0
        },
        lootTable: [
            { itemId: 'item_gear_0424', chance: 0.25 },
            { itemId: 'item_gear_0425', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 26. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0426',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 27,
        maxHp: 1125,
        baseDamage: 124,
        moveSpeed: 76,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 6,
        experienceReward: 1216,
        resistances: {
            physical: 6,
            fire: 29,
            frost: 33,
            lightning: 37,
            void: 1
        },
        lootTable: [
            { itemId: 'item_gear_0425', chance: 0.25 },
            { itemId: 'item_gear_0426', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 27. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0427',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 28,
        maxHp: 1165,
        baseDamage: 129,
        moveSpeed: 77,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 7,
        experienceReward: 1230,
        resistances: {
            physical: 7,
            fire: 30,
            frost: 34,
            lightning: 38,
            void: 2
        },
        lootTable: [
            { itemId: 'item_gear_0426', chance: 0.25 },
            { itemId: 'item_gear_0427', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 28. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0428',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 29,
        maxHp: 1205,
        baseDamage: 134,
        moveSpeed: 78,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 8,
        experienceReward: 1244,
        resistances: {
            physical: 8,
            fire: 31,
            frost: 35,
            lightning: 39,
            void: 3
        },
        lootTable: [
            { itemId: 'item_gear_0427', chance: 0.25 },
            { itemId: 'item_gear_0428', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 29. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0429',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 30,
        maxHp: 1245,
        baseDamage: 139,
        moveSpeed: 79,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 9,
        experienceReward: 1258,
        resistances: {
            physical: 9,
            fire: 32,
            frost: 36,
            lightning: 0,
            void: 4
        },
        lootTable: [
            { itemId: 'item_gear_0428', chance: 0.25 },
            { itemId: 'item_gear_0429', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 30. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0430',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 31,
        maxHp: 1285,
        baseDamage: 144,
        moveSpeed: 80,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 10,
        experienceReward: 1272,
        resistances: {
            physical: 10,
            fire: 33,
            frost: 37,
            lightning: 1,
            void: 5
        },
        lootTable: [
            { itemId: 'item_gear_0429', chance: 0.25 },
            { itemId: 'item_gear_0430', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 31. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0431',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 32,
        maxHp: 1325,
        baseDamage: 149,
        moveSpeed: 81,
        attackRange: 140,
        attackCooldown: 1.20,
        defenseRating: 11,
        experienceReward: 1286,
        resistances: {
            physical: 11,
            fire: 34,
            frost: 38,
            lightning: 2,
            void: 6
        },
        lootTable: [
            { itemId: 'item_gear_0430', chance: 0.25 },
            { itemId: 'item_gear_0431', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 32. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0432',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 33,
        maxHp: 1365,
        baseDamage: 154,
        moveSpeed: 82,
        attackRange: 150,
        attackCooldown: 1.40,
        defenseRating: 12,
        experienceReward: 1300,
        resistances: {
            physical: 12,
            fire: 35,
            frost: 39,
            lightning: 3,
            void: 7
        },
        lootTable: [
            { itemId: 'item_gear_0431', chance: 0.25 },
            { itemId: 'item_gear_0432', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 33. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0433',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 34,
        maxHp: 1405,
        baseDamage: 159,
        moveSpeed: 83,
        attackRange: 160,
        attackCooldown: 1.60,
        defenseRating: 13,
        experienceReward: 1314,
        resistances: {
            physical: 13,
            fire: 36,
            frost: 0,
            lightning: 4,
            void: 8
        },
        lootTable: [
            { itemId: 'item_gear_0432', chance: 0.25 },
            { itemId: 'item_gear_0433', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 34. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0434',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 35,
        maxHp: 1445,
        baseDamage: 164,
        moveSpeed: 84,
        attackRange: 170,
        attackCooldown: 1.80,
        defenseRating: 14,
        experienceReward: 1328,
        resistances: {
            physical: 14,
            fire: 37,
            frost: 1,
            lightning: 5,
            void: 9
        },
        lootTable: [
            { itemId: 'item_gear_0433', chance: 0.25 },
            { itemId: 'item_gear_0434', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 35. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0435',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 36,
        maxHp: 1485,
        baseDamage: 154,
        moveSpeed: 85,
        attackRange: 180,
        attackCooldown: 2.00,
        defenseRating: 15,
        experienceReward: 1342,
        resistances: {
            physical: 15,
            fire: 38,
            frost: 2,
            lightning: 6,
            void: 10
        },
        lootTable: [
            { itemId: 'item_gear_0434', chance: 0.25 },
            { itemId: 'item_gear_0435', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 36. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0436',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 37,
        maxHp: 1525,
        baseDamage: 159,
        moveSpeed: 86,
        attackRange: 190,
        attackCooldown: 2.20,
        defenseRating: 16,
        experienceReward: 1356,
        resistances: {
            physical: 16,
            fire: 39,
            frost: 3,
            lightning: 7,
            void: 11
        },
        lootTable: [
            { itemId: 'item_gear_0435', chance: 0.25 },
            { itemId: 'item_gear_0436', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 37. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0437',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 38,
        maxHp: 1565,
        baseDamage: 164,
        moveSpeed: 87,
        attackRange: 200,
        attackCooldown: 2.40,
        defenseRating: 17,
        experienceReward: 1370,
        resistances: {
            physical: 17,
            fire: 0,
            frost: 4,
            lightning: 8,
            void: 12
        },
        lootTable: [
            { itemId: 'item_gear_0436', chance: 0.25 },
            { itemId: 'item_gear_0437', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 38. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0438',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 39,
        maxHp: 1605,
        baseDamage: 169,
        moveSpeed: 88,
        attackRange: 210,
        attackCooldown: 2.60,
        defenseRating: 18,
        experienceReward: 1384,
        resistances: {
            physical: 18,
            fire: 1,
            frost: 5,
            lightning: 9,
            void: 13
        },
        lootTable: [
            { itemId: 'item_gear_0437', chance: 0.25 },
            { itemId: 'item_gear_0438', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 39. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0439',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 40,
        maxHp: 1645,
        baseDamage: 174,
        moveSpeed: 89,
        attackRange: 220,
        attackCooldown: 2.80,
        defenseRating: 19,
        experienceReward: 1398,
        resistances: {
            physical: 19,
            fire: 2,
            frost: 6,
            lightning: 10,
            void: 14
        },
        lootTable: [
            { itemId: 'item_gear_0438', chance: 0.25 },
            { itemId: 'item_gear_0439', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 40. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0440',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 41,
        maxHp: 1485,
        baseDamage: 179,
        moveSpeed: 90,
        attackRange: 30,
        attackCooldown: 1.00,
        defenseRating: 20,
        experienceReward: 1412,
        resistances: {
            physical: 0,
            fire: 3,
            frost: 7,
            lightning: 11,
            void: 15
        },
        lootTable: [
            { itemId: 'item_gear_0439', chance: 0.25 },
            { itemId: 'item_gear_0440', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 41. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0441',
        name: 'Armored Skeleton Scout',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 42,
        maxHp: 1525,
        baseDamage: 184,
        moveSpeed: 91,
        attackRange: 40,
        attackCooldown: 1.20,
        defenseRating: 21,
        experienceReward: 1426,
        resistances: {
            physical: 1,
            fire: 4,
            frost: 8,
            lightning: 12,
            void: 16
        },
        lootTable: [
            { itemId: 'item_gear_0440', chance: 0.25 },
            { itemId: 'item_gear_0441', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 42. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0442',
        name: 'Swift Gargoyle',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 43,
        maxHp: 1565,
        baseDamage: 189,
        moveSpeed: 92,
        attackRange: 50,
        attackCooldown: 1.40,
        defenseRating: 22,
        experienceReward: 1440,
        resistances: {
            physical: 2,
            fire: 5,
            frost: 9,
            lightning: 13,
            void: 17
        },
        lootTable: [
            { itemId: 'item_gear_0441', chance: 0.25 },
            { itemId: 'item_gear_0442', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 43. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0443',
        name: 'Frenzied Mage Cultist',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 44,
        maxHp: 1605,
        baseDamage: 194,
        moveSpeed: 93,
        attackRange: 60,
        attackCooldown: 1.60,
        defenseRating: 23,
        experienceReward: 1454,
        resistances: {
            physical: 3,
            fire: 6,
            frost: 10,
            lightning: 14,
            void: 18
        },
        lootTable: [
            { itemId: 'item_gear_0442', chance: 0.25 },
            { itemId: 'item_gear_0443', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 44. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0444',
        name: 'Venomous Void Drake',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 45,
        maxHp: 1645,
        baseDamage: 199,
        moveSpeed: 94,
        attackRange: 70,
        attackCooldown: 1.80,
        defenseRating: 24,
        experienceReward: 1468,
        resistances: {
            physical: 4,
            fire: 7,
            frost: 11,
            lightning: 15,
            void: 19
        },
        lootTable: [
            { itemId: 'item_gear_0443', chance: 0.25 },
            { itemId: 'item_gear_0444', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 45. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0445',
        name: 'Glacial Shadow Fiend',
        category: MONSTER_CATEGORIES.UNDEAD,
        threatLevel: 46,
        maxHp: 1685,
        baseDamage: 204,
        moveSpeed: 95,
        attackRange: 80,
        attackCooldown: 2.00,
        defenseRating: 25,
        experienceReward: 1482,
        resistances: {
            physical: 5,
            fire: 8,
            frost: 12,
            lightning: 16,
            void: 20
        },
        lootTable: [
            { itemId: 'item_gear_0444', chance: 0.25 },
            { itemId: 'item_gear_0445', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 46. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0446',
        name: 'Volcanic Golem',
        category: MONSTER_CATEGORIES.CONSTRUCT,
        threatLevel: 47,
        maxHp: 1725,
        baseDamage: 209,
        moveSpeed: 96,
        attackRange: 90,
        attackCooldown: 2.20,
        defenseRating: 26,
        experienceReward: 1496,
        resistances: {
            physical: 6,
            fire: 9,
            frost: 13,
            lightning: 17,
            void: 21
        },
        lootTable: [
            { itemId: 'item_gear_0445', chance: 0.25 },
            { itemId: 'item_gear_0446', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 47. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0447',
        name: 'Corrupted Wraith',
        category: MONSTER_CATEGORIES.DEMON,
        threatLevel: 48,
        maxHp: 1765,
        baseDamage: 214,
        moveSpeed: 97,
        attackRange: 100,
        attackCooldown: 2.40,
        defenseRating: 27,
        experienceReward: 1510,
        resistances: {
            physical: 7,
            fire: 10,
            frost: 14,
            lightning: 18,
            void: 22
        },
        lootTable: [
            { itemId: 'item_gear_0446', chance: 0.25 },
            { itemId: 'item_gear_0447', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 48. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0448',
        name: 'Ancient Specter',
        category: MONSTER_CATEGORIES.ELEMENTAL,
        threatLevel: 49,
        maxHp: 1805,
        baseDamage: 219,
        moveSpeed: 98,
        attackRange: 110,
        attackCooldown: 2.60,
        defenseRating: 28,
        experienceReward: 1524,
        resistances: {
            physical: 8,
            fire: 11,
            frost: 15,
            lightning: 19,
            void: 23
        },
        lootTable: [
            { itemId: 'item_gear_0447', chance: 0.25 },
            { itemId: 'item_gear_0448', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 49. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0449',
        name: 'Apex Infernal Wyrm',
        category: MONSTER_CATEGORIES.ABERRATION,
        threatLevel: 50,
        maxHp: 1845,
        baseDamage: 224,
        moveSpeed: 99,
        attackRange: 120,
        attackCooldown: 2.80,
        defenseRating: 29,
        experienceReward: 1538,
        resistances: {
            physical: 9,
            fire: 12,
            frost: 16,
            lightning: 20,
            void: 24
        },
        lootTable: [
            { itemId: 'item_gear_0448', chance: 0.25 },
            { itemId: 'item_gear_0449', chance: 0.10 }
        ],
        behaviorTree: 'aggressive_charge',
        lore: 'A dangerous specimen documented in dungeon chamber 50. Approaches targets with extreme hostility.'
    },
    {
        id: 'monster_0450',
        name: 'Vicious Slime',
        category: MONSTER_CATEGORIES.BEAST,
        threatLevel: 1,
        maxHp: 135,
        baseDamage: 14,
        moveSpeed: 100,
        attackRange: 130,
        attackCooldown: 1.00,
        defenseRating: 5,
        experienceReward: 952,
        resistances: {
            physical: 10,
            fire: 13,
            frost: 17,
            lightning: 21,
            void: 25
        },
        lootTable: [
            { itemId: 'item_gear_0449', chance: 0.25 },
            { itemId: 'item_gear_0450', chance: 0.10 }
        ],
        behaviorTree: 'chase_and_kite',
        lore: 'A dangerous specimen documented in dungeon chamber 1. Approaches targets with extreme hostility.'
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MONSTER_CATEGORIES, BESTIARY_DATABASE };
}
