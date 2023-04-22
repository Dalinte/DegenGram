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
      <p class="text-grey" >{{getCount}}</p>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {dislikeModel} from '@/features/degenContract/dislike'
import { ChainConfigPolygon, polygonChainId } from '@/shared/config'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Dislike',
  props: {
    count: Number,
    postId: {
      type: Number,
      required: true
    },
    isDisliked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async click (): Promise<void> {
      await walletModel.switchOrAddChain(this.chainId, polygonChainId, ChainConfigPolygon)

      await dislikeModel.dislikePost(this.postId)
      this.$emit('dislike')
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'chainId',
      'isAuth',
    ]),
    getIcon (): string {
      return this.isDisliked ? 'mdi-thumb-down' : 'mdi-thumb-down-outline'
    },
    getCount (): string {
      return `${this.count}`
    }
  }
})
</script>
