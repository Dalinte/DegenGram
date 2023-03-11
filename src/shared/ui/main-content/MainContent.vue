<template>
  <v-row>
    <v-col cols="3">
      <slot name="aside-left"></slot>
    </v-col>
    <v-col cols="6">
      <slot name="content"></slot>
    </v-col>
    <v-col cols="3">
      <slot name="aside-right"></slot>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainContent'
})
</script>
