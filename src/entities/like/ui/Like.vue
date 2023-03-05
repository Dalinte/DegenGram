<template>
  <div class="like d-flex align-center">
    <v-btn
      :color="getColor"
      :icon="getIcon"
      size="small"
      variant="text"
      @click="click"
    />
    <slot>
      <p v-if="count" :class="`text-${getColor}`" >{{getCount}}</p>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Like',
  props: {
    count: Number,
    isLiked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (): void {
      this.$emit('clickBtn')
    }
  },
  computed: {
    getColor (): string {
      return this.isLiked ? 'red' : 'grey'
    },
    getIcon (): string {
      return this.isLiked ? 'mdi-cards-heart' : 'mdi-heart-outline'
    },
    getCount (): string {
      return `${this.count}`
    }
  }
})
</script>
