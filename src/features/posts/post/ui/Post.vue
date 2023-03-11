<template>
  <article class="post border-sm">
    <v-card elevation="0" class="pa-4">
      <v-card-title class="d-flex align-content-lg-start pa-0 mb-3">
        <author-post
          :user-name="item.userName"
          :address="item.address"
          class="mr-2"
        />
        <v-icon icon="mdi-circle-small" color="light-green-darken-4" size="x-small" class="mt-2" />
        <p class="text-light-green-darken-4">{{item.time}}</p>
      </v-card-title>
      <v-card-text class="text-subtitle-1 text-left text-black pa-0 mb-3">{{item.text}}</v-card-text>
      <v-card-actions class="pa-0">
        <like :count="item.like" :is-liked="item.isLiked" @click-btn="clickLike" />
        <dislike :count="item.dislike" :is-disliked="item.isDisliked" @click-btn="clickDislike" />
        <v-btn
          color="grey"
          icon="mdi-link-variant"
          size="small"
          variant="text"
          @click="clickLink"
        />
      </v-card-actions>
    </v-card>
  </article>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Dislike} from '@/entities/dislike'
import {Like} from '@/entities/like'
import {AuthorPost} from '@/entities/author'
import {IPost} from '@/features/posts/post'

export default defineComponent({
  name: 'Post',
  components: {
    Dislike,
    Like,
    AuthorPost
  },
  props: {
    item: {
      type: Object as PropType<IPost>
    }
  },
  methods: {
    clickLike (): void {
      this.$emit('clickLike')
    },
    clickDislike (): void {
      this.$emit('clickDislike')
    },
    clickLink (): void {
      this.$emit('clickLink')
    }
  }
})
</script>
