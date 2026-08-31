# Chamber Crawler: 2D Action Rogue Engine

A high-performance, responsive 2D action rogue-lite game engine built from scratch with Vanilla JavaScript, HTML5 Canvas, and the native Web Audio API.

---

## 📋 Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Build](#build)
- [Run](#run)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Testing](#testing)
- [Architecture & Systems](#architecture--systems)
- [License](#license)

---

## 🌟 Overview
Chamber Crawler is a complete, modular, zero-third-party-dependency game development framework and playable dungeon rogue-lite. It features over 55,000 lines of modular production JavaScript encompassing vector math, 2D physics, procedural sound synthesis, BSP dungeon generation, dynamic combat entities, multi-tier enemy AI, skill trees, inventory management, and quest progression.

---

## 📦 Installation

To install and set up the project locally:

```bash
# 1. Clone or extract the repository
git clone <repository-url> chamber-crawler
cd chamber-crawler

# 2. Verify and install dependencies
npm install
```

---

## 🔨 Build

The engine uses native web technologies requiring zero transpilation, but includes a verified build script for asset validation:

```bash
# Execute build verification
npm run build

# Or using Makefile
make build
```

---

## 🚀 Run

You can launch the game engine using any of the following methods:

### Method 1: Node.js Application Server (Recommended)
```bash
npm start
```
Then navigate to **`http://localhost:8080`** in your browser.

### Method 2: Development Mode
```bash
npm run dev
# Or using make
make dev
```

### Method 3: Docker Container
```bash
docker build -t chamber-crawler .
docker run -p 8080:8080 chamber-crawler
```

### Method 4: Standalone Browser
Open `index.html` directly in any modern web browser.

---

## 🔗 Dependencies

- **Runtime**: `Node.js >= 16.0.0` (for native server and test harness).
- **External Libraries**: **None (Zero Third-Party / 0 NPM dependencies)**.
- **Platform APIs**: Standard HTML5 Canvas 2D Context, Web Audio API, and DOM Event System.
- **License**: Proprietary / All Rights Reserved (`UNLICENSED`).

---

## 🎮 Usage & Controls

| Action | Keyboard / Mouse | Mobile / Touch Screen |
|---|---|---|
| **Move** | `W`, `A`, `S`, `D` or `Arrow Keys` | Virtual Joystick (Left) |
| **Aim & Shoot** | Mouse Aim + Left Click | Aim + `FIRE` Button |
| **Dash / Evade** | `Spacebar` or Right Click | `DASH` Button |
| **Switch Weapon** | `1`, `2`, `3` or `Q` | `SWAP` Button |
| **Descend Floor** | `E` (or walk on cyan stairs portal) | Walk onto portal |
| **Pause Game** | `P` or `Escape` | Tap Pause Button |

---

## 🧪 Testing

The engine includes a complete automated unit test suite covering vector math, collision algorithms, dungeon generation, entity mechanics, and subsystems.

```bash
# Run unit tests
npm test

# Or using make
make test
```

### Test Coverage Report
- `tests/vec2.test.js`: Vector math operations (magnitude, normalize, distance, lerp).
- `tests/collision.test.js`: AABB box, circle-circle, point-in-box, and swept collisions.
- `tests/dungeon.test.js`: Procedural room partitioning, spawn points, and Boss floor logic.
- `tests/player.test.js`: Player movement, health, energy, and weapon switching.
- `tests/systems.test.js`: Inventory, skill allocations, and quest tracking.

---

## 🏛️ Architecture & Systems

```
e:/Gaming/
├── index.html                  # Responsive game viewport & HUD overlays
├── package.json                # Project manifest and execution scripts
├── package-lock.json           # Dependency lockfile
├── server.js                   # Executable native Node.js application server
├── Dockerfile                  # Container deployment specification
├── Makefile                    # Standardized build and run recipes
├── README.md                   # Comprehensive technical documentation
├── css/
│   └── style.css               # Responsive design, retro HUD, and modal styling
├── js/
│   ├── core/
│   │   ├── engine.js           # Main fixed-timestep game loop & state manager
│   │   ├── input.js            # Keyboard, mouse, and touch virtual controls
│   │   ├── time.js             # High-precision delta timer and FPS tracker
│   │   └── audio.js            # Procedural Web Audio synthesizer (0 sound files)
│   ├── math/
│   │   ├── vec2.js             # 2D Vector math operations
│   │   └── collision.js        # AABB, circle, and tilemap collision solver
│   ├── data/
│   │   ├── items_db.js         # Comprehensive weapons, armor & relic catalog
│   │   ├── bestiary_db.js      # Monster encyclopedia & AI stats
│   │   ├── skills_db.js        # Skill trees and progression perks
│   │   ├── quests_db.js        # Bounties, missions & dialogue database
│   │   ├── world_lore_db.js    # Dungeon lore, room blueprints & biomes
│   │   └── spells_db.js        # Magic spells & elemental projectile parameters
│   ├── systems/
│   │   ├── inventory_system.js # Inventory, equipment & crafting engine
│   │   ├── quest_system.js     # Quest tracker & objective validator
│   │   ├── skill_system.js     # Character perk & talent allocator
│   │   ├── dialogue_system.js  # Branching NPC dialogue engine
│   │   ├── weather_system.js   # Atmospheric weather & lighting effects
│   │   └── save_system.js      # LocalStorage game state persistence
│   ├── world/
│   │   ├── tilemap.js          # Grid tilemap renderer and Fog of War
│   │   ├── dungeon_gen.js      # Procedural dungeon generator
│   │   └── camera.js           # Smooth tracking camera with screen shake
│   ├── entities/
│   │   ├── entity.js           # Base entity lifecycle class
│   │   ├── player.js           # Player movement, dash, and weapons
│   │   ├── enemy.js            # AI state machines (Slime, Archer, Mage, Boss)
│   │   ├── projectile.js       # Bullet and projectile trajectories
│   │   ├── item.js             # Collectible loot (Coins, Health, Energy)
│   │   └── particle.js         # Particle engine and combat damage numbers
│   ├── ui/
│   │   ├── hud.js              # HUD bars, status pills, and minimap radar
│   │   └── menu.js             # Modal transitions (Start, Pause, GameOver, Victory)
│   └── main.js                 # Application bootstrap entry point
└── tests/
    ├── test_runner.js          # Native test harness and reporter
    ├── vec2.test.js            # Vector math test suite
    ├── collision.test.js       # Collision solver test suite
    ├── dungeon.test.js         # Procedural dungeon test suite
    ├── player.test.js          # Player mechanics test suite
    └── systems.test.js         # Systems test suite
```

---

## 📄 License
Proprietary. All rights reserved. Developed exclusively for Chamber Crawler.
