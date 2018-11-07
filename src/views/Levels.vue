<template>
  <div class="container">
    <div class="abacus"></div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  mounted() {
    console.log(this.id)
  }
}
</script>

<style scoped>
</style>
