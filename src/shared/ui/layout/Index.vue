<template>
  <v-layout max-width="448">
    <slot name="header" />
    <v-main>
      <v-container class="main-container">
        <v-row>
          <v-col cols="3">
            <slot name="aside-left"></slot>
          </v-col>
          <v-col cols="6">
            <slot name="content"></slot>
          </v-col>
          <v-col cols="3" align-self="end">
            <slot name="aside-right"></slot>
          </v-col>
        </v-row>
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

<style lang="scss" scoped>
  .main-container {
    max-width: 1400px;
  }
</style>
