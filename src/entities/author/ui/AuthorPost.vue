<template>
  <div class="author-post">
    <div v-if="image" class="account-logo">
      <img :src="image" alt="logo">
    </div>
    <div v-else class="empty-logo">
      <v-icon icon="mdi-face-profile" />
    </div>
    <div class="info">
      <div class="nickname">
        <p>{{nickName}}</p>
      </div>
      <div class="address">
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
    nickName: String,
    image: String
  }
})
</script>
