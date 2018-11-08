<template>
  <div class="wrapper">
    <h2>Level {{id}}</h2>
    <BaseAbacus :levelId="id"/>
  </div>
</template>

<script>
export default {
  props: ['id'],
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 30px 0 0 20px;
  h2{
    margin-bottom: 20px;
    font-weight: 100;
  }
}
</style>
