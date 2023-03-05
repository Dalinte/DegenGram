<template>
  <div class="posts-list">
    <post
      v-for="item in posts"
      :key="item.id"
      :text="item.text"
      :address="item.address"
      :user-name="item.userName"
      :like-count="item.like"
      :dislike-count="item.dislike"
      class="mb-1"
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
      type: Array as PropType<Array<PostModel>>
    }
  }
})
</script>

<style scoped>

</style>
