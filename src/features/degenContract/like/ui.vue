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
import {likePost} from '@/features/degenContract/like'

export default defineComponent({
  name: 'Like',
  props: {
    count: Number,
    postId: {
      type: Number,
      required: true
    },
    isLiked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click (): void {
      likePost(this.postId)
      this.$emit('like')
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
