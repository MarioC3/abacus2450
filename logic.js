export class Rung {
  constructor(base, numBeads) {
    this.base = base
    this.numOfBeads = numBeads
    this.beads = []
    this.totalRung = 0
  }
}

export class HeavenlyBead {
  constructor(base, index) {
    this.index = index
    this.base = base
    this.val = Math.pow(10, this.base) * 5
    this.isFlipped = false
    this.typeOfBead = 'heavenly'
  }
}

export class EarthlyBead {
  constructor(base, index) {
    this.index = index
    this.base = base
    this.val = Math.pow(10, this.base)
    this.isFlipped = false
    this.typeOfBead = 'earthly'
  }
}
