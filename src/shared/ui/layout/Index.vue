<template>
  <v-layout max-width="448" class="d-flex flex-column">
    <slot name="header" />
    <v-main class="bg-green-5">
      <slot name="content"/>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
})
</script>
