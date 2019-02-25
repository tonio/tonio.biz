class Testons {
  constructor () {
    const { truite } = { truite: 'toto' }
    console.log(`${truite}`)
  }
  toto () {
    this.checked = true
  }
}

const truite = new Testons()
truite.toto()
