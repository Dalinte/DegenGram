<template>
  <header class="d-flex justify-space-between">
    <v-btn
      class="ma-2"
      color="indigo"
      icon="mdi-baby-face-outline"
    ></v-btn>
    <v-btn>Connect wallet</v-btn>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped lang='scss'>

</style>
