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
import { mapGetters } from 'vuex'
import { walletModel } from '@/entities/wallet'

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
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'chainId',
      'isAuth',
    ]),
  },
  methods: {
    like (index: number): void {
      this.$emit('like', index)
    },
    async dislike (postId: number) {
      this.$emit('dislike', postId)
    },
    clickLink (index: number): void {
      this.$emit('clickLink', index)
    },
  }
})
</script>
