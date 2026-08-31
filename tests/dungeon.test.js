describe('DungeonGenerator & Tilemap', () => {
    const generator = new DungeonGenerator(40, 40, 48);
    const layout = generator.generate(1);

    assert(layout.rooms.length > 0, 'Procedural dungeon generates multiple rooms');
    assert(layout.playerSpawn !== null, 'Player spawn point is created');
    assert(layout.exitPos !== null, 'Stairs exit portal is created');
    assert(layout.tilemap.cols === 40, 'Tilemap dimensions match requested columns');
    assert(layout.tilemap.rows === 40, 'Tilemap dimensions match requested rows');

    const bossLayout = generator.generate(5);
    assert(bossLayout.enemySpawns.some(e => e.type === 'boss'), 'Floor 5 generates Boss encounter');
});
