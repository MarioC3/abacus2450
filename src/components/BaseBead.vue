<template>
  <div @click="flipBead()" class="bead" ></div>
</template>

<script>
export default {
  props: ['bead', 'rung'],
  methods: {
    flipBead() {
      if (!this.bead.isFlipped) {
        for (let i = this.bead.index; i >= 0; i--) {
          this.rung.beads[i].isFlipped = true
        }
      } else if (this.bead.isFlipped) {
        for (let i = this.bead.index; i <= this.rung.beads.length - 1; i++) {
          this.rung.beads[i].isFlipped = false
        }
      }
      this.totalOperation()
    },

    totalOperation() {
      this.rung.totalRung = 0
      let beadsFlipped = this.rung.beads.filter(bead => bead.isFlipped)
      for (let i = 0; i < beadsFlipped.length; i++) {
        this.rung.totalRung += beadsFlipped[i].val
      }
      this.totalSum += this.rung.totalRung
      this.$emit('operationChanged')
    }
  }
}
</script>

<style lang="scss" scoped>
.bead {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  // background-image: linear-gradient(to right, #434343 0%, black 100%);
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  // background: #614619;
  // background-image: url('../assets/images/patterns/ZenBG.png');
  box-shadow: 0px 0px 76px -16px rgba(0, 0, 0, 0.8);
}
</style>
