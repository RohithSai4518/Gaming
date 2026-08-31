describe('Vec2 2D Vector Math', () => {
    const v1 = new Vec2(3, 4);
    assertEqual(v1.mag(), 5, 'Vec2.mag() computes Euclidean norm correctly');

    const v2 = new Vec2(1, 2);
    v1.add(v2);
    assertEqual(v1.x, 4, 'Vec2.add() updates x');
    assertEqual(v1.y, 6, 'Vec2.add() updates y');

    v1.sub(v2);
    assertEqual(v1.x, 3, 'Vec2.sub() updates x');
    assertEqual(v1.y, 4, 'Vec2.sub() updates y');

    v1.normalize();
    assertCloseTo(v1.mag(), 1.0, 0.0001, 'Vec2.normalize() sets unit length');

    const d = Vec2.distance(new Vec2(0, 0), new Vec2(6, 8));
    assertEqual(d, 10, 'Vec2.distance() returns accurate distance');
});
