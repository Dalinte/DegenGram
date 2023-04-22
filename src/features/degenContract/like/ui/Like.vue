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
import {likePost} from '../model/likePost'
import { ChainConfigPolygon, polygonChainId } from '@/shared/config'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'

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
    async click (): Promise<void> {
      await walletModel.switchOrAddChain(this.chainId, polygonChainId, ChainConfigPolygon)

      console.log(this.postId)
      await likePost(this.postId)
      this.$emit('like')
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'chainId',
      'isAuth',
    ]),
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
