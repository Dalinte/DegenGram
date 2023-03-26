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
        <like :post-id="item.id" :count="item.like" :is-liked="item.isLiked" @like="like" />
        <dislike :post-id="item.id" :count="item.dislike" :is-disliked="item.isDisliked" @dislike="dislike" />
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
import {Dislike} from '@/features/degenContract/dislike'
import {Like} from '@/features/degenContract/like'
import {AuthorPost} from '@/entities/author'
import {IPost} from '@/features/posts/post'
import like from '@/entities/like/ui/Like.vue'

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
    clickLink (): void {
      this.$emit('clickLink')
    },
    dislike (): void {
      this.$emit('dislike')
    },
    like (): void {
      this.$emit('like')
    }
  }
})
</script>
