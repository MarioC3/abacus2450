<template>
  <div class="wrapper">
    <h2>Level {{id}}</h2>
    <div class="abacusWrapper">
      <BaseAbacus :levelId="id"/>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0 20px;
  h2 {
    margin-bottom: 20px;
    font-weight: 100;
  }
}
</style>
