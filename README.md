# Timer

Simple process timer with no dependencies. Useful for timing multiple subsections of code.

## Usage

```javascript
const Timer = require('./timer')

const timer = new Timer()
timer.start()

// doSomething()
timer.lap('function 1')
// doSomethingElse()
timer.lap('function 2')

console.log(timer.log())
```

Output: `{ 'function 1': 4757, 'function 2': 4038, total: 8795 }`

Execution time is in milliseconds
