<template>
  <div id="app">
    <router-view v-show="isNotMobile"/>
    <!-- Mobile not supported modal -->
    <div ref="mobileModal" class="modal notSupportedModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h3>Program is not compatible with mobile versions yet.</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isNotMobile: true
    }
  },
  methods: {
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
