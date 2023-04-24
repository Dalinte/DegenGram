<template>
  <div class="author-post d-flex align-center">
    <Jazzicon v-if="address" :address="address" :diameter="50" class="d-flex account-logo mr-5 cursor-pointer align-center" @click="goToProfile" />
    <div v-else class="empty-logo mr-4 pa-2 rounded-circle bg-grey">
      <v-icon icon="mdi-account" size="large" />
    </div>
    <div class="info text-left">
      <div class="nickname cursor-pointer" @click="goToProfile">
        <SplitText class="text-body-1 font-weight-bold" :text="userName"/>
      </div>
      <div
        v-clipboard:copy="address"
        v-clipboard:success="onSuccessCopy"
        class="address text-light-green-darken-4 cursor-pointer"
        @mouseleave="hoverOut"
      >
        <split-text :text="address" class="text-body-1" />
        <v-tooltip
          activator="parent"
          location="top"
        >
          {{getTooltipText}}
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {SplitText} from '@/shared/ui'

export default defineComponent({
  name: 'AuthorPost',
  props: {
    address: {
      type: String,
      required: true
    },
    userName: String,
    image: String
  },
  components: {
    SplitText
  },
  data () {
    return {
      isCopied: false
    }
  },
  computed: {
    getTooltipText (): string {
      return this.isCopied ? 'Copied!' : 'Copy'
    }
  },
  methods: {
    goToProfile (): void {
      this.$router.push(`/profile/${this.address}`)
    },
    onSuccessCopy (): void {
      this.isCopied = true
    },
    hoverOut (): void {
      this.isCopied = false
    }
  }
})
</script>
