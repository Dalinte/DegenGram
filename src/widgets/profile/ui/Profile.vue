<template>
  <div class="profile d-flex align-center ma-8">
    <div v-if="image" class="account-logo mr-4">
      <img :src="image" alt="logo">
    </div>
    <div v-else class="empty-logo mr-4 pa-2 rounded-circle bg-grey">
      <v-icon icon="mdi-account" size="x-large" />
    </div>
    <div class="right-block d-flex flex-column w-100">
      <div class="user d-flex justify-space-between align-center">
        <div class="user__info text-left">
          <p class="nickname font-weight-bold" >{{userName}}</p>
          <p class="address text-light-green-darken-4">{{address}}</p>
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
          <p class="font-weight-bold text-light-green-darken-4">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
  props: {
    address: String,
    userName: String,
    image: String
  },
  computed: {
    isMyAccount (): boolean {
      return false
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
    }
  }
})
</script>
