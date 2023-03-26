<template>
  <div class="posts-list">
    <post
      v-for="(item, index) in posts"
      :key="item.id"
      :item="item"
      class="mb-1"
      @like="like(index)"
      @dislike="dislike(index)"
      @click-link="clickLink(index)"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Post, PostModel} from '@/features/posts/post'

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
    like (index: number): void {
      this.$emit('like', index)
    },
    dislike (index: number): void {
      this.$emit('dislike', index)
    },
    clickLink (index: number): void {
      this.$emit('clickLink', index)
    },
  }
})
</script>
