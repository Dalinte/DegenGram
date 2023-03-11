<template>
  <div class="author-post d-flex align-center">
    <div v-if="image" class="account-logo mr-4">
      <img :src="image" alt="logo">
    </div>
    <div v-else class="empty-logo mr-4 pa-2 rounded-circle bg-grey">
      <v-icon icon="mdi-account" size="large" />
    </div>
    <div class="info text-left">
      <div class="nickname font-weight-bold">
        <p>{{userName}}</p>
      </div>
      <div class="address text-light-green-darken-4">
        <p>{{address}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'AuthorPost',
  props: {
    address: String,
    userName: String,
    image: String
  }
})
</script>
