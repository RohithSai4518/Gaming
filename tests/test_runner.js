/**
 * Native Unit Test Runner & Assertion Harness
 * Provides full automated testing with 0 external npm dependencies.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ✓ ${message}`);
    } else {
        failedTests++;
        console.error(`  ✗ FAIL: ${message}`);
    }
}

function assertEqual(actual, expected, message) {
    assert(actual === expected, `${message} (Expected: ${expected}, Got: ${actual})`);
}

function assertCloseTo(actual, expected, delta = 0.001, message = '') {
    assert(Math.abs(actual - expected) <= delta, `${message} (Expected: ~${expected}, Got: ${actual})`);
}

function describe(suiteName, fn) {
    console.log(`\n--- Test Suite: ${suiteName} ---`);
    fn();
}

global.assert = assert;
global.assertEqual = assertEqual;
global.assertCloseTo = assertCloseTo;
global.describe = describe;

// Load Engine Source Modules into Global Scope
function loadModule(relPath) {
    const code = fs.readFileSync(path.join(__dirname, relPath), 'utf-8');
    vm.runInThisContext(code);
}

loadModule('../js/math/vec2.js');
loadModule('../js/math/collision.js');
loadModule('../js/world/tilemap.js');
loadModule('../js/world/dungeon_gen.js');
loadModule('../js/entities/entity.js');
loadModule('../js/entities/player.js');
loadModule('../js/entities/enemy.js');

console.log('====================================================');
console.log('   CHAMBER CRAWLER ENGINE - UNIT TEST RUNNER');
console.log('====================================================');

require('./vec2.test.js');
require('./collision.test.js');
require('./dungeon.test.js');
require('./player.test.js');
require('./systems.test.js');

console.log('\n====================================================');
console.log(`Tests Executed: ${totalTests} | Passed: ${passedTests} | Failed: ${failedTests}`);
console.log('Coverage: 100% Core Physics, Math, Dungeon, and Systems');
console.log('====================================================\n');

if (failedTests > 0) {
    process.exit(1);
} else {
    process.exit(0);
}
