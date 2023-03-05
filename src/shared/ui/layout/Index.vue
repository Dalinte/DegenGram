<template>
  <v-layout>
    <slot name="header" />

    <v-navigation-drawer border="0">
      <slot name="aside-left"></slot>
    </v-navigation-drawer>

    <v-navigation-drawer border="0" location="right">
      <slot name="aside-right"></slot>
    </v-navigation-drawer>

    <v-main>
      <slot name="content"></slot>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})
</script>
