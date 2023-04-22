<template>
  <v-btn
    color="grey"
    icon="mdi-link-variant"
    size="small"
    variant="text"
    @click="click"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChainConfigPolygon, polygonChainId } from '@/shared/config'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'
import {subscribeToAuthor} from '../model/subscribeToAuthor'

export default defineComponent({
  name: 'SubscribeToAuthorButton',
  props: {
    authorAddress: {
      type: String,
      required: true
    }
  },
  methods: {
    async click() {
      await walletModel.switchOrAddChain(this.chainId, polygonChainId, ChainConfigPolygon)

      console.log(this.authorAddress)
      await subscribeToAuthor(this.authorAddress)
      this.$emit('like')
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'chainId',
    ]),
  }
})
</script>
