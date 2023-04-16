<template>
  <div class="send-post border-sm pa-4 d-flex flex-column">
    <v-textarea
      v-model="textPost"
      label=""
      placeholder="What’s happening?"
      variant="solo"
      class="elevation-0 text-subtitle-1"
      rows="2"
      bg-color="transparent"
      no-resize
    >
      <template #prepend-inner>
        <div class="avatar cursor-pointer">
          <v-avatar>
            <Jazzicon :address="address" :diameter="60" />
          </v-avatar>
        </div>
      </template>
    </v-textarea>
    <v-btn
      color="green-1"
      size="large"
      rounded="lg"
      class="align-self-end"
      :disabled="isDisabled"
      @click="createPost"
    >
      {{textBtn}}
    </v-btn>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { ChainConfigPolygon, polygonChainId } from '@/shared/config'
import {createPostModel} from '@/features/degenContract/createPost'
import { mapGetters } from 'vuex'
import { walletModel } from '@/entities/wallet'

export default defineComponent({
  name: 'CreatePost',
  props: {
    address: String
  },
  data () {
    return {
      textPost: ''
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'chainId',
      'isAuth',
    ]),
    textBtn (): string {
      return 'Croak'
    },
    isDisabled (): boolean {
      return !this.textPost
    }
  },
  methods: {
    async createPost() {
      await walletModel.switchOrAddChain(this.chainId, polygonChainId, ChainConfigPolygon)

      await createPostModel.createPost(this.textPost).then()
    }
  }
})
</script>
