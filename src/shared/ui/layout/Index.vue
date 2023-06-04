<template>
  <v-layout max-width="448" class="d-flex flex-column">
    <slot name="header" />
    <v-main
      :class="isLanding ? 'bg-landing' : ''"
      class="bg-green-5"
    >
      <slot name="content"/>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  props: {
    background: String
  },
  computed: {
    isLanding (): boolean {
      return this.background === 'landing'
    }
  }
})
</script>

<style lang="scss" scoped>
.bg-landing {
  background-color: #142723 !important;
}
</style>
