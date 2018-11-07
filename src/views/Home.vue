<template>
  <div class="container">
    <div class="homeWrapper">
      <img class="animated fadeIn" src="../assets/images/abacusLogo.png" alt="Abacus logo">
      <h1 class="animated bounceIn">ABACUS</h1>
      <h4 class="animated bounceIn subtitle">A learning aid for elementary students</h4>
      <div>
        <a class="animated fadeIn button has-background-danger has-text-white">Quick Start</a>
        <a class="animated fadeIn button " @click="StudentShowSignInModal()">Student Sign In</a>
      </div>
      <p class="animated bounceInUp has-text-grey-light font_small">Created by Team 2</p>
      <p class="animated bounceInUp has-text-grey-light font_small">CS-2450</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['StudentShowSignInModal'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.homeWrapper {
  margin-top: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 75px;
    height: auto;
  }
  h1 {
    font-weight: 100;
    letter-spacing: 35px;
  }
  h4 {
    font-weight: 300;
    letter-spacing: 5px;
    margin-bottom: 30px;
  }
  a {
    margin: 0 10px 30px;
  }
}
</style>
