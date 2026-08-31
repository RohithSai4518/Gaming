/**
 * Chamber Crawler - Spells, Projectile Behaviors & Elemental Magic Database
 */
const SPELL_ELEMENTS = {
    FIRE: { name: 'Fire', color: '#ff3300', dotDamage: 5 },
    FROST: { name: 'Frost', color: '#00d2ff', slowPercent: 0.35 },
    LIGHTNING: { name: 'Lightning', color: '#ffff00', chainTargets: 3 },
    VOID: { name: 'Void', color: '#bf5af2', armorReduction: 0.25 },
    HOLY: { name: 'Holy', color: '#ffffff', healPercent: 0.10 }
};

const SPELLS_DATABASE = [
    {
        spellId: 'spell_0001',
        name: 'Frost Nova 1',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 24,
        projectileSpeed: 310,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0002',
        name: 'Lightning Orb 2',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 28,
        projectileSpeed: 320,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0003',
        name: 'Void Barrage 3',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 32,
        projectileSpeed: 330,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0004',
        name: 'Holy Wave 4',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 36,
        projectileSpeed: 340,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0005',
        name: 'Fire Storm 5',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 40,
        projectileSpeed: 350,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0006',
        name: 'Frost Beam 6',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 44,
        projectileSpeed: 360,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0007',
        name: 'Lightning Vortex 7',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 48,
        projectileSpeed: 370,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0008',
        name: 'Void Shield 8',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 52,
        projectileSpeed: 380,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0009',
        name: 'Holy Rain 9',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 56,
        projectileSpeed: 390,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0010',
        name: 'Fire Bolt 10',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 60,
        projectileSpeed: 400,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0011',
        name: 'Frost Nova 11',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 64,
        projectileSpeed: 410,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0012',
        name: 'Lightning Orb 12',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 68,
        projectileSpeed: 420,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0013',
        name: 'Void Barrage 13',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 72,
        projectileSpeed: 430,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0014',
        name: 'Holy Wave 14',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 76,
        projectileSpeed: 440,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0015',
        name: 'Fire Storm 15',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 80,
        projectileSpeed: 450,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0016',
        name: 'Frost Beam 16',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 84,
        projectileSpeed: 460,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0017',
        name: 'Lightning Vortex 17',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 88,
        projectileSpeed: 470,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0018',
        name: 'Void Shield 18',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 92,
        projectileSpeed: 480,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0019',
        name: 'Holy Rain 19',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 96,
        projectileSpeed: 490,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0020',
        name: 'Fire Bolt 20',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 100,
        projectileSpeed: 500,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0021',
        name: 'Frost Nova 21',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 104,
        projectileSpeed: 510,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0022',
        name: 'Lightning Orb 22',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 108,
        projectileSpeed: 520,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0023',
        name: 'Void Barrage 23',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 112,
        projectileSpeed: 530,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0024',
        name: 'Holy Wave 24',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 116,
        projectileSpeed: 540,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0025',
        name: 'Fire Storm 25',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 120,
        projectileSpeed: 550,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0026',
        name: 'Frost Beam 26',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 124,
        projectileSpeed: 560,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0027',
        name: 'Lightning Vortex 27',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 128,
        projectileSpeed: 570,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0028',
        name: 'Void Shield 28',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 132,
        projectileSpeed: 580,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0029',
        name: 'Holy Rain 29',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 136,
        projectileSpeed: 590,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0030',
        name: 'Fire Bolt 30',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 140,
        projectileSpeed: 300,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0031',
        name: 'Frost Nova 31',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 144,
        projectileSpeed: 310,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0032',
        name: 'Lightning Orb 32',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 148,
        projectileSpeed: 320,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0033',
        name: 'Void Barrage 33',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 152,
        projectileSpeed: 330,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0034',
        name: 'Holy Wave 34',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 156,
        projectileSpeed: 340,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0035',
        name: 'Fire Storm 35',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 160,
        projectileSpeed: 350,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0036',
        name: 'Frost Beam 36',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 164,
        projectileSpeed: 360,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0037',
        name: 'Lightning Vortex 37',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 168,
        projectileSpeed: 370,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0038',
        name: 'Void Shield 38',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 172,
        projectileSpeed: 380,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0039',
        name: 'Holy Rain 39',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 176,
        projectileSpeed: 390,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0040',
        name: 'Fire Bolt 40',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 180,
        projectileSpeed: 400,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0041',
        name: 'Frost Nova 41',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 184,
        projectileSpeed: 410,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0042',
        name: 'Lightning Orb 42',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 188,
        projectileSpeed: 420,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0043',
        name: 'Void Barrage 43',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 192,
        projectileSpeed: 430,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0044',
        name: 'Holy Wave 44',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 196,
        projectileSpeed: 440,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0045',
        name: 'Fire Storm 45',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 200,
        projectileSpeed: 450,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0046',
        name: 'Frost Beam 46',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 204,
        projectileSpeed: 460,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0047',
        name: 'Lightning Vortex 47',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 208,
        projectileSpeed: 470,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0048',
        name: 'Void Shield 48',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 212,
        projectileSpeed: 480,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0049',
        name: 'Holy Rain 49',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 216,
        projectileSpeed: 490,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0050',
        name: 'Fire Bolt 50',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 220,
        projectileSpeed: 500,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0051',
        name: 'Frost Nova 51',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 224,
        projectileSpeed: 510,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0052',
        name: 'Lightning Orb 52',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 228,
        projectileSpeed: 520,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0053',
        name: 'Void Barrage 53',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 232,
        projectileSpeed: 530,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0054',
        name: 'Holy Wave 54',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 236,
        projectileSpeed: 540,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0055',
        name: 'Fire Storm 55',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 240,
        projectileSpeed: 550,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0056',
        name: 'Frost Beam 56',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 244,
        projectileSpeed: 560,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0057',
        name: 'Lightning Vortex 57',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 248,
        projectileSpeed: 570,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0058',
        name: 'Void Shield 58',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 252,
        projectileSpeed: 580,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0059',
        name: 'Holy Rain 59',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 256,
        projectileSpeed: 590,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0060',
        name: 'Fire Bolt 60',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 20,
        projectileSpeed: 300,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0061',
        name: 'Frost Nova 61',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 24,
        projectileSpeed: 310,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0062',
        name: 'Lightning Orb 62',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 28,
        projectileSpeed: 320,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0063',
        name: 'Void Barrage 63',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 32,
        projectileSpeed: 330,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0064',
        name: 'Holy Wave 64',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 36,
        projectileSpeed: 340,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0065',
        name: 'Fire Storm 65',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 40,
        projectileSpeed: 350,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0066',
        name: 'Frost Beam 66',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 44,
        projectileSpeed: 360,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0067',
        name: 'Lightning Vortex 67',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 48,
        projectileSpeed: 370,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0068',
        name: 'Void Shield 68',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 52,
        projectileSpeed: 380,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0069',
        name: 'Holy Rain 69',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 56,
        projectileSpeed: 390,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0070',
        name: 'Fire Bolt 70',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 60,
        projectileSpeed: 400,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0071',
        name: 'Frost Nova 71',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 64,
        projectileSpeed: 410,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0072',
        name: 'Lightning Orb 72',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 68,
        projectileSpeed: 420,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0073',
        name: 'Void Barrage 73',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 72,
        projectileSpeed: 430,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0074',
        name: 'Holy Wave 74',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 76,
        projectileSpeed: 440,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0075',
        name: 'Fire Storm 75',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 80,
        projectileSpeed: 450,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0076',
        name: 'Frost Beam 76',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 84,
        projectileSpeed: 460,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0077',
        name: 'Lightning Vortex 77',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 88,
        projectileSpeed: 470,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0078',
        name: 'Void Shield 78',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 92,
        projectileSpeed: 480,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0079',
        name: 'Holy Rain 79',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 96,
        projectileSpeed: 490,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0080',
        name: 'Fire Bolt 80',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 100,
        projectileSpeed: 500,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0081',
        name: 'Frost Nova 81',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 104,
        projectileSpeed: 510,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0082',
        name: 'Lightning Orb 82',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 108,
        projectileSpeed: 520,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0083',
        name: 'Void Barrage 83',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 112,
        projectileSpeed: 530,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0084',
        name: 'Holy Wave 84',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 116,
        projectileSpeed: 540,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0085',
        name: 'Fire Storm 85',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 120,
        projectileSpeed: 550,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0086',
        name: 'Frost Beam 86',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 124,
        projectileSpeed: 560,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0087',
        name: 'Lightning Vortex 87',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 128,
        projectileSpeed: 570,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0088',
        name: 'Void Shield 88',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 132,
        projectileSpeed: 580,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0089',
        name: 'Holy Rain 89',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 136,
        projectileSpeed: 590,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0090',
        name: 'Fire Bolt 90',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 140,
        projectileSpeed: 300,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0091',
        name: 'Frost Nova 91',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 144,
        projectileSpeed: 310,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0092',
        name: 'Lightning Orb 92',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 148,
        projectileSpeed: 320,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0093',
        name: 'Void Barrage 93',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 152,
        projectileSpeed: 330,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0094',
        name: 'Holy Wave 94',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 156,
        projectileSpeed: 340,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0095',
        name: 'Fire Storm 95',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 160,
        projectileSpeed: 350,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0096',
        name: 'Frost Beam 96',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 164,
        projectileSpeed: 360,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0097',
        name: 'Lightning Vortex 97',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 168,
        projectileSpeed: 370,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0098',
        name: 'Void Shield 98',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 172,
        projectileSpeed: 380,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0099',
        name: 'Holy Rain 99',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 176,
        projectileSpeed: 390,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0100',
        name: 'Fire Bolt 100',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 180,
        projectileSpeed: 400,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0101',
        name: 'Frost Nova 101',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 184,
        projectileSpeed: 410,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0102',
        name: 'Lightning Orb 102',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 188,
        projectileSpeed: 420,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0103',
        name: 'Void Barrage 103',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 192,
        projectileSpeed: 430,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0104',
        name: 'Holy Wave 104',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 196,
        projectileSpeed: 440,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0105',
        name: 'Fire Storm 105',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 200,
        projectileSpeed: 450,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0106',
        name: 'Frost Beam 106',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 204,
        projectileSpeed: 460,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0107',
        name: 'Lightning Vortex 107',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 208,
        projectileSpeed: 470,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0108',
        name: 'Void Shield 108',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 212,
        projectileSpeed: 480,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0109',
        name: 'Holy Rain 109',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 216,
        projectileSpeed: 490,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0110',
        name: 'Fire Bolt 110',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 220,
        projectileSpeed: 500,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0111',
        name: 'Frost Nova 111',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 224,
        projectileSpeed: 510,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0112',
        name: 'Lightning Orb 112',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 228,
        projectileSpeed: 520,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0113',
        name: 'Void Barrage 113',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 232,
        projectileSpeed: 530,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0114',
        name: 'Holy Wave 114',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 236,
        projectileSpeed: 540,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0115',
        name: 'Fire Storm 115',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 240,
        projectileSpeed: 550,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0116',
        name: 'Frost Beam 116',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 244,
        projectileSpeed: 560,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0117',
        name: 'Lightning Vortex 117',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 248,
        projectileSpeed: 570,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0118',
        name: 'Void Shield 118',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 252,
        projectileSpeed: 580,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0119',
        name: 'Holy Rain 119',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 256,
        projectileSpeed: 590,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0120',
        name: 'Fire Bolt 120',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 20,
        projectileSpeed: 300,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0121',
        name: 'Frost Nova 121',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 24,
        projectileSpeed: 310,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0122',
        name: 'Lightning Orb 122',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 28,
        projectileSpeed: 320,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0123',
        name: 'Void Barrage 123',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 32,
        projectileSpeed: 330,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0124',
        name: 'Holy Wave 124',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 36,
        projectileSpeed: 340,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0125',
        name: 'Fire Storm 125',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 40,
        projectileSpeed: 350,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0126',
        name: 'Frost Beam 126',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 44,
        projectileSpeed: 360,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0127',
        name: 'Lightning Vortex 127',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 48,
        projectileSpeed: 370,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0128',
        name: 'Void Shield 128',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 52,
        projectileSpeed: 380,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0129',
        name: 'Holy Rain 129',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 56,
        projectileSpeed: 390,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0130',
        name: 'Fire Bolt 130',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 60,
        projectileSpeed: 400,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0131',
        name: 'Frost Nova 131',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 64,
        projectileSpeed: 410,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0132',
        name: 'Lightning Orb 132',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 68,
        projectileSpeed: 420,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0133',
        name: 'Void Barrage 133',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 72,
        projectileSpeed: 430,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0134',
        name: 'Holy Wave 134',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 76,
        projectileSpeed: 440,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0135',
        name: 'Fire Storm 135',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 80,
        projectileSpeed: 450,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0136',
        name: 'Frost Beam 136',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 84,
        projectileSpeed: 460,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0137',
        name: 'Lightning Vortex 137',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 88,
        projectileSpeed: 470,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0138',
        name: 'Void Shield 138',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 92,
        projectileSpeed: 480,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0139',
        name: 'Holy Rain 139',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 96,
        projectileSpeed: 490,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0140',
        name: 'Fire Bolt 140',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 100,
        projectileSpeed: 500,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0141',
        name: 'Frost Nova 141',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 104,
        projectileSpeed: 510,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0142',
        name: 'Lightning Orb 142',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 108,
        projectileSpeed: 520,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0143',
        name: 'Void Barrage 143',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 112,
        projectileSpeed: 530,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0144',
        name: 'Holy Wave 144',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 116,
        projectileSpeed: 540,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0145',
        name: 'Fire Storm 145',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 120,
        projectileSpeed: 550,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0146',
        name: 'Frost Beam 146',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 124,
        projectileSpeed: 560,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0147',
        name: 'Lightning Vortex 147',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 128,
        projectileSpeed: 570,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0148',
        name: 'Void Shield 148',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 132,
        projectileSpeed: 580,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0149',
        name: 'Holy Rain 149',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 136,
        projectileSpeed: 590,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0150',
        name: 'Fire Bolt 150',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 140,
        projectileSpeed: 300,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0151',
        name: 'Frost Nova 151',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 144,
        projectileSpeed: 310,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0152',
        name: 'Lightning Orb 152',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 148,
        projectileSpeed: 320,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0153',
        name: 'Void Barrage 153',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 152,
        projectileSpeed: 330,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0154',
        name: 'Holy Wave 154',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 156,
        projectileSpeed: 340,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0155',
        name: 'Fire Storm 155',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 160,
        projectileSpeed: 350,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0156',
        name: 'Frost Beam 156',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 164,
        projectileSpeed: 360,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0157',
        name: 'Lightning Vortex 157',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 168,
        projectileSpeed: 370,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0158',
        name: 'Void Shield 158',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 172,
        projectileSpeed: 380,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0159',
        name: 'Holy Rain 159',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 176,
        projectileSpeed: 390,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0160',
        name: 'Fire Bolt 160',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 180,
        projectileSpeed: 400,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0161',
        name: 'Frost Nova 161',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 184,
        projectileSpeed: 410,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0162',
        name: 'Lightning Orb 162',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 188,
        projectileSpeed: 420,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0163',
        name: 'Void Barrage 163',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 192,
        projectileSpeed: 430,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0164',
        name: 'Holy Wave 164',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 196,
        projectileSpeed: 440,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0165',
        name: 'Fire Storm 165',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 200,
        projectileSpeed: 450,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0166',
        name: 'Frost Beam 166',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 204,
        projectileSpeed: 460,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0167',
        name: 'Lightning Vortex 167',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 208,
        projectileSpeed: 470,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0168',
        name: 'Void Shield 168',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 212,
        projectileSpeed: 480,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0169',
        name: 'Holy Rain 169',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 216,
        projectileSpeed: 490,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0170',
        name: 'Fire Bolt 170',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 220,
        projectileSpeed: 500,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0171',
        name: 'Frost Nova 171',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 224,
        projectileSpeed: 510,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0172',
        name: 'Lightning Orb 172',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 228,
        projectileSpeed: 520,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0173',
        name: 'Void Barrage 173',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 232,
        projectileSpeed: 530,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0174',
        name: 'Holy Wave 174',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 236,
        projectileSpeed: 540,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0175',
        name: 'Fire Storm 175',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 240,
        projectileSpeed: 550,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0176',
        name: 'Frost Beam 176',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 244,
        projectileSpeed: 560,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0177',
        name: 'Lightning Vortex 177',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 248,
        projectileSpeed: 570,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0178',
        name: 'Void Shield 178',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 252,
        projectileSpeed: 580,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0179',
        name: 'Holy Rain 179',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 256,
        projectileSpeed: 590,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0180',
        name: 'Fire Bolt 180',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 20,
        projectileSpeed: 300,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0181',
        name: 'Frost Nova 181',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 24,
        projectileSpeed: 310,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0182',
        name: 'Lightning Orb 182',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 28,
        projectileSpeed: 320,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0183',
        name: 'Void Barrage 183',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 32,
        projectileSpeed: 330,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0184',
        name: 'Holy Wave 184',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 36,
        projectileSpeed: 340,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0185',
        name: 'Fire Storm 185',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 40,
        projectileSpeed: 350,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0186',
        name: 'Frost Beam 186',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 44,
        projectileSpeed: 360,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0187',
        name: 'Lightning Vortex 187',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 48,
        projectileSpeed: 370,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0188',
        name: 'Void Shield 188',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 52,
        projectileSpeed: 380,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0189',
        name: 'Holy Rain 189',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 56,
        projectileSpeed: 390,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0190',
        name: 'Fire Bolt 190',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 60,
        projectileSpeed: 400,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0191',
        name: 'Frost Nova 191',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 64,
        projectileSpeed: 410,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0192',
        name: 'Lightning Orb 192',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 68,
        projectileSpeed: 420,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0193',
        name: 'Void Barrage 193',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 72,
        projectileSpeed: 430,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0194',
        name: 'Holy Wave 194',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 76,
        projectileSpeed: 440,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0195',
        name: 'Fire Storm 195',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 80,
        projectileSpeed: 450,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0196',
        name: 'Frost Beam 196',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 84,
        projectileSpeed: 460,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0197',
        name: 'Lightning Vortex 197',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 88,
        projectileSpeed: 470,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0198',
        name: 'Void Shield 198',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 92,
        projectileSpeed: 480,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0199',
        name: 'Holy Rain 199',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 96,
        projectileSpeed: 490,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0200',
        name: 'Fire Bolt 200',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 100,
        projectileSpeed: 500,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0201',
        name: 'Frost Nova 201',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 104,
        projectileSpeed: 510,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0202',
        name: 'Lightning Orb 202',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 108,
        projectileSpeed: 520,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0203',
        name: 'Void Barrage 203',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 112,
        projectileSpeed: 530,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0204',
        name: 'Holy Wave 204',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 116,
        projectileSpeed: 540,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0205',
        name: 'Fire Storm 205',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 120,
        projectileSpeed: 550,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0206',
        name: 'Frost Beam 206',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 124,
        projectileSpeed: 560,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0207',
        name: 'Lightning Vortex 207',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 128,
        projectileSpeed: 570,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0208',
        name: 'Void Shield 208',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 132,
        projectileSpeed: 580,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0209',
        name: 'Holy Rain 209',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 136,
        projectileSpeed: 590,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0210',
        name: 'Fire Bolt 210',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 140,
        projectileSpeed: 300,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0211',
        name: 'Frost Nova 211',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 144,
        projectileSpeed: 310,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0212',
        name: 'Lightning Orb 212',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 148,
        projectileSpeed: 320,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0213',
        name: 'Void Barrage 213',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 152,
        projectileSpeed: 330,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0214',
        name: 'Holy Wave 214',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 156,
        projectileSpeed: 340,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0215',
        name: 'Fire Storm 215',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 160,
        projectileSpeed: 350,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0216',
        name: 'Frost Beam 216',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 164,
        projectileSpeed: 360,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0217',
        name: 'Lightning Vortex 217',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 168,
        projectileSpeed: 370,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0218',
        name: 'Void Shield 218',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 172,
        projectileSpeed: 380,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0219',
        name: 'Holy Rain 219',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 176,
        projectileSpeed: 390,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0220',
        name: 'Fire Bolt 220',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 180,
        projectileSpeed: 400,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0221',
        name: 'Frost Nova 221',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 184,
        projectileSpeed: 410,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0222',
        name: 'Lightning Orb 222',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 188,
        projectileSpeed: 420,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0223',
        name: 'Void Barrage 223',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 192,
        projectileSpeed: 430,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0224',
        name: 'Holy Wave 224',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 196,
        projectileSpeed: 440,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0225',
        name: 'Fire Storm 225',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 200,
        projectileSpeed: 450,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0226',
        name: 'Frost Beam 226',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 204,
        projectileSpeed: 460,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0227',
        name: 'Lightning Vortex 227',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 208,
        projectileSpeed: 470,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0228',
        name: 'Void Shield 228',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 212,
        projectileSpeed: 480,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0229',
        name: 'Holy Rain 229',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 216,
        projectileSpeed: 490,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0230',
        name: 'Fire Bolt 230',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 220,
        projectileSpeed: 500,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0231',
        name: 'Frost Nova 231',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 224,
        projectileSpeed: 510,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0232',
        name: 'Lightning Orb 232',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 228,
        projectileSpeed: 520,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0233',
        name: 'Void Barrage 233',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 232,
        projectileSpeed: 530,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0234',
        name: 'Holy Wave 234',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 236,
        projectileSpeed: 540,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0235',
        name: 'Fire Storm 235',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 240,
        projectileSpeed: 550,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0236',
        name: 'Frost Beam 236',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 244,
        projectileSpeed: 560,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0237',
        name: 'Lightning Vortex 237',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 248,
        projectileSpeed: 570,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0238',
        name: 'Void Shield 238',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 252,
        projectileSpeed: 580,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0239',
        name: 'Holy Rain 239',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 256,
        projectileSpeed: 590,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0240',
        name: 'Fire Bolt 240',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 20,
        projectileSpeed: 300,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0241',
        name: 'Frost Nova 241',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 24,
        projectileSpeed: 310,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0242',
        name: 'Lightning Orb 242',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 28,
        projectileSpeed: 320,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0243',
        name: 'Void Barrage 243',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 32,
        projectileSpeed: 330,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0244',
        name: 'Holy Wave 244',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 36,
        projectileSpeed: 340,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0245',
        name: 'Fire Storm 245',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 40,
        projectileSpeed: 350,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0246',
        name: 'Frost Beam 246',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 44,
        projectileSpeed: 360,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0247',
        name: 'Lightning Vortex 247',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 48,
        projectileSpeed: 370,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0248',
        name: 'Void Shield 248',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 52,
        projectileSpeed: 380,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0249',
        name: 'Holy Rain 249',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 56,
        projectileSpeed: 390,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0250',
        name: 'Fire Bolt 250',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 60,
        projectileSpeed: 400,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0251',
        name: 'Frost Nova 251',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 64,
        projectileSpeed: 410,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0252',
        name: 'Lightning Orb 252',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 68,
        projectileSpeed: 420,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0253',
        name: 'Void Barrage 253',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 72,
        projectileSpeed: 430,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0254',
        name: 'Holy Wave 254',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 76,
        projectileSpeed: 440,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0255',
        name: 'Fire Storm 255',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 80,
        projectileSpeed: 450,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0256',
        name: 'Frost Beam 256',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 84,
        projectileSpeed: 460,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0257',
        name: 'Lightning Vortex 257',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 88,
        projectileSpeed: 470,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0258',
        name: 'Void Shield 258',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 92,
        projectileSpeed: 480,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0259',
        name: 'Holy Rain 259',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 96,
        projectileSpeed: 490,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0260',
        name: 'Fire Bolt 260',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 100,
        projectileSpeed: 500,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0261',
        name: 'Frost Nova 261',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 104,
        projectileSpeed: 510,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0262',
        name: 'Lightning Orb 262',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 108,
        projectileSpeed: 520,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0263',
        name: 'Void Barrage 263',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 112,
        projectileSpeed: 530,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0264',
        name: 'Holy Wave 264',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 116,
        projectileSpeed: 540,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0265',
        name: 'Fire Storm 265',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 120,
        projectileSpeed: 550,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0266',
        name: 'Frost Beam 266',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 124,
        projectileSpeed: 560,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0267',
        name: 'Lightning Vortex 267',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 128,
        projectileSpeed: 570,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0268',
        name: 'Void Shield 268',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 132,
        projectileSpeed: 580,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0269',
        name: 'Holy Rain 269',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 136,
        projectileSpeed: 590,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0270',
        name: 'Fire Bolt 270',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 140,
        projectileSpeed: 300,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0271',
        name: 'Frost Nova 271',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 144,
        projectileSpeed: 310,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0272',
        name: 'Lightning Orb 272',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 148,
        projectileSpeed: 320,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0273',
        name: 'Void Barrage 273',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 152,
        projectileSpeed: 330,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0274',
        name: 'Holy Wave 274',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 156,
        projectileSpeed: 340,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0275',
        name: 'Fire Storm 275',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 160,
        projectileSpeed: 350,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0276',
        name: 'Frost Beam 276',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 164,
        projectileSpeed: 360,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0277',
        name: 'Lightning Vortex 277',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 168,
        projectileSpeed: 370,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0278',
        name: 'Void Shield 278',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 172,
        projectileSpeed: 380,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0279',
        name: 'Holy Rain 279',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 176,
        projectileSpeed: 390,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0280',
        name: 'Fire Bolt 280',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 180,
        projectileSpeed: 400,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0281',
        name: 'Frost Nova 281',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 184,
        projectileSpeed: 410,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0282',
        name: 'Lightning Orb 282',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 188,
        projectileSpeed: 420,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0283',
        name: 'Void Barrage 283',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 192,
        projectileSpeed: 430,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0284',
        name: 'Holy Wave 284',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 196,
        projectileSpeed: 440,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0285',
        name: 'Fire Storm 285',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 200,
        projectileSpeed: 450,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0286',
        name: 'Frost Beam 286',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 204,
        projectileSpeed: 460,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0287',
        name: 'Lightning Vortex 287',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 208,
        projectileSpeed: 470,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0288',
        name: 'Void Shield 288',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 212,
        projectileSpeed: 480,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0289',
        name: 'Holy Rain 289',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 216,
        projectileSpeed: 490,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0290',
        name: 'Fire Bolt 290',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 220,
        projectileSpeed: 500,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0291',
        name: 'Frost Nova 291',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 224,
        projectileSpeed: 510,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0292',
        name: 'Lightning Orb 292',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 228,
        projectileSpeed: 520,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0293',
        name: 'Void Barrage 293',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 232,
        projectileSpeed: 530,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0294',
        name: 'Holy Wave 294',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 236,
        projectileSpeed: 540,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0295',
        name: 'Fire Storm 295',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 240,
        projectileSpeed: 550,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0296',
        name: 'Frost Beam 296',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 244,
        projectileSpeed: 560,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0297',
        name: 'Lightning Vortex 297',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 248,
        projectileSpeed: 570,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0298',
        name: 'Void Shield 298',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 252,
        projectileSpeed: 580,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0299',
        name: 'Holy Rain 299',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 256,
        projectileSpeed: 590,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0300',
        name: 'Fire Bolt 300',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 20,
        projectileSpeed: 300,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0301',
        name: 'Frost Nova 301',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 24,
        projectileSpeed: 310,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0302',
        name: 'Lightning Orb 302',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 28,
        projectileSpeed: 320,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0303',
        name: 'Void Barrage 303',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 32,
        projectileSpeed: 330,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0304',
        name: 'Holy Wave 304',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 36,
        projectileSpeed: 340,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0305',
        name: 'Fire Storm 305',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 40,
        projectileSpeed: 350,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0306',
        name: 'Frost Beam 306',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 44,
        projectileSpeed: 360,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0307',
        name: 'Lightning Vortex 307',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 48,
        projectileSpeed: 370,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0308',
        name: 'Void Shield 308',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 52,
        projectileSpeed: 380,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0309',
        name: 'Holy Rain 309',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 56,
        projectileSpeed: 390,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0310',
        name: 'Fire Bolt 310',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 60,
        projectileSpeed: 400,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0311',
        name: 'Frost Nova 311',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 64,
        projectileSpeed: 410,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0312',
        name: 'Lightning Orb 312',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 68,
        projectileSpeed: 420,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0313',
        name: 'Void Barrage 313',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 72,
        projectileSpeed: 430,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0314',
        name: 'Holy Wave 314',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 76,
        projectileSpeed: 440,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0315',
        name: 'Fire Storm 315',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 80,
        projectileSpeed: 450,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0316',
        name: 'Frost Beam 316',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 24,
        castTime: 0.30,
        basePower: 84,
        projectileSpeed: 460,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0317',
        name: 'Lightning Vortex 317',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 25,
        castTime: 0.40,
        basePower: 88,
        projectileSpeed: 470,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0318',
        name: 'Void Shield 318',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 26,
        castTime: 0.50,
        basePower: 92,
        projectileSpeed: 480,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0319',
        name: 'Holy Rain 319',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 27,
        castTime: 0.60,
        basePower: 96,
        projectileSpeed: 490,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0320',
        name: 'Fire Bolt 320',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 28,
        castTime: 0.20,
        basePower: 100,
        projectileSpeed: 500,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0321',
        name: 'Frost Nova 321',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 29,
        castTime: 0.30,
        basePower: 104,
        projectileSpeed: 510,
        penetrationCount: 2,
        areaRadius: 24,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0322',
        name: 'Lightning Orb 322',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 30,
        castTime: 0.40,
        basePower: 108,
        projectileSpeed: 520,
        penetrationCount: 3,
        areaRadius: 28,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0323',
        name: 'Void Barrage 323',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 31,
        castTime: 0.50,
        basePower: 112,
        projectileSpeed: 530,
        penetrationCount: 4,
        areaRadius: 32,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0324',
        name: 'Holy Wave 324',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 32,
        castTime: 0.60,
        basePower: 116,
        projectileSpeed: 540,
        penetrationCount: 1,
        areaRadius: 36,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0325',
        name: 'Fire Storm 325',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 8,
        castTime: 0.20,
        basePower: 120,
        projectileSpeed: 550,
        penetrationCount: 2,
        areaRadius: 40,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0326',
        name: 'Frost Beam 326',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 9,
        castTime: 0.30,
        basePower: 124,
        projectileSpeed: 560,
        penetrationCount: 3,
        areaRadius: 44,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0327',
        name: 'Lightning Vortex 327',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 10,
        castTime: 0.40,
        basePower: 128,
        projectileSpeed: 570,
        penetrationCount: 4,
        areaRadius: 48,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0328',
        name: 'Void Shield 328',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 11,
        castTime: 0.50,
        basePower: 132,
        projectileSpeed: 580,
        penetrationCount: 1,
        areaRadius: 52,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0329',
        name: 'Holy Rain 329',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 12,
        castTime: 0.60,
        basePower: 136,
        projectileSpeed: 590,
        penetrationCount: 2,
        areaRadius: 56,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0330',
        name: 'Fire Bolt 330',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 13,
        castTime: 0.20,
        basePower: 140,
        projectileSpeed: 300,
        penetrationCount: 3,
        areaRadius: 60,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0331',
        name: 'Frost Nova 331',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 14,
        castTime: 0.30,
        basePower: 144,
        projectileSpeed: 310,
        penetrationCount: 4,
        areaRadius: 64,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0332',
        name: 'Lightning Orb 332',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 15,
        castTime: 0.40,
        basePower: 148,
        projectileSpeed: 320,
        penetrationCount: 1,
        areaRadius: 68,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0333',
        name: 'Void Barrage 333',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 16,
        castTime: 0.50,
        basePower: 152,
        projectileSpeed: 330,
        penetrationCount: 2,
        areaRadius: 72,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0334',
        name: 'Holy Wave 334',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 17,
        castTime: 0.60,
        basePower: 156,
        projectileSpeed: 340,
        penetrationCount: 3,
        areaRadius: 76,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0335',
        name: 'Fire Storm 335',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 18,
        castTime: 0.20,
        basePower: 160,
        projectileSpeed: 350,
        penetrationCount: 4,
        areaRadius: 80,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0336',
        name: 'Frost Beam 336',
        element: SPELL_ELEMENTS.FROST,
        manaCost: 19,
        castTime: 0.30,
        basePower: 164,
        projectileSpeed: 360,
        penetrationCount: 1,
        areaRadius: 84,
        particleColor: 'frost_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FROST', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0337',
        name: 'Lightning Vortex 337',
        element: SPELL_ELEMENTS.LIGHTNING,
        manaCost: 20,
        castTime: 0.40,
        basePower: 168,
        projectileSpeed: 370,
        penetrationCount: 2,
        areaRadius: 88,
        particleColor: 'lightning_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'LIGHTNING', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0338',
        name: 'Void Shield 338',
        element: SPELL_ELEMENTS.VOID,
        manaCost: 21,
        castTime: 0.50,
        basePower: 172,
        projectileSpeed: 380,
        penetrationCount: 3,
        areaRadius: 92,
        particleColor: 'void_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'VOID', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0339',
        name: 'Holy Rain 339',
        element: SPELL_ELEMENTS.HOLY,
        manaCost: 22,
        castTime: 0.60,
        basePower: 176,
        projectileSpeed: 390,
        penetrationCount: 4,
        areaRadius: 96,
        particleColor: 'holy_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'HOLY', bonusMultiplier: 1.25 }
        ]
    },
    {
        spellId: 'spell_0340',
        name: 'Fire Bolt 340',
        element: SPELL_ELEMENTS.FIRE,
        manaCost: 23,
        castTime: 0.20,
        basePower: 180,
        projectileSpeed: 400,
        penetrationCount: 1,
        areaRadius: 20,
        particleColor: 'fire_spark',
        soundEffect: 'playPlasma',
        scalingStat: 'intelligence',
        synergies: [
            { element: 'FIRE', bonusMultiplier: 1.25 }
        ]
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SPELL_ELEMENTS, SPELLS_DATABASE };
}
