<template>
  <div class="dislike d-flex align-center">
    <v-btn size="small" color="grey" variant="text" :icon="getIcon" />
    <slot>
      <p class="text-grey" >{{getCount}}</p>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Dislike',
  props: {
    count: Number,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getIcon (): string {
      return this.isActive ? 'mdi-thumb-down' : 'mdi-thumb-down-outline'
    },
    getCount (): string {
      return `${this.count}`
    }
  }
})
</script>
