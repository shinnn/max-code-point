# max-code-point

[![NPM version](https://img.shields.io/npm/v/max-code-point.svg)](https://www.npmjs.com/package/max-code-point)
[![Bower version](https://img.shields.io/bower/v/max-code-point.svg)](https://github.com/shinnn/max-code-point/releases)
[![Build Status](https://travis-ci.org/shinnn/max-code-point.svg?branch=master)](https://travis-ci.org/shinnn/max-code-point)
[![devDependency Status](https://david-dm.org/shinnn/max-code-point/dev-status.svg)](https://david-dm.org/shinnn/max-code-point#info=devDependencies)

The maximum [code point](http://unicode.org/glossary/#code_point) available in [JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

```javascript
import MAX_CODE_POINT from 'max-code-point';

MAX_CODE_POINT //=> 1114111
MAX_CODE_POINT === 0x10ffff; //=> true

String.fromCodePoint(MAX_CODE_POINT); //=> throws no errors 
String.fromCodePoint(MAX_CODE_POINT + 1); //=> throws a range error
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install max-code-point
```

#### [bower](http://bower.io/)

```
bower install max-code-point
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/max-code-point/master/browser.js)

## License

[The Unlicense](./LICENSE)
