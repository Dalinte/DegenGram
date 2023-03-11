<template>
  <v-container class="main-container">
    <slot></slot>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainContainer'
})
</script>

<style lang="scss" scoped>
  .main-container {
    max-width: 1400px;
  }
</style>
