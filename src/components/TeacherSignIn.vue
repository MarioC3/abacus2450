<template>
  <div class="modal studentModal is-active">
    <div @click="TeacherShowSignInModal()" class="modal-background animated fadeIn"></div>
    <div class="modal-content">
      <div class="box animated bounceInUp">
        <h3 class="has-text-centered">Teacher Sign in</h3>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input id="teacherUserName" class="input" type="text" placeholder="username">
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
            <button class="studentSignInButton button is-link">Sign In</button>
          </div>
        </div>
      </div>
    </div>
    <button @click="TeacherShowSignInModal()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  props: ['TeacherShowSignInModal']
}
</script>

<style scoped>
h3 {
  margin-bottom: 30px;
}
</style>
