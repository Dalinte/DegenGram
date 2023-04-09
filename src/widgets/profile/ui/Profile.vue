<template>
  <div class="profile d-flex align-center pa-8 bg-white">
    <div class="account-logo mr-4 cursor-pointer" @click="goToProfile">
      <Jazzicon :address="address" :diameter="90" />
    </div>
    <div class="right-block d-flex flex-column w-100">
      <div class="user d-flex justify-space-between align-center">
        <div class="user__info text-left">
          <p
            class="nickname font-weight-bold cursor-pointer"
            @click="goToProfile"
          >
            {{userName}}
          </p>
          <p
            class="address text-light-green-darken-4 cursor-pointer"
            v-clipboard:copy="address"
            v-clipboard:success="onSuccessCopy"
            @mouseleave="hoverOut"
          >
            {{getAddress}}
            <v-tooltip
              activator="parent"
              location="top"
            >
              {{getTooltipText}}
            </v-tooltip>
          </p>
        </div>
        <div class="user__action">
          <v-btn
            color="green"
            size="large"
            rounded="lg"
            variant="outlined"
            class="align-self-end"
          >
            {{textBtn}}
          </v-btn>
        </div>
      </div>
      <div class="indicators d-flex">
        <div v-for="item in indicators" class="item d-flex mr-4">
          <p class="font-weight-bold mr-1">{{item.quantity}}</p>
          <p class="text-light-green-darken-4">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { splitEllipsis } from '@/shared/lib'
import { walletModel } from '@/entities/wallet'

export default defineComponent({
  name: 'Profile',
  props: {
    userName: String,
    image: String,
    address: {
      type: String,
      required: true
    },
  },
  data () {
    return {
      isCopied: false
    }
  },
  computed: {
    isMyAccount (): boolean {
      return this.$route.params.id === this.$store.getters[walletModel.walletStoreNameSpace + 'address']
    },
    textBtn (): string {
      return this.isMyAccount ? 'Edit' : 'Subscribe'
    },
    indicators () {
      return [
        {
          id: 0,
          name: 'Following',
          quantity: 569
        },
        {
          id: 1,
          name: 'Followers',
          quantity: 72
        },
        {
          id: 2,
          name: 'Posts',
          quantity: 72
        }
      ]
    },
    getAddress (): string {
      return splitEllipsis(this.address)
    },
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
