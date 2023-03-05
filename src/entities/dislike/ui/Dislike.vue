<template>
  <div class="dislike d-flex align-center">
    <v-btn
      :icon="getIcon"
      size="small"
      color="grey"
      variant="text"
      @click="click"
    />
    <slot>
      <p v-if="count" class="text-grey" >{{getCount}}</p>
    </slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Dislike',
  props: {
    count: Number,
    isDisliked: {
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
    getIcon (): string {
      return this.isDisliked ? 'mdi-thumb-down' : 'mdi-thumb-down-outline'
    },
    getCount (): string {
      return `${this.count}`
    }
  }
})
</script>
