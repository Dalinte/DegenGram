<template>
  <div class="cart">
    <p class="name">
      {{name}}
    </p>
    <p class="info">
      {{info}}
    </p>
    <div class="image">
      <v-img
        :width="55"
        aspect-ratio="1"
        src="images/arrow.svg"
        cover
      ></v-img>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InfoCart',
  props: {
    name: String,
    info: String
  }
})
</script>

<style lang="scss" scoped>
  .cart {
    padding: 40px;
    background: #1A312C;
    border: 1px solid #5FE453;
    position: relative;

    .name {
      color: #5FE453;
      text-transform: uppercase;
      font-size: 32px;
      margin-bottom: 24px;
    }

    .info {
      font-size: 24px;
      color: #FFFF;
    }

    .image {
      position: absolute;
      right: 40px;
      bottom: 20px;
    }
  }
</style>
