class Abacus {
    constructor(numberOfRungs) {
        this.numberOfRungs = numberOfRungs;
        function generateRungs() {
            for (var i = 0; i < numberOfRungs; i++){
                new rung(i);
            }

        }

    }

    
}
}
class bead {
    constructor(value, isFlipped) {
        this.value = value;
        this.isFlipped = isFlipped;
    }

}
class rung {
    constructor(rungDegree) {
        var heavenlyBeads = [1];
        var earthlyBeads = [4];
        var rungTotal;
        this.rungDegree = rungDegree;
        function fillBeads() {
            for (var i = 0; i < heavenlyBeads.lenght(); i++) {
                heavenlyBeads[i] = new bead(5*(Math.pow(10, rungDegree)), false);
            }
            for (var i = 0; i < earthlyBeads.lenght(); i++) {
                heavenlyBeads[i] = new bead(1 * (Math.pow(10, rungDegree)), false);
            }
        }
        function calculateRungTotal();
        for (var i = 0; i < heavenlyBeads.lenght(); i++) {
        
            if (heavenlyBeads[i].isFlipped == true) { rungTotal += heavenlyBeads[i].value; }
        }
        for (var i = 0; i < earthlyBeads.lenght(); i++) {

            if (earthlyBeads[i].isFlipped == true) { rungTotal += earthlyBeads[i].value; }
        }
    }
    
    

}
function swipeUp(bead) {
    bead.isFlipped = true;
}
function swipeDown(bead) {
    bead.isFlipped = false;
}
