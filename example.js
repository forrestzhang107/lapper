const Timer = require('./timer')

function main() {
  const timer = new Timer()
  timer.start()
  doSomething()
  timer.lap('function 1')
  doSomething()
  timer.lap('function 2')
  console.log(timer.log())
}

function doSomething() {
  let x = 0
  while (x != 1) {
    x = Math.floor(Math.random() * 100000000)
  }
}

main()
