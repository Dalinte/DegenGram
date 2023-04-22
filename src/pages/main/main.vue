<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:content>
      <MainContainer>
        <MainContent>
          <template v-slot:aside-right>
            <v-btn @click="click" prepend-icon="mdi-link-variant" class="explorer-button mt-auto position-fixed">
              Explore the contract
            </v-btn>
          </template>
          <template v-slot:content>
            <CreatePost
              v-if="isAuth"
              :address="addressUser"
              class="mb-6"
            />
            <posts-list
              :posts="posts"
              @like="like"
              @dislike="dislike"
              @click-link="clickLink"
            />
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
import {CreatePost} from '@/features/degenContract/createPost'
import {Profile} from '@/widgets/profile'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'
import { contractModel } from '@/entities/contract'

export default defineComponent({
  name: 'MainPage',
  components: {
    MainContent,
    MainContainer,
    Header,
    Layout,
    Post,
    PostsList,
    CreatePost,
    Profile
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
    },
    async click() {
      const post = await contractModel.instanceDegenContract.getPost(2)
      console.log(post)
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'isAuth',
    ]),

    isAuth (): boolean {
      return true
    },
    addressUser (): string {
      return this.$store.getters[walletModel.walletStoreNameSpace + 'address']
    },
    posts () {
      return [
        {
          id: 0,
          userName: '@User4jr5',
          address: this.$store.getters[walletModel.walletStoreNameSpace + 'address'],
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false,
          authorNickname: '0x976ea74026e726554db657fa54763abd0c3a0aa9'
        },
        {
          id: 1,
          userName: '@User4jr5',
          address: this.$store.getters[walletModel.walletStoreNameSpace + 'address'],
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false,
          authorNickname: '0x976ea74026e726554db657fa54763abd0c3a0aa9'
        },
        {
          id: 2,
          userName: '@User4jr5',
          address: this.$store.getters[walletModel.walletStoreNameSpace + 'address'],
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false,
          authorNickname: '0x976ea74026e726554db657fa54763abd0c3a0aa9'
        },
        {
          id: 3,
          userName: '@User4jr5',
          address: this.$store.getters[walletModel.walletStoreNameSpace + 'address'],
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false,
          authorNickname: '0x976ea74026e726554db657fa54763abd0c3a0aa9'
        },
        {
          id: 4,
          userName: '@User4jr5',
          address: this.$store.getters[walletModel.walletStoreNameSpace + 'address'],
          like: 20000,
          dislike: 30000,
          text: 'This is the best known and second most common type of lightning. Of all the different types of lightning, it poses the greatest threat to life and property since it strikes the ground. Cloud-to-ground lightning is a lightning discharge between a cumulonimbus cloud and the ground.',
          link: '',
          time: '23s',
          isLiked: false,
          isDisliked: false,
          authorNickname: '0x976ea74026e726554db657fa54763abd0c3a0aa9'
        }
      ]
    }
  },
})
</script>

<style lang="scss">
.explorer-button {
  bottom: 50px;
}
</style>
