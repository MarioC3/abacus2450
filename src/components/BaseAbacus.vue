<template>
  <div ref="abacus" class="abacus">
    <div class="post horizontalPost top"></div>
    <div class="post horizontalPost middle">
      <div class="valWrapper"><p>{{abacusCount}}</p></div>
    </div>
    <div class="post horizontalPost bottom"></div>
    <div class="post verticalPost left"></div>
    <div class="post verticalPost right"></div>
    <div ref="rungs" class="rungs">
      <div class="heavenlyRungs">
        <div v-for="rung in heavenlyRungs" :key="rung.base" class="rung">
          <div class="beadsWrapper">
            <BaseBead v-for="bead in rung.beads" :bead="bead" :rung="rung"/>
          </div>
        </div>
      </div>
      <div class="middlePostSeparator"></div>
      <div class="earthlyRungs">
        <div v-for="rung in earthlyRungs" :key="rung.base" class="rung">
          <div class="beadsWrapper">
            <BaseBead v-for="bead in rung.beads" :bead="bead" :rung="rung" @operationChanged="operationChanged = !operationChanged"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Rung, HeavenlyBead, EarthlyBead } from '../../logic.js'
export default {
  props: ['levelId'],
  data() {
    return {
      heavenlyRungs: [],
      earthlyRungs: [],
      heavenlyBeads: 2,
      earthlyBeads: 5,
      operationChanged: false,
      totalSum: 0
    }
  },
  computed: {
    numberOfRungs() {
      if (this.levelId === '1') {
        return 3
      }
      if (this.levelId === '2') {
        return 7
      }
      if (this.levelId === '3' || this.levelId === 'sandbox') {
        return 11
      }
    },
    ...mapState(['abacusCount'])
  },
  watch: {
    operationChanged: function() {
      let total = 0
      this.earthlyRungs.forEach(function(element) {
        total += element.totalRung
      })
      this.heavenlyRungs.forEach(function(element) {
        total += element.totalRung
      })
      this.totalSum = total
      this.$store.dispatch('updateCount', this.totalSum)
    }
  },
  methods: {
    fillRungs() {
      //Heavenly Rungs
      for (let i = this.numberOfRungs - 1; i > -1; i--) {
        let rung = new Rung(i, this.heavenlyBeads)
        for (let j = 0; j < rung.numOfBeads; j++) {
          let bead = new HeavenlyBead(rung.base, j)
          rung.beads.push(bead)
        }
        this.heavenlyRungs.push(rung)
      }
      // Earthly Rungs
      for (let i = this.numberOfRungs - 1; i > -1; i--) {
        let rung = new Rung(i, this.earthlyBeads)
        for (let j = 0; j < rung.numOfBeads; j++) {
          let bead = new EarthlyBead(rung.base, j)
          rung.beads.push(bead)
        }
        this.earthlyRungs.push(rung)
      }
    }
  },
  mounted() {
    this.fillRungs()
  }
}
</script>

<style lang="scss" scoped>
$frameWidth: 30px;
$rungMargin: 30px;
$rungWidth: 10px;
$abacusHeight: 650px;

.abacus {
  height: $abacusHeight;
  position: relative;
  .rungs {
    height: 100%;
    padding: $frameWidth $frameWidth + $rungMargin;
    display: flex;
    flex-direction: column;
    .heavenlyRungs {
      height: 187px;
    }
    .middlePostSeparator {
      height: 118px;
    }
    .earthlyRungs {
      height: 285px;
      .beadsWrapper {
        justify-content: flex-end;
      }
    }
    .rung {
      position: relative;
      display: inline-block;
      margin: 0 $rungMargin;
      width: $rungWidth;
      height: 100%;
      background-color: #424242;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23565656' fill-opacity='0.48'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      .beadsWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
      }
    }
  }
  .post {
    background: #614619;
    background-image: url('../assets/images/patterns/ZenBG.png');
  }
  .horizontalPost {
    width: 100%;
    height: $frameWidth;
  }
  .top {
    position: absolute;
    top: 0;
    border-radius: 10px 10px 0 0;
  }
  .middle {
    height: 118px;
    position: absolute;
    top: $abacusHeight/3;
    z-index: 1;
    .valWrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: $frameWidth;
      p {
        color: white;
        mix-blend-mode: overlay;
        font-weight: 100;
        font-size: 50px;
      }
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    border-radius: 0 0 10px 10px;
  }
  .verticalPost {
    width: $frameWidth;
    height: 100%;
  }
  .left {
    position: absolute;
    left: 0;
    border-radius: 10px 0 0 10px;
  }
  .right {
    position: absolute;
    right: 0;
    border-radius: 0 10px 10px 0;
  }
}
</style>
