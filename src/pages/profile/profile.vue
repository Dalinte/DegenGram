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
            <v-sheet class="pa-3">
              <v-btn variant="text" @click="goToMain">
                <v-icon icon="mdi-arrow-left" size="large" class="mr-2 text-light-green-darken-4" />
                News
              </v-btn>
            </v-sheet>
            <v-divider />
            <profile user-name="@User4jr5" :address="addressUser" />
            <v-card>
              <v-tabs
                v-model="tab"
                bg-color="transparent"
              >
                <v-tab :value="1">News</v-tab>
              </v-tabs>
              <v-card-text>
                <v-window v-model="tab">
                  <v-window-item :value="1">
                    <PostsList :posts="posts" @click-link="clickLink" />
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
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
import {PostsList} from '@/widgets/posts'
import {Profile} from '@/widgets/profile'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'
import { contractModel } from '@/entities/contract'

export default defineComponent({
  name: 'ProfilePage',
  components: {
    MainContent,
    MainContainer,
    Header,
    Layout,
    PostsList,
    Profile
  },
  data () {
    return {
      tab: 0
    }
  },
  methods: {
    goToMain (): void {
      this.$router.push('/')
    },
    clickLink (index: number): void {
      console.log('clickLink', index)
    },
    async click() {
      const post = contractModel.instanceDegenContract.getPost(1)
      console.log(post)
    }
  },
  computed: {
    ...mapGetters(walletModel.walletStoreName, [
      'isAuth',
    ]),
    isAuth (): boolean {
      return this.isAuth
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
          isDisliked: false
        },
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
          isDisliked: false
        },
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
          isDisliked: false
        },
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
          isDisliked: false
        },
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
          isDisliked: false
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
