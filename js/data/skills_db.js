/**
 * Chamber Crawler - Comprehensive Skills & Abilities Tree
 * Progression perks, active spells, passive combat enhancements, and talent nodes.
 */
const SKILL_TREES = {
    COMBAT: 'combat',
    ARCANE: 'arcane',
    ROGUE: 'rogue',
    SURVIVAL: 'survival',
    ENCHANTING: 'enchanting'
};

const SKILLS_DATABASE = [
    {
        id: 'skill_node_0001',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0002',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0003',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0004',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0005',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0006',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0007',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0008',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0009',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0010',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0011',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0012',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0013',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0014',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0015',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0016',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0017',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0018',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0019',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0020',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0021',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0022',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0023',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0024',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0025',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0026',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0027',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0028',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0029',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0030',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0031',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0032',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0033',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0034',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0035',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0036',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0037',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0038',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0039',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0040',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0041',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0042',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0043',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0044',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0045',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0046',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0047',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0048',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0049',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0050',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0051',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0052',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0053',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0054',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0055',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0056',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0057',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0058',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0059',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0060',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0061',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0062',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0063',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0064',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0065',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0066',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0067',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0068',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0069',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0070',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0071',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0072',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0073',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0074',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0075',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0076',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0077',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0078',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0079',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0080',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0081',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0082',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0083',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0084',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0085',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0086',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0087',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0088',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0089',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0090',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0091',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0092',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0093',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0094',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0095',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0096',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0097',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0098',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0099',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0100',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0101',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0102',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0103',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0104',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0105',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0106',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0107',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0108',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0109',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0110',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0111',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0112',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0113',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0114',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0115',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0116',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0117',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0118',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0119',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0120',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0121',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0122',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0123',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0124',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0125',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0126',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0127',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0128',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0129',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0130',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0131',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0132',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0133',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0134',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0135',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0136',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0137',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0138',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0139',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0140',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0141',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0142',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0143',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0144',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0145',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0146',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0147',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0148',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0149',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0150',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0151',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0152',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0153',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0154',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0155',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0156',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0157',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0158',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0159',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0160',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0161',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0162',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0163',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0164',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0165',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0166',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0167',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0168',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0169',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0170',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0171',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0172',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0173',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0174',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0175',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0176',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0177',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0178',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0179',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0180',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0181',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0182',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0183',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0184',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0185',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0186',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0187',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0188',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0189',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0190',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0191',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0192',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0193',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0194',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0195',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0196',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0197',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0198',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0199',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0200',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0201',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0202',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0203',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0204',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0205',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0206',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0207',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0208',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0209',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0210',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0211',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0212',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0213',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0214',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0215',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0216',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0217',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0218',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0219',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0220',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0221',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0222',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0223',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0224',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0225',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0226',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0227',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0228',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0229',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0230',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0231',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0232',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0233',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0234',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0235',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0236',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0237',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0238',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0239',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0240',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0241',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0242',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0243',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0244',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0245',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0246',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0247',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0248',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0249',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0250',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0251',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0252',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0253',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0254',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0255',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0256',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0257',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0258',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0259',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0260',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0261',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0262',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0263',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0264',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0265',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0266',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0267',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0268',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0269',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0270',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0271',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0272',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0273',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0274',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0275',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0276',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0277',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0278',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0279',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0280',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0281',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0282',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0283',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0284',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0285',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0286',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0287',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0288',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0289',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0290',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0291',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0292',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0293',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0294',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0295',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0296',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0297',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0298',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0299',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0300',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0301',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0302',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0303',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0304',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0305',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0306',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0307',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0308',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0309',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0310',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0311',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0312',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0313',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0314',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0315',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0316',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0317',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0318',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0319',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0320',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0321',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0322',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0323',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0324',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0325',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0326',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0327',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0328',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0329',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0330',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0331',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0332',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0333',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0334',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0335',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0336',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0337',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0338',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0339',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0340',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0341',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0342',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0343',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0344',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0345',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0346',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0347',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0348',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0349',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0350',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0351',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_3'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0352',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_4'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0353',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_5'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0354',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_0'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0355',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_1'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0356',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_2'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0357',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_3'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0358',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_4'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0359',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_5'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0360',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_0'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0361',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 11,
        passiveBonus: {
            stat: 'stat_arcane_1',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 45,
            duration: 4.0,
            statusEffect: 'status_arcane_1'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0362',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 12,
        passiveBonus: {
            stat: 'stat_rogue_2',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 50,
            duration: 5.0,
            statusEffect: 'status_rogue_2'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0363',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 13,
        passiveBonus: {
            stat: 'stat_survival_3',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 55,
            duration: 6.0,
            statusEffect: 'status_survival_3'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0364',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 14,
        passiveBonus: {
            stat: 'stat_enchanting_0',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 60,
            duration: 7.0,
            statusEffect: 'status_enchanting_4'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0365',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 15,
        passiveBonus: {
            stat: 'stat_combat_1',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 65,
            duration: 3.0,
            statusEffect: 'status_combat_5'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0366',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 16,
        passiveBonus: {
            stat: 'stat_arcane_2',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 70,
            duration: 4.0,
            statusEffect: 'status_arcane_0'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0367',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 17,
        passiveBonus: {
            stat: 'stat_rogue_3',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 75,
            duration: 5.0,
            statusEffect: 'status_rogue_1'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0368',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 18,
        passiveBonus: {
            stat: 'stat_survival_0',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 80,
            duration: 6.0,
            statusEffect: 'status_survival_2'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0369',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 19,
        passiveBonus: {
            stat: 'stat_enchanting_1',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 85,
            duration: 7.0,
            statusEffect: 'status_enchanting_3'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0370',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 20,
        passiveBonus: {
            stat: 'stat_combat_2',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 90,
            duration: 3.0,
            statusEffect: 'status_combat_4'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0371',
        name: 'Arcane Blast Tier 2',
        tree: SKILL_TREES.ARCANE,
        tier: 2,
        maxRank: 5,
        requiredPoints: 3,
        cooldown: 2.5,
        energyCost: 21,
        passiveBonus: {
            stat: 'stat_arcane_3',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.80,
            radius: 95,
            duration: 4.0,
            statusEffect: 'status_arcane_5'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0372',
        name: 'Rogue Ward Tier 3',
        tree: SKILL_TREES.ROGUE,
        tier: 3,
        maxRank: 5,
        requiredPoints: 6,
        cooldown: 3.0,
        energyCost: 22,
        passiveBonus: {
            stat: 'stat_rogue_0',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.10,
            radius: 100,
            duration: 5.0,
            statusEffect: 'status_rogue_0'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0373',
        name: 'Survival Agility Tier 4',
        tree: SKILL_TREES.SURVIVAL,
        tier: 4,
        maxRank: 5,
        requiredPoints: 9,
        cooldown: 3.5,
        energyCost: 23,
        passiveBonus: {
            stat: 'stat_survival_1',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.40,
            radius: 105,
            duration: 6.0,
            statusEffect: 'status_survival_1'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0374',
        name: 'Enchanting Mastery Tier 5',
        tree: SKILL_TREES.ENCHANTING,
        tier: 5,
        maxRank: 5,
        requiredPoints: 12,
        cooldown: 4.0,
        energyCost: 24,
        passiveBonus: {
            stat: 'stat_enchanting_2',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 2.70,
            radius: 110,
            duration: 7.0,
            statusEffect: 'status_enchanting_2'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0375',
        name: 'Combat Surge Tier 6',
        tree: SKILL_TREES.COMBAT,
        tier: 6,
        maxRank: 5,
        requiredPoints: 15,
        cooldown: 4.5,
        energyCost: 25,
        passiveBonus: {
            stat: 'stat_combat_3',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.00,
            radius: 115,
            duration: 3.0,
            statusEffect: 'status_combat_3'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0376',
        name: 'Arcane Focus Tier 7',
        tree: SKILL_TREES.ARCANE,
        tier: 7,
        maxRank: 5,
        requiredPoints: 18,
        cooldown: 5.0,
        energyCost: 26,
        passiveBonus: {
            stat: 'stat_arcane_0',
            valuePerRank: 2.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.30,
            radius: 120,
            duration: 4.0,
            statusEffect: 'status_arcane_4'
        },
        description: 'Empowers the explorer with profound arcane capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0377',
        name: 'Rogue Vigor Tier 8',
        tree: SKILL_TREES.ROGUE,
        tier: 8,
        maxRank: 5,
        requiredPoints: 21,
        cooldown: 5.5,
        energyCost: 27,
        passiveBonus: {
            stat: 'stat_rogue_1',
            valuePerRank: 2.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.60,
            radius: 125,
            duration: 5.0,
            statusEffect: 'status_rogue_5'
        },
        description: 'Empowers the explorer with profound rogue capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0378',
        name: 'Survival Resilience Tier 9',
        tree: SKILL_TREES.SURVIVAL,
        tier: 9,
        maxRank: 5,
        requiredPoints: 24,
        cooldown: 6.0,
        energyCost: 28,
        passiveBonus: {
            stat: 'stat_survival_2',
            valuePerRank: 3.0,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 3.90,
            radius: 130,
            duration: 6.0,
            statusEffect: 'status_survival_0'
        },
        description: 'Empowers the explorer with profound survival capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0379',
        name: 'Enchanting Discharge Tier 10',
        tree: SKILL_TREES.ENCHANTING,
        tier: 10,
        maxRank: 5,
        requiredPoints: 27,
        cooldown: 6.5,
        energyCost: 29,
        passiveBonus: {
            stat: 'stat_enchanting_3',
            valuePerRank: 3.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 4.20,
            radius: 135,
            duration: 7.0,
            statusEffect: 'status_enchanting_1'
        },
        description: 'Empowers the explorer with profound enchanting capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
    {
        id: 'skill_node_0380',
        name: 'Combat Strike Tier 1',
        tree: SKILL_TREES.COMBAT,
        tier: 1,
        maxRank: 5,
        requiredPoints: 0,
        cooldown: 2.0,
        energyCost: 10,
        passiveBonus: {
            stat: 'stat_combat_0',
            valuePerRank: 1.5,
            unit: 'percentage'
        },
        activeEffect: {
            damageMultiplier: 1.50,
            radius: 40,
            duration: 3.0,
            statusEffect: 'status_combat_2'
        },
        description: 'Empowers the explorer with profound combat capabilities, increasing effectiveness in battle.',
        unlocked: false,
        currentRank: 0
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SKILL_TREES, SKILLS_DATABASE };
}
