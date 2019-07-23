const Lapper = require('./lapper')

const sw = new Lapper()
sw.start()

wait()
const f1 = sw.lap()
// returns: 441

// sw.restart()

wait()
const f2 = sw.lap()
// returns: 90

const output = sw.log(true)
// console.log(output)

function wait() {
  let x = 0
  while(x != 1) {
    x = Math.floor(Math.random() * 10000000)
  }
}
