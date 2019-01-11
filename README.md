# max-code-point

[![npm version](https://img.shields.io/npm/v/max-code-point.svg)](https://www.npmjs.com/package/max-code-point)
[![Build Status](https://travis-ci.com/shinnn/max-code-point.svg?branch=master)](https://travis-ci.com/shinnn/max-code-point)

The maximum [code point](https://unicode.org/glossary/#code_point) available in [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript)

```javascript
import MAX_CODE_POINT from 'max-code-point';

MAX_CODE_POINT //=> 1114111
MAX_CODE_POINT === 0x10ffff; //=> true

String.fromCodePoint(MAX_CODE_POINT); //=> throws no errors
String.fromCodePoint(MAX_CODE_POINT + 1); //=> throws a RangeError
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install max-code-point
```

## License

[The Unlicense](./LICENSE)
