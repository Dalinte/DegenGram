<template>
  <article class="post border-sm">
    <v-card elevation="0" class="pa-4">
      <v-card-title class="d-flex align-content-lg-start pa-0 mb-4">
        <author-post
          :user-name="post.userName"
          :address="post.address"
          class="mr-2"
        />
        <v-icon icon="mdi-circle-small" color="light-green-darken-4" size="x-small" class="mt-1" />
        <p class="text-light-green-darken-4 text-body-1">{{post.timePassed}}</p>
      </v-card-title>
      <v-card-text class="text-subtitle-1 text-left text-black pa-0 mb-3">{{post.content}}</v-card-text>
      <v-card-actions class="pa-0">
        <Like :post-id="post.id" :count="post.likeCount" :is-liked="post.isLiked" class="mr-2"  @like="like" />
        <Dislike :post-id="post.id" :count="post.dislikeCount" :is-disliked="post.isDisliked" class="mr-2" @dislike="dislike" />
        <SubscribeToAuthorButton :authorAddress="post.address"/>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Dislike} from '@/features/degenContract/dislike'
import {SubscribeToAuthorButton} from '@/features/degenContract/subscribeToAuthor'
import {Like} from '@/features/degenContract/like'
import {AuthorPost} from '@/entities/author'
import {postModel} from '@/widgets/posts/post'

export default defineComponent({
  name: 'Post',
  components: {
    SubscribeToAuthorButton,
    Like,
    Dislike,
    AuthorPost
  },
  props: {
    post: {
      type: Object as PropType<postModel.Post>,
      required: true
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
