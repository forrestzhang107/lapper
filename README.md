# Lapper

A split-enabled stopwatch utility.  
Useful for recording multiple execution times for subsections of code.

## Installation

```
npm i lapper
```

## Usage

`start()` the stopwatch and then use `lap()` to record a split after running some code.  
Pass a string to `lap()` to label your splits.  
`log()` produces a record of your labeled split times.

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
```

Output: `{ 'function_1': 441, 'function_2': 90, total: 531 }`  
Execution time is in milliseconds.

## Logging

`lap()` and `log()` can be told to print to console automatically by passing `true` as a parameter.

```javascript
sw.start()

doSomething()
sw.lap('function_1', true)
// prints: 'function_1: 441'

sw.log(true)
// prints: { 'function_1': 441, total: 441 }
```

## Starting

The stopwatch can be told to start timing right away by passing `true` to the constructor.

```javascript
const sw = new Lapper(true)

doSomething()
sw.lap('function_1', true)
// prints: 'function_1: 441'
```

## Restarting

Restart the timer on the stopwatch with `restart()`.

```javascript
sw.start()

doSomething()
sw.lap('function_1')

sw.log(true)
// prints: { 'function_1': 441, total: 441 }

sw.restart()

doSomethingElse()
sw.lap('function_2')

sw.log(true)
// prints: { 'function_2': 90, total: 90 }
```

## Default Labels

Unlabeled splits will default to `'split_1', 'split_2', ... 'split_n'`

```javascript
sw.start()

doSomething()
sw.lap()

doSomethingElse()
sw.lap()

const output = sw.log()
```

Output: `{ 'split_1': 441, 'split_2': 90, total: 531 }`
