'use strong';

const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const test = require('tape');

function runTest(description, maxCodePoint) {
  test(description, t => {
    t.strictEqual(
      maxCodePoint,
      0x10ffff,
      'should be equal to 0x10ffff.'
    );

    t.strictEqual(
      String.fromCodePoint(maxCodePoint),
      '􏿿',
      'should be available for a string code point.'
    );

    t.throws(
      () => String.fromCodePoint(maxCodePoint + 1),
      /^RangeError.*Invalid code point 1114112/,
      'should be a max string code point.'
    );

    t.end();
  });
}

runTest('require(\'max-code-point\')', require('.'));

global.window = {};
require('./' + require('./bower.json').main);

runTest('window.maxCodePoint', global.window.maxCodePoint);

rollup({entry: require('./package.json')['jsnext:main']}).then(bundle => {
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});

