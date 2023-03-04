<template>
  <v-layout style="z-index: 0">
    <v-main class="page">
      <v-container>
        <slot name="header"></slot>
        <slot name="content"></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})
</script>
