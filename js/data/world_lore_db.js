/**
 * Chamber Crawler - Ancient Lore, Room Blueprints & Biome Configurations
 */
const BIOMES = {
    CATACOMBS: { id: 'catacombs', ambientLight: '#1e2430', wallColor: '#2e3440', hazard: 'none' },
    VOLCANIC_FORGE: { id: 'volcanic', ambientLight: '#2b1414', wallColor: '#4a1e1e', hazard: 'lava' },
    CRYSTAL_CAVERNS: { id: 'crystal', ambientLight: '#14202b', wallColor: '#1e384a', hazard: 'spikes' },
    VOID_SANCTUM: { id: 'void', ambientLight: '#1d122b', wallColor: '#341e4a', hazard: 'vortex' }
};

const WORLD_LORE_DATABASE = [
    {
        entryIndex: 1,
        title: 'Archival Tablet #001: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 1: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 2,
        title: 'Archival Tablet #002: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 2: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 3,
        title: 'Archival Tablet #003: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 3: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 4,
        title: 'Archival Tablet #004: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 4: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 5,
        title: 'Archival Tablet #005: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 5: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 6,
        title: 'Archival Tablet #006: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 6: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 7,
        title: 'Archival Tablet #007: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 7: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 8,
        title: 'Archival Tablet #008: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 8: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 9,
        title: 'Archival Tablet #009: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 9: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 10,
        title: 'Archival Tablet #010: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 10: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 11,
        title: 'Archival Tablet #011: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 11: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 12,
        title: 'Archival Tablet #012: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 12: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 13,
        title: 'Archival Tablet #013: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 13: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 14,
        title: 'Archival Tablet #014: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 14: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 15,
        title: 'Archival Tablet #015: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 15: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 16,
        title: 'Archival Tablet #016: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 16: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 17,
        title: 'Archival Tablet #017: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 17: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 18,
        title: 'Archival Tablet #018: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 18: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 19,
        title: 'Archival Tablet #019: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 19: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 20,
        title: 'Archival Tablet #020: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 20: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 21,
        title: 'Archival Tablet #021: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 21: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 22,
        title: 'Archival Tablet #022: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 22: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 23,
        title: 'Archival Tablet #023: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 23: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 24,
        title: 'Archival Tablet #024: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 24: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 25,
        title: 'Archival Tablet #025: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 25: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 26,
        title: 'Archival Tablet #026: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 26: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 27,
        title: 'Archival Tablet #027: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 27: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 28,
        title: 'Archival Tablet #028: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 28: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 29,
        title: 'Archival Tablet #029: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 29: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 30,
        title: 'Archival Tablet #030: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 30: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 31,
        title: 'Archival Tablet #031: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 31: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 32,
        title: 'Archival Tablet #032: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 32: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 33,
        title: 'Archival Tablet #033: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 33: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 34,
        title: 'Archival Tablet #034: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 34: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 35,
        title: 'Archival Tablet #035: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 35: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 36,
        title: 'Archival Tablet #036: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 36: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 37,
        title: 'Archival Tablet #037: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 37: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 38,
        title: 'Archival Tablet #038: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 38: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 39,
        title: 'Archival Tablet #039: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 39: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 40,
        title: 'Archival Tablet #040: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 40: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 41,
        title: 'Archival Tablet #041: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 41: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 42,
        title: 'Archival Tablet #042: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 42: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 43,
        title: 'Archival Tablet #043: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 43: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 44,
        title: 'Archival Tablet #044: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 44: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 45,
        title: 'Archival Tablet #045: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 45: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 46,
        title: 'Archival Tablet #046: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 46: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 47,
        title: 'Archival Tablet #047: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 47: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 48,
        title: 'Archival Tablet #048: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 48: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 49,
        title: 'Archival Tablet #049: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 49: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 50,
        title: 'Archival Tablet #050: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 50: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 51,
        title: 'Archival Tablet #051: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 51: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 52,
        title: 'Archival Tablet #052: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 52: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 53,
        title: 'Archival Tablet #053: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 53: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 54,
        title: 'Archival Tablet #054: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 54: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 55,
        title: 'Archival Tablet #055: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 55: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 56,
        title: 'Archival Tablet #056: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 56: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 57,
        title: 'Archival Tablet #057: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 57: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 58,
        title: 'Archival Tablet #058: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 58: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 59,
        title: 'Archival Tablet #059: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 59: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 60,
        title: 'Archival Tablet #060: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 60: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 61,
        title: 'Archival Tablet #061: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 61: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 62,
        title: 'Archival Tablet #062: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 62: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 63,
        title: 'Archival Tablet #063: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 63: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 64,
        title: 'Archival Tablet #064: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 64: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 65,
        title: 'Archival Tablet #065: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 65: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 66,
        title: 'Archival Tablet #066: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 66: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 67,
        title: 'Archival Tablet #067: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 67: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 68,
        title: 'Archival Tablet #068: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 68: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 69,
        title: 'Archival Tablet #069: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 69: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 70,
        title: 'Archival Tablet #070: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 70: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 71,
        title: 'Archival Tablet #071: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 71: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 72,
        title: 'Archival Tablet #072: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 72: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 73,
        title: 'Archival Tablet #073: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 73: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 74,
        title: 'Archival Tablet #074: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 74: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 75,
        title: 'Archival Tablet #075: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 75: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 76,
        title: 'Archival Tablet #076: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 76: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 77,
        title: 'Archival Tablet #077: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 77: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 78,
        title: 'Archival Tablet #078: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 78: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 79,
        title: 'Archival Tablet #079: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 79: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 80,
        title: 'Archival Tablet #080: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 80: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 81,
        title: 'Archival Tablet #081: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 81: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 82,
        title: 'Archival Tablet #082: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 82: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 83,
        title: 'Archival Tablet #083: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 83: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 84,
        title: 'Archival Tablet #084: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 84: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 85,
        title: 'Archival Tablet #085: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 85: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 86,
        title: 'Archival Tablet #086: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 86: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 87,
        title: 'Archival Tablet #087: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 87: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 88,
        title: 'Archival Tablet #088: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 88: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 89,
        title: 'Archival Tablet #089: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 89: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 90,
        title: 'Archival Tablet #090: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 90: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 91,
        title: 'Archival Tablet #091: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 91: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 92,
        title: 'Archival Tablet #092: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 92: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 93,
        title: 'Archival Tablet #093: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 93: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 94,
        title: 'Archival Tablet #094: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 94: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 95,
        title: 'Archival Tablet #095: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 95: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 96,
        title: 'Archival Tablet #096: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 96: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 97,
        title: 'Archival Tablet #097: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 97: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 98,
        title: 'Archival Tablet #098: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 98: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 99,
        title: 'Archival Tablet #099: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 99: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 100,
        title: 'Archival Tablet #100: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 100: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 101,
        title: 'Archival Tablet #101: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 101: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 102,
        title: 'Archival Tablet #102: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 102: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 103,
        title: 'Archival Tablet #103: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 103: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 104,
        title: 'Archival Tablet #104: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 104: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 105,
        title: 'Archival Tablet #105: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 105: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 106,
        title: 'Archival Tablet #106: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 106: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 107,
        title: 'Archival Tablet #107: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 107: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 108,
        title: 'Archival Tablet #108: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 108: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 109,
        title: 'Archival Tablet #109: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 109: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 110,
        title: 'Archival Tablet #110: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 110: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 111,
        title: 'Archival Tablet #111: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 111: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 112,
        title: 'Archival Tablet #112: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 112: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 113,
        title: 'Archival Tablet #113: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 113: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 114,
        title: 'Archival Tablet #114: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 114: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 115,
        title: 'Archival Tablet #115: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 115: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 116,
        title: 'Archival Tablet #116: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 116: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 117,
        title: 'Archival Tablet #117: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 117: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 118,
        title: 'Archival Tablet #118: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 118: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 119,
        title: 'Archival Tablet #119: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 119: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 120,
        title: 'Archival Tablet #120: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 120: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 121,
        title: 'Archival Tablet #121: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 121: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 122,
        title: 'Archival Tablet #122: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 122: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 123,
        title: 'Archival Tablet #123: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 123: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 124,
        title: 'Archival Tablet #124: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 124: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 125,
        title: 'Archival Tablet #125: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 125: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 126,
        title: 'Archival Tablet #126: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 126: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 127,
        title: 'Archival Tablet #127: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 127: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 128,
        title: 'Archival Tablet #128: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 128: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 129,
        title: 'Archival Tablet #129: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 129: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 130,
        title: 'Archival Tablet #130: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 130: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 131,
        title: 'Archival Tablet #131: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 131: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 132,
        title: 'Archival Tablet #132: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 132: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 133,
        title: 'Archival Tablet #133: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 133: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 134,
        title: 'Archival Tablet #134: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 134: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 135,
        title: 'Archival Tablet #135: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 135: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 136,
        title: 'Archival Tablet #136: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 136: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 137,
        title: 'Archival Tablet #137: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 137: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 138,
        title: 'Archival Tablet #138: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 138: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 139,
        title: 'Archival Tablet #139: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 139: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 140,
        title: 'Archival Tablet #140: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 140: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 141,
        title: 'Archival Tablet #141: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 141: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 142,
        title: 'Archival Tablet #142: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 142: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 143,
        title: 'Archival Tablet #143: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 143: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 144,
        title: 'Archival Tablet #144: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 144: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 145,
        title: 'Archival Tablet #145: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 145: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 146,
        title: 'Archival Tablet #146: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 146: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 147,
        title: 'Archival Tablet #147: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 147: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 148,
        title: 'Archival Tablet #148: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 148: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 149,
        title: 'Archival Tablet #149: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 149: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 150,
        title: 'Archival Tablet #150: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 150: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 151,
        title: 'Archival Tablet #151: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 151: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 152,
        title: 'Archival Tablet #152: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 152: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 153,
        title: 'Archival Tablet #153: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 153: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 154,
        title: 'Archival Tablet #154: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 154: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 155,
        title: 'Archival Tablet #155: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 155: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 156,
        title: 'Archival Tablet #156: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 156: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 157,
        title: 'Archival Tablet #157: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 157: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 158,
        title: 'Archival Tablet #158: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 158: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 159,
        title: 'Archival Tablet #159: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 159: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 160,
        title: 'Archival Tablet #160: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 160: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 161,
        title: 'Archival Tablet #161: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 161: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 162,
        title: 'Archival Tablet #162: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 162: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 163,
        title: 'Archival Tablet #163: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 163: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 164,
        title: 'Archival Tablet #164: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 164: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 165,
        title: 'Archival Tablet #165: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 165: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 166,
        title: 'Archival Tablet #166: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 166: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 167,
        title: 'Archival Tablet #167: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 167: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 168,
        title: 'Archival Tablet #168: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 168: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 169,
        title: 'Archival Tablet #169: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 169: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 170,
        title: 'Archival Tablet #170: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 170: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 171,
        title: 'Archival Tablet #171: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 171: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 172,
        title: 'Archival Tablet #172: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 172: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 173,
        title: 'Archival Tablet #173: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 173: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 174,
        title: 'Archival Tablet #174: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 174: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 175,
        title: 'Archival Tablet #175: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 175: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 176,
        title: 'Archival Tablet #176: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 176: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 177,
        title: 'Archival Tablet #177: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 177: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 178,
        title: 'Archival Tablet #178: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 178: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 179,
        title: 'Archival Tablet #179: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 179: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 180,
        title: 'Archival Tablet #180: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 180: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 181,
        title: 'Archival Tablet #181: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 181: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 182,
        title: 'Archival Tablet #182: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 182: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 183,
        title: 'Archival Tablet #183: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 183: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 184,
        title: 'Archival Tablet #184: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 184: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 185,
        title: 'Archival Tablet #185: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 185: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 186,
        title: 'Archival Tablet #186: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 186: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 187,
        title: 'Archival Tablet #187: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 187: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 188,
        title: 'Archival Tablet #188: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 188: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 189,
        title: 'Archival Tablet #189: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 189: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 190,
        title: 'Archival Tablet #190: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 190: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 191,
        title: 'Archival Tablet #191: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 191: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 192,
        title: 'Archival Tablet #192: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 192: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 193,
        title: 'Archival Tablet #193: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 193: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 194,
        title: 'Archival Tablet #194: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 194: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 195,
        title: 'Archival Tablet #195: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 195: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 196,
        title: 'Archival Tablet #196: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 196: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 197,
        title: 'Archival Tablet #197: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 197: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 198,
        title: 'Archival Tablet #198: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 198: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 199,
        title: 'Archival Tablet #199: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 199: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 200,
        title: 'Archival Tablet #200: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 200: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 201,
        title: 'Archival Tablet #201: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 201: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 202,
        title: 'Archival Tablet #202: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 202: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 203,
        title: 'Archival Tablet #203: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 203: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 204,
        title: 'Archival Tablet #204: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 204: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 205,
        title: 'Archival Tablet #205: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 205: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 206,
        title: 'Archival Tablet #206: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 206: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 207,
        title: 'Archival Tablet #207: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 207: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 208,
        title: 'Archival Tablet #208: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 208: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 209,
        title: 'Archival Tablet #209: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 209: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 210,
        title: 'Archival Tablet #210: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 210: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 211,
        title: 'Archival Tablet #211: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 211: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 212,
        title: 'Archival Tablet #212: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 212: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 213,
        title: 'Archival Tablet #213: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 213: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 214,
        title: 'Archival Tablet #214: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 214: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 215,
        title: 'Archival Tablet #215: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 215: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 216,
        title: 'Archival Tablet #216: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 216: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 217,
        title: 'Archival Tablet #217: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 217: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 218,
        title: 'Archival Tablet #218: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 218: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 219,
        title: 'Archival Tablet #219: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 219: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 220,
        title: 'Archival Tablet #220: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 220: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 221,
        title: 'Archival Tablet #221: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 221: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 222,
        title: 'Archival Tablet #222: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 222: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 223,
        title: 'Archival Tablet #223: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 223: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 224,
        title: 'Archival Tablet #224: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 224: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 225,
        title: 'Archival Tablet #225: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 225: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 226,
        title: 'Archival Tablet #226: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 226: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 227,
        title: 'Archival Tablet #227: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 227: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 228,
        title: 'Archival Tablet #228: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 228: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 229,
        title: 'Archival Tablet #229: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 229: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 230,
        title: 'Archival Tablet #230: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 230: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 231,
        title: 'Archival Tablet #231: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 231: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 232,
        title: 'Archival Tablet #232: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 232: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 233,
        title: 'Archival Tablet #233: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 233: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 234,
        title: 'Archival Tablet #234: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 234: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 235,
        title: 'Archival Tablet #235: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 235: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 236,
        title: 'Archival Tablet #236: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 236: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 237,
        title: 'Archival Tablet #237: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 237: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 238,
        title: 'Archival Tablet #238: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 238: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 239,
        title: 'Archival Tablet #239: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 239: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 240,
        title: 'Archival Tablet #240: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 240: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 241,
        title: 'Archival Tablet #241: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 241: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 242,
        title: 'Archival Tablet #242: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 242: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 243,
        title: 'Archival Tablet #243: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 243: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 244,
        title: 'Archival Tablet #244: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 244: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 245,
        title: 'Archival Tablet #245: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 245: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 246,
        title: 'Archival Tablet #246: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 246: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 247,
        title: 'Archival Tablet #247: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 247: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 248,
        title: 'Archival Tablet #248: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 248: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 249,
        title: 'Archival Tablet #249: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 249: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 250,
        title: 'Archival Tablet #250: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 250: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 251,
        title: 'Archival Tablet #251: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 251: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 252,
        title: 'Archival Tablet #252: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 252: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 253,
        title: 'Archival Tablet #253: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 253: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 254,
        title: 'Archival Tablet #254: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 254: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 255,
        title: 'Archival Tablet #255: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 255: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 256,
        title: 'Archival Tablet #256: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 256: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 257,
        title: 'Archival Tablet #257: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 257: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 258,
        title: 'Archival Tablet #258: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 258: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 259,
        title: 'Archival Tablet #259: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 259: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 260,
        title: 'Archival Tablet #260: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 260: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 261,
        title: 'Archival Tablet #261: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 261: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 262,
        title: 'Archival Tablet #262: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 262: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 263,
        title: 'Archival Tablet #263: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 263: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 264,
        title: 'Archival Tablet #264: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 264: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 265,
        title: 'Archival Tablet #265: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 265: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 266,
        title: 'Archival Tablet #266: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 266: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 267,
        title: 'Archival Tablet #267: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 267: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 268,
        title: 'Archival Tablet #268: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 268: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 269,
        title: 'Archival Tablet #269: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 269: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 270,
        title: 'Archival Tablet #270: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 270: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 271,
        title: 'Archival Tablet #271: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 271: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 272,
        title: 'Archival Tablet #272: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 272: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 273,
        title: 'Archival Tablet #273: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 273: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 274,
        title: 'Archival Tablet #274: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 274: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 275,
        title: 'Archival Tablet #275: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 275: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 276,
        title: 'Archival Tablet #276: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 276: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 277,
        title: 'Archival Tablet #277: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 277: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 278,
        title: 'Archival Tablet #278: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 278: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 279,
        title: 'Archival Tablet #279: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 279: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 280,
        title: 'Archival Tablet #280: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 280: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 281,
        title: 'Archival Tablet #281: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 281: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 282,
        title: 'Archival Tablet #282: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 282: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 283,
        title: 'Archival Tablet #283: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 283: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 284,
        title: 'Archival Tablet #284: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 284: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 285,
        title: 'Archival Tablet #285: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 285: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 286,
        title: 'Archival Tablet #286: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 286: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 287,
        title: 'Archival Tablet #287: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 287: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 288,
        title: 'Archival Tablet #288: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 288: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 289,
        title: 'Archival Tablet #289: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 289: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 290,
        title: 'Archival Tablet #290: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 290: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 291,
        title: 'Archival Tablet #291: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 291: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 292,
        title: 'Archival Tablet #292: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 292: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 293,
        title: 'Archival Tablet #293: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 293: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 294,
        title: 'Archival Tablet #294: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 294: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 295,
        title: 'Archival Tablet #295: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 295: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 296,
        title: 'Archival Tablet #296: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 296: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 297,
        title: 'Archival Tablet #297: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 297: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 298,
        title: 'Archival Tablet #298: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 298: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 299,
        title: 'Archival Tablet #299: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 299: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 300,
        title: 'Archival Tablet #300: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 300: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 301,
        title: 'Archival Tablet #301: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 301: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 302,
        title: 'Archival Tablet #302: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 302: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 303,
        title: 'Archival Tablet #303: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 303: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 304,
        title: 'Archival Tablet #304: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 304: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 305,
        title: 'Archival Tablet #305: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 305: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 306,
        title: 'Archival Tablet #306: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 306: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 307,
        title: 'Archival Tablet #307: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 307: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 308,
        title: 'Archival Tablet #308: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 308: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 309,
        title: 'Archival Tablet #309: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 309: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 310,
        title: 'Archival Tablet #310: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 310: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 311,
        title: 'Archival Tablet #311: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 311: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 312,
        title: 'Archival Tablet #312: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 312: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 313,
        title: 'Archival Tablet #313: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 313: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 314,
        title: 'Archival Tablet #314: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 314: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 315,
        title: 'Archival Tablet #315: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 315: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 316,
        title: 'Archival Tablet #316: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 316: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 317,
        title: 'Archival Tablet #317: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 317: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 318,
        title: 'Archival Tablet #318: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 318: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 319,
        title: 'Archival Tablet #319: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 319: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 320,
        title: 'Archival Tablet #320: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 320: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 321,
        title: 'Archival Tablet #321: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 321: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 322,
        title: 'Archival Tablet #322: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 322: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 323,
        title: 'Archival Tablet #323: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 323: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 324,
        title: 'Archival Tablet #324: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 324: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 325,
        title: 'Archival Tablet #325: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 325: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 326,
        title: 'Archival Tablet #326: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 326: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 327,
        title: 'Archival Tablet #327: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 327: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 328,
        title: 'Archival Tablet #328: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 328: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 329,
        title: 'Archival Tablet #329: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 329: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 330,
        title: 'Archival Tablet #330: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 330: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 331,
        title: 'Archival Tablet #331: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 331: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 332,
        title: 'Archival Tablet #332: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 332: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 333,
        title: 'Archival Tablet #333: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 333: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 334,
        title: 'Archival Tablet #334: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 334: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 335,
        title: 'Archival Tablet #335: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 335: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 336,
        title: 'Archival Tablet #336: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 336: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 337,
        title: 'Archival Tablet #337: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 337: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 338,
        title: 'Archival Tablet #338: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 338: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 339,
        title: 'Archival Tablet #339: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 339: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 340,
        title: 'Archival Tablet #340: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 340: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 341,
        title: 'Archival Tablet #341: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 341: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.07,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 342,
        title: 'Archival Tablet #342: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 342: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.09,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 343,
        title: 'Archival Tablet #343: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 343: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.11,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 344,
        title: 'Archival Tablet #344: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 344: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.13,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 345,
        title: 'Archival Tablet #345: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 345: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.15,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 346,
        title: 'Archival Tablet #346: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 346: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.17,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 347,
        title: 'Archival Tablet #347: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 347: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.19,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 348,
        title: 'Archival Tablet #348: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 348: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.21,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 349,
        title: 'Archival Tablet #349: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 349: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.23,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 350,
        title: 'Archival Tablet #350: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 350: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.05,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 351,
        title: 'Archival Tablet #351: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 351: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.07,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 352,
        title: 'Archival Tablet #352: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 352: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.09,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 353,
        title: 'Archival Tablet #353: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 353: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 9,
            height: 9,
            hazardDensity: 0.11,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 354,
        title: 'Archival Tablet #354: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 354: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 10,
            height: 10,
            hazardDensity: 0.13,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 355,
        title: 'Archival Tablet #355: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 355: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 11,
            height: 11,
            hazardDensity: 0.15,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 356,
        title: 'Archival Tablet #356: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 2,
        passageText: 'Ancient stone engravings deciphered in chamber 356: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 2,
        blueprintTemplate: {
            width: 12,
            height: 12,
            hazardDensity: 0.17,
            lightEmitters: 1
        }
    },
    {
        entryIndex: 357,
        title: 'Archival Tablet #357: The Chronicles of the Deep',
        biome: BIOMES.VOLCANIC_FORGE,
        discoveredInFloor: 3,
        passageText: 'Ancient stone engravings deciphered in chamber 357: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 3,
        blueprintTemplate: {
            width: 13,
            height: 13,
            hazardDensity: 0.19,
            lightEmitters: 2
        }
    },
    {
        entryIndex: 358,
        title: 'Archival Tablet #358: The Chronicles of the Deep',
        biome: BIOMES.CRYSTAL_CAVERNS,
        discoveredInFloor: 4,
        passageText: 'Ancient stone engravings deciphered in chamber 358: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 4,
        blueprintTemplate: {
            width: 14,
            height: 14,
            hazardDensity: 0.21,
            lightEmitters: 3
        }
    },
    {
        entryIndex: 359,
        title: 'Archival Tablet #359: The Chronicles of the Deep',
        biome: BIOMES.VOID_SANCTUM,
        discoveredInFloor: 5,
        passageText: 'Ancient stone engravings deciphered in chamber 359: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 5,
        blueprintTemplate: {
            width: 15,
            height: 15,
            hazardDensity: 0.23,
            lightEmitters: 4
        }
    },
    {
        entryIndex: 360,
        title: 'Archival Tablet #360: The Chronicles of the Deep',
        biome: BIOMES.CATACOMBS,
        discoveredInFloor: 1,
        passageText: 'Ancient stone engravings deciphered in chamber 360: "When the core collapsed, the subterranean chambers sealed permanently."',
        historicalSignificance: 'Provides crucial insight into the cataclysm that formed the current dungeon ecosystem.',
        unlockedAtFloor: 1,
        blueprintTemplate: {
            width: 8,
            height: 8,
            hazardDensity: 0.05,
            lightEmitters: 1
        }
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BIOMES, WORLD_LORE_DATABASE };
}
