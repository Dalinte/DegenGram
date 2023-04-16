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
import { ChainConfigPolygon, polygonChainId } from '@/shared/config'
import {authByMetamaskModel} from '@/features/authByMetamask'
import { mapGetters } from 'vuex'
import { walletModel } from '@/entities/wallet'
import {dislikeModel} from '@/features/degenContract/dislike'

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
      console.log(postId)
      await authByMetamaskModel.switchOrAddChain(this.chainId, polygonChainId, ChainConfigPolygon)

      await dislikeModel.dislikePost(postId).then()
      this.$emit('dislike', postId)
    },
    clickLink (index: number): void {
      this.$emit('clickLink', index)
    },
  }
})
</script>
