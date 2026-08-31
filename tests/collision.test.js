describe('Collision 2D Geometry Solvers', () => {
    const box1 = { x: 0, y: 0, w: 20, h: 20 };
    const box2 = { x: 10, y: 10, w: 20, h: 20 };
    const box3 = { x: 50, y: 50, w: 10, h: 10 };

    assert(Collision.aabb(box1, box2), 'AABB overlapping boxes detect collision');
    assert(!Collision.aabb(box1, box3), 'AABB non-overlapping boxes return false');

    const c1 = { x: 0, y: 0, radius: 10 };
    const c2 = { x: 15, y: 0, radius: 10 };
    const c3 = { x: 30, y: 0, radius: 5 };

    assert(Collision.circleCircle(c1, c2), 'Circle-circle overlap detected');
    assert(!Collision.circleCircle(c1, c3), 'Separated circles return false');

    assert(Collision.pointInBox(10, 10, box1), 'Point inside box detected');
    assert(!Collision.pointInBox(25, 25, box1), 'Point outside box returns false');
});
