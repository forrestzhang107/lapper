class Timer {

  lap(label) {
    this.laps[label] = (new Date() - this.last)
    this.last = new Date()
  }

  start() {
    this.laps = {}
    this.init = this.last = new Date()
  }

  log() {
    return {
      ...this.laps,
      total: (new Date() - this.init)
    }
  }
}

module.exports = Timer
