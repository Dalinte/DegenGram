<template>
  <div class="posts-list">
    <post
      v-for="(item, index) in posts"
      :key="item.id"
      :item="item"
      class="mb-1"
      @click-like="clickLike(index)"
      @click-dislike="clickDislike(index)"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Post, PostModel, IPost} from '@/features/posts/post'

export default defineComponent({
  name: 'PostsList',
  components: {
    Post
  },
  props: {
    posts: {
      type: Array as PropType<Array<PostModel>>,
      required: true
    }
  },
  methods: {
    clickLike (index: number): void {
      this.$emit('clickLike', index)
    },
    clickDislike (index: number): void {
      this.$emit('clickDislike', index)
    },
  }
})
</script>

<style scoped>

</style>
