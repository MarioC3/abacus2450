<template>
  <div>
    <h1>This is Level {{id}}</h1>
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
