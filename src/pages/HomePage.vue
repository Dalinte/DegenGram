<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:content>
      <MainContainer>
       <MainContent>
         <template v-slot:aside-right>
           <v-btn prepend-icon="mdi-link-variant" class="explorer-button mt-auto position-fixed">
             Explore the contract
           </v-btn>
         </template>
         <template v-slot:content>
           <profile user-name="@User4jr5" address="0xr3...4jr5" />
           <send-post v-if="isAuth" class="mb-6" />
           <posts-list :posts="posts" @like="like" @dislike="dislike" @click-link="clickLink" />
         </template>
       </MainContent>
      </MainContainer>
    </template>
  </Layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Layout, MainContainer, MainContent} from '@/shared/ui'
import {Header} from '@/widgets/header'
import {Post} from '@/features/posts/post'
import {PostsList} from '@/widgets/posts/posts-list'
import {SendPost} from '@/widgets/posts/send-post'
import {Profile} from '@/widgets/profile'

export default defineComponent({
  name: 'HomePage',
  components: {
    MainContent,
    MainContainer,
    Header,
    Layout,
    Post,
    PostsList,
    SendPost,
    Profile
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
    like (index: number): void {
      this.posts[index].isLiked = !this.posts[index].isLiked
    },
    dislike (index: number): void {
      this.posts[index].isDisliked = !this.posts[index].isDisliked
    },
    clickLink (index: number): void {
      console.log('clickLink', index)
    }
  },
  computed: {
    isAuth (): boolean {
      return true
    }
  }
})
</script>

<style lang="scss">
  .explorer-button {
    bottom: 50px;
  }
</style>
