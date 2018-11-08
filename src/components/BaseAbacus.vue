<template>
  <div ref="abacus" class="abacus">
    <div class="post horizontalPost top"></div>
    <!-- <div class="post horizontalPost middle"></div> -->
    <div class="post horizontalPost bottom"></div>
    <div class="post verticalPost left"></div>
    <div class="post verticalPost right"></div>
    <div ref="rungs" class="rungs">
      <div v-for="n in numberOfRungs" :key="n" class="rung"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['levelId'],
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
    }
  },
  methods: {
    forceAbacusWidth() {
      let rungsWrapperWidth = window
        .getComputedStyle(this.$refs.rungs)
        .getPropertyValue('width')
      console.log(rungsWrapperWidth)
      this.$refs.abacus.style.width = rungsWrapperWidth
    }
  },
  mounted() {
    this.forceAbacusWidth()
  }
}
</script>

<style lang="scss" scoped>
$frameWidth: 30px;
$rungMargin: 30px;

.abacus {
  height: 600px;
  position: relative;
  .rungs {
    height: 100%;
    position: absolute;
    padding: $frameWidth $frameWidth + $rungMargin;
    .rung {
      display: inline-block;
      margin: 0 $rungMargin;
      width: 10px;
      height: 100%;
      background-color: #000000;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23454545' fill-opacity='0.48'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
