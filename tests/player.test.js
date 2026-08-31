describe('Player Entity Mechanics', () => {
    const player = new Player(100, 100);
    assertEqual(player.hp, 100, 'Initial HP is 100');
    assertEqual(player.energy, 50, 'Initial energy is 50');

    player.takeDamage(25);
    assertEqual(player.hp, 75, 'Damage reduces HP correctly');

    player.heal(15);
    assertEqual(player.hp, 90, 'Heal restores HP correctly');

    const switched = player.switchWeapon(0);
    assert(switched, 'Can switch to default weapon');
    assertEqual(player.activeWeapon.id, 'blaster', 'Default weapon is Blaster');
});
