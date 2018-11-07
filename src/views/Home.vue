<template>
  <div class="container">
    <div class="homeWrapper">
      <img class="animated fadeIn" src="../assets/images/abacusLogo.png" alt="Abacus logo">
      <h1 class="animated bounceIn">ABACUS</h1>
      <h4 class="animated bounceIn subtitle">A learning aid for elementary students</h4>
      <div>
        <router-link :to="{name: 'levels', params: {id: 'sandbox'} } " class="animated fadeIn button has-background-danger has-text-white">Quick Start</router-link>
        <a class="animated fadeIn button" @click="StudentShowSignInModal()">Student Sign In</a>
      </div>
      <p class="animated bounceInUp has-text-grey-light font_small">Created by Team 2</p>
      <p class="animated bounceInUp has-text-grey-light font_small">CS-2450</p>
    </div>
    <BaseSignIn typeOfUser="student" :StudentShowSignInModal="StudentShowSignInModal" v-show="StudentSignInToggle">
      <h3 slot="user" class="has-text-centered">Student Sign in</h3>
      <button slot="button" @click="showModal(); StudentShowSignInModal();" class="studentSignInButton button is-link">Sign In</button> 
    </BaseSignIn>
    <LevelModal :showModal="showModal" v-show="levelModalToggle"/>
  </div>
</template>

<script>
import LevelModal from '@/components/LevelModal.vue'
export default {
  components: {
    LevelModal
  },
  data() {
    return {
      StudentSignInToggle: false,
      levelModalToggle: false
    }
  },
  methods: {
    StudentShowSignInModal() {
      this.StudentSignInToggle = !this.StudentSignInToggle
    },
    showModal() {
      this.levelModalToggle = !this.levelModalToggle
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
    margin: 0 10px 30px;
  }
}
</style>
