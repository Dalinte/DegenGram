<template>
  <div class="like d-flex align-center">
    <v-btn size="small" :color="getColor" variant="text" :icon="getIcon" />
    <slot>
      <p :class="`text-${getColor}`" >{{text}}</p>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'LikePost',
  props: {
    text: String,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getColor (): string {
      return this.isActive ? 'red' : 'grey'
    },
    getIcon (): string {
      return this.isActive ? 'mdi-cards-heart' : 'mdi-heart-outline'
    }
  }
})
</script>
