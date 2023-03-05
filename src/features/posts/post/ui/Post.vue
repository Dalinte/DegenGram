<template>
  <article class="post border-sm">
    <v-card elevation="0" class="pa-4">
      <v-card-title class="d-flex align-content-lg-start pa-0 mb-3">
        <author-post
          :user-name="userName"
          :address="address"
          class="mr-2"
        />
        <v-icon icon="mdi-circle-small" color="light-green-darken-4" size="x-small" class="mt-2" />
        <p class="text-light-green-darken-4">{{time}}</p>
      </v-card-title>
      <v-card-text class="text-subtitle-1 text-left text-black pa-0 mb-3">{{text}}</v-card-text>
      <v-card-actions class="pa-0">
        <like :count="likeCount" />
        <dislike :count="dislikeCount" />
        <v-btn
          color="grey"
          icon="mdi-link-variant"
          size="small"
          variant="text"
        />
      </v-card-actions>
    </v-card>
  </article>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Dislike} from '@/entities/dislike'
import {Like} from '@/entities/like'
import {AuthorPost} from '@/entities/author'

export default defineComponent({
  name: 'Post',
  components: {
    Dislike,
    Like,
    AuthorPost
  },
  props: {
    userName: String,
    address: String,
    text: String,
    dislikeCount: Number,
    likeCount: Number,
    time: String
  }
})
</script>
