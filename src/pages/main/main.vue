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
            />
            <v-card class="bg-transparent elevation-0">
              <v-tabs
                v-model="tab"
                bg-color="transparent"
                color="green-6"
              >
                <v-tab :value="1" class="font-weight-bold text-capitalize">Global feed</v-tab>
                <v-tab :value="2" class="font-weight-bold text-capitalize">My feed</v-tab>
              </v-tabs>
              <v-card-text class="pa-0 bg-transparent">
                <v-window v-model="tab">
                  <v-window-item :value="1">
                    <posts-list
                      :posts="posts"
                      @like="like"
                      @dislike="dislike"
                      @click-link="clickLink"
                    />
                  </v-window-item>
                  <v-window-item :value="2">
                    <posts-list
                      :posts="posts"
                      @like="like"
                      @dislike="dislike"
                      @click-link="clickLink"
                    />
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
import {Post} from '@/widgets/posts/post'
import {PostsList} from '@/widgets/posts'
import {CreatePost} from '@/features/degenContract/createPost'
import {Profile} from '@/widgets/profile'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'

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
  data () {
    return {
      tab: 1
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
  },
})
</script>

<style lang="scss">
.explorer-button {
  bottom: 50px;
}
</style>
