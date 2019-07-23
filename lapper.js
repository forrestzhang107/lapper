class Lapper {

  lap(label, print) {
    if (!this.ticking) this.start()
    if (!label) {
      this.n_laps++
      label = 'split_' + this.n_laps
    }
    const diff = new Date() - this.last
    this.laps[label] = diff
    this.last = new Date()
    if (print) console.log(label + ': ' + diff)
    return diff
  }

  start() {
    this.ticking = true
    this.laps = {}
    this.n_laps = 0
    this.init = this.last = new Date()
  }

  log(print) {
    const record = {
      ...this.laps,
      total: (new Date() - this.init)
    }
    if (print) console.log(record)
    return record
  }

  restart() {
    this.start()
  }

}

module.exports = Lapper
