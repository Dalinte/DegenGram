<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:aside-right>
      <v-btn prepend-icon="mdi-link-variant" class="mt-auto position-fixed">
        Explore the contract
      </v-btn>
    </template>
    <template v-slot:content>
      <send-post v-if="isAuth" class="mb-6" />
      <posts-list :posts="posts" @click-like="clickLike" @click-dislike="clickDislike" />
    </template>
  </Layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Layout} from '@/shared/ui'
import {Header} from '@/widgets/header'
import {Post} from '@/features/posts/post'
import {PostsList} from '@/widgets/posts/posts-list'
import {SendPost} from '@/widgets/posts/send-post'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
    Post,
    PostsList,
    SendPost
  },
  data () {
    return {
      posts: [
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false
        }
      ]
    }
  },
  methods: {
    clickLike (index: number): void {
      this.posts[index].isLiked = !this.posts[index].isLiked
    },
    clickDislike (index: number): void {
      this.posts[index].isDisliked = !this.posts[index].isDisliked
    },
  },
  computed: {
    isAuth (): boolean {
      return true
    }
  }
})
</script>
