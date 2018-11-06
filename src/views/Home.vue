<template>
  <div class="container">
    <Nav v-bind:showSignInModal="showSignInModal"/>
    <div class="homeWrapper">
      <img class="animated fadeIn" src="../assets/images/abacusLogo.png" alt="Abacus logo">
      <h1 class="animated bounceIn">ABACUS</h1>
      <h4 class="animated bounceIn subtitle">A learning aid for elementary students</h4>
      <a class="animated fadeIn button" @click="showModal()">Get Started</a>
      <p class="animated bounceInUp has-text-grey-light font_small">Created by Team 2</p>
      <p class="animated bounceInUp has-text-grey-light font_small">CS-2450</p>
    </div>
    <levelModal v-bind:showModal="showModal" v-show="levelModalToggle"/>
    <signIn v-bind:showSignInModal="showSignInModal" v-show="signInToggle"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import signIn from '@/components/SignIn.vue'
import levelModal from '@/components/LevelModal.vue'
export default {
  components: {
    Nav,
    signIn,
    levelModal
  },
  data: () => {
    return {
      levelModalToggle: false,
      signInToggle: false
    }
  },
  methods: {
    showModal() {
      this.levelModalToggle = !this.levelModalToggle
    },
    showSignInModal() {
      this.signInToggle = !this.signInToggle
      console.log(this.signInToggle)
    }
  }
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
    margin-bottom: 30px;
  }
}
</style>
