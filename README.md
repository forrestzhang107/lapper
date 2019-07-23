# Lapper

A minimalistic stopwatch utility.
Useful for recording multiple execution times for subsections of code.

## Usage

```javascript
const Lapper = require('lapper')

const sw = new Lapper()
sw.start()

doSomething()
sw.lap('function_1')
// returns: 441

doSomethingElse()
sw.lap('function_2')
// returns: 90

const output = sw.log()
console.log(output)
```

Output: `{ 'function_1': 441, 'function_2': 90, total: 531 }`

Execution time is in milliseconds

### Optional Auto-Logging

```javascript
const Lapper = require('lapper')

const sw = new Lapper()
sw.start()

doSomething()
sw.lap('function_1', true)
// prints: 'function_1: 441'

doSomethingElse()
sw.lap('function_2', true)
// prints: 'function_2: 90'

sw.log(true)
// prints: { 'function_1': 441, 'function_2': 90, total: 531 }
```

### Restart the Stopwatch

```javascript
const Lapper = require('lapper')

const sw = new Lapper()
sw.start()

doSomething()
sw.lap('function_1')

sw.log(true)
// prints: { 'function_1': 441 }

sw.restart()

doSomethingElse()
sw.lap('function_2')

sw.log(true)
// prints: { 'function_2': 90, total: 90 }
```

### Unlabeled Splits

```javascript
const Lapper = require('lapper')

const sw = new Lapper()
sw.start()

doSomething()
sw.lap()

sw.reset()

doSomethingElse()
sw.lap()

const output = sw.log()
console.log(output)
```

Output: `{ 'split_1': 441, 'split_2': 90, total: 531 }`
