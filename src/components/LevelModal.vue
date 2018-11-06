<template>
  <div class="modal levelModal is-active">
    <div @click="showModal()" class="modal-background animated fadeIn"></div>
    <div class="modal-content">
      <div class="box animated bounceInUp">
        <h3 class="has-text-centered">CHOSE YOUR LEVEL</h3>
        <div class="columns is-centered">
          <img src="@/assets/images/charmander.png" alt="Char-Char">
          <router-link :to="{name: 'levels', params: {id: '1'} }" class="level column level1 is-four-fifths">
            <h4>Level 1</h4>
            <p>Kindergarten & 1st. Grade</p>
          </router-link>
        </div>
        <div class="columns is-centered">
          <img src="@/assets/images/charmeleon.png" alt="Meeleooon">
          <router-link :to="{name: 'levels', params: {id: '2'} }" class="level column level2 is-four-fifths">
            <h4>Level 2</h4>
            <p>2nd. Grade & 3rd. Grade</p>
          </router-link>
        </div>
        <div class="columns is-centered">
          <img src="@/assets/images/charizard.png" alt="Chaaaaar-i-zaaardd">
          <router-link :to="{name: 'levels', params: {id: '3'} }" class="level column level3 is-four-fifths">
            <h4>Level 3</h4>
            <p>4th. Grade & 5th. Grade</p>
          </router-link>
        </div>
      </div>
    </div>
    <button @click="showModal()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  props: ['showModal']
}
</script>

<style lang="scss" scoped>
.modal {
  h3 {
    margin-bottom: 30px;
    font-weight: 100;
  }
  .columns {
    position: relative;
    img {
      width: 80px;
      height: 80px;
      position: absolute;
      left: 70px;
      top: 10px;
    }
  }
  .column {
    margin-bottom: 30px;
    border-radius: 5px;
    height: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 1000;
    h4 {
      font-size: 30px;
      font-weight: 200;
    }
    p {
      font-weight: 200;
    }
  }
  .column:hover {
    transform: translateX(100px);
  }
  .level1 {
    background: #d25858;
  }

  .level2 {
    background: #00a676;
  }

  .level3 {
    background: #3c91e6;
  }
}
</style>
