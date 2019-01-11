'use strict';

const MAX_CODE_POINT = require('.');
const test = require('tape');

test('MAX_CODE_POINT', t => {
  t.equal(
    MAX_CODE_POINT,
    0x10ffff,
    'should be equal to 0x10ffff.'
  );

  t.equal(
    String.fromCodePoint(MAX_CODE_POINT),
    '􏿿',
    'should be available for a string code point.'
  );

  t.throws(
    () => String.fromCodePoint(MAX_CODE_POINT + 1),
    /^RangeError.*Invalid code point 1114112/,
    'should be a max string code point.'
  );

  t.end();
});
