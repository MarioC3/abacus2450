<template>
  <div>
    <nav class="navbar is-mobile" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{name: 'home'}" class="navbar-item">
          <img src="@/assets/images/abacusLogo.png">
        </router-link>
        <a ref="navbarBurger" @click="toggleNav()" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div ref="navbarMenu" id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a @click="TeacherShowSignInModal()" class="button is-light">
                Teacher Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- teacher sign in -->
    <BaseSignIn typeOfUser="teacher" :TeacherShowSignInModal="TeacherShowSignInModal" v-show="TeacherSignInToggle">
      <h3 slot="user" class="has-text-centered">Teacher Sign in</h3>
      <button slot="button" @click="TeacherShowSignInModal()" class="studentSignInButton button is-link">Sign In</button> 
    </BaseSignIn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TeacherSignInToggle: false
    }
  },
  methods: {
    TeacherShowSignInModal() {
      this.TeacherSignInToggle = !this.TeacherSignInToggle
    },
    toggleNav() {
      let navbarMenu = this.$refs.navbarMenu
      let navbarBurger = this.$refs.navbarBurger
      if (navbarMenu.classList.contains('is-active')) {
        navbarMenu.classList.remove('is-active')
        navbarBurger.classList.remove('is-active')
      } else {
        navbarMenu.classList.add('is-active')
        navbarBurger.classList.add('is-active')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
