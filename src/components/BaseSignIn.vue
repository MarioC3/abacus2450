<template>
  <div class="modal studentModal is-active">
    <div @click="toggleModals()" class="modal-background animated fadeIn"></div>
    <div class="modal-content">
      <div class="box animated bounceInUp">
        <slot name="user"></slot>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input" type="text" placeholder="username">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input type="password" class="input">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </div>
    <button @click="toggleModals()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  props: ['typeOfUser', 'StudentShowSignInModal', 'TeacherShowSignInModal'],
  methods: {
    toggleModals() {
      if (this.typeOfUser === 'teacher') {
        this.TeacherShowSignInModal()
        return
      }
      if (this.typeOfUser === 'student') {
        this.StudentShowSignInModal()
        return
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 30px;
}
</style>
