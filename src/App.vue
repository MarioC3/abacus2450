<template>
  <div id="app">
    <!-- nav -->
    <BaseNav :TeacherShowSignInModal="TeacherShowSignInModal" />
    <!-- content -->
    <router-view :StudentShowSignInModal="StudentShowSignInModal" v-show="isNotMobile"/>
    <!-- Mobile not supported modal -->
    <div ref="mobileModal" class="modal notSupportedModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h3>Program is not compatible with mobile versions yet.</h3>
      </div>
    </div>
    <!-- Sign in Modal -->
    <TeacherSignIn :TeacherShowSignInModal="TeacherShowSignInModal" v-show="TeacherSignInToggle"/>
    <StudentSignIn :StudentShowSignInModal="StudentShowSignInModal" v-show="StudentSignInToggle"/>
  </div>
</template>

<script>
import TeacherSignIn from '@/components/TeacherSignIn.vue'
import StudentSignIn from './components/StudentSignIn'
export default {
  components: {
    TeacherSignIn,
    StudentSignIn
  },
  data() {
    return {
      isNotMobile: true,
      TeacherSignInToggle: false,
      StudentSignInToggle: false
    }
  },
  methods: {
    TeacherShowSignInModal() {
      this.TeacherSignInToggle = !this.TeacherSignInToggle
    },
    StudentShowSignInModal() {
      this.StudentSignInToggle = !this.StudentSignInToggle
    },
    mobileShow() {
      let windowWidth = window.innerWidth
      if (windowWidth < 600) {
        let mobileModal = this.$refs.mobileModal
        mobileModal.classList.add('is-active')
        this.isNotMobile = false
      }
    }
  },
  mounted() {
    this.mobileShow()
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
.modal {
  text-align: center;
  color: white;
}
</style>
