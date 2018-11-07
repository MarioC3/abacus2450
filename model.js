class abacus {
  constructor() {
    this.numHighBeads = 2;
    this.numLowBeads = 5;
    this.numRungs = 1;
    this.base = 10;
  }
  fillAbacus() {
    for (let i = 0; i < this.numRungs; i++) {
      this[i] = new rung(i, this.base, this.numLowBeads, this.numHighBeads);
    }
  }

}
//class definitions for bead class
class bead {
  constructor(value) {
    this.value = value;
    this.isFlipped = false;
  }
  flipBead(bead) {
    if (this.bead.isFlipped == true) {
      this.bead.isFlipped = false;
    } else if (this.bead.isFlipped == false) {
      this.bead.isFlipped = true;
    }
  }
}
class rung {
  constructor(rungDegree, base, numLowBeads, numHighBeads) {
    this.rungDegree = rungDegree;
    this.base = base;
    this.beadVal = (Math.pow(base, rungDegree - 1));
    this.numLowBeads = numLowBeads;
    this.numHighBeads = numHighBeads;
    this.rungTotal = 0;
  }
  fillRung() {
    let lowBeads = [numLowBeads];
    lowBeads.fill(new bead(beadVal));
    let highBeads = [numHighBeads];
    highBeads.fill(new bead(beadVal * 5));

  };
  calcTotal() {

    this.rungTotal = 0;
    this.lowBeads.foreach(rungTotal += bead.value);
    this.highBeads.foreach(rungtotal += bead.value);
  };
}