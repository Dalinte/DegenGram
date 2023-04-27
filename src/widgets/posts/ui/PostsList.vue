<template>
  <div class="posts-list" v-if="posts.length">
    <post
      v-for="(post, index) in posts"
      :key="post.id"
      :post="post"
      class="mb-1"
      @like="like(index)"
      @dislike="dislike(index)"
      @click-link="clickLink(index)"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import { mapGetters } from 'vuex'
import { walletModel } from '@/entities/wallet'
import {postListModel} from '@/widgets/posts'
import {postModel, Post} from '@/widgets/posts/post'

export default defineComponent({
  name: 'PostsList',
  components: {
    Post
  },
  props: {
    posts: {
      type: Array as PropType<postModel.Post[]>,
      required: true
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'chainId',
      'isAuth',
    ]),
  },
  data() {
    return {
      isPostsLoading: false,
      posts: [] as PropType<postModel.Post[]>,
    }
  },
  async created () {
    this.isPostsLoading = true

    postListModel.fetchAndParsePostList({limit: 30, offset: 0}, true)
      .then((posts) => {
        //@ts-ignore
        // Проблема с интерфейсом
        this.posts = posts
        console.log(posts)
    })
      .finally(() => {
        this.isPostsLoading = false
    })
  },
  methods: {
    like (index: number): void {
      this.$emit('like', index)
    },
    async dislike (postId: number) {
      this.$emit('dislike', postId)
    },
    clickLink (index: number): void {
      this.$emit('clickLink', index)
    },
  }
})
</script>
