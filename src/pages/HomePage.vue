<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:aside-right>
      <v-btn prepend-icon="mdi-polymer">
        Explore the contract
      </v-btn>
    </template>
    <template v-slot:content>
      <posts-list :posts="posts" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Layout} from '@/shared/ui'
import {Header} from '@/widgets/header'
import {Post, PostModel} from '@/features/posts/post'
import {PostsList} from '@/widgets/posts/posts-list'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
    Post,
    PostsList
  },
  computed: {
    posts (): Array<PostModel> {
      return [
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s'
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s'
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s'
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s'
        },
        {
          id: 0,
          userName: '@User4jr5',
          address: '0xr3...4jr5',
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s'
        }
      ]
    }
  }
})
</script>
