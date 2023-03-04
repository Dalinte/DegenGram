<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:content>
      <author-post />
      <like-post text="123123" />
      <dislike-post text="123123" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Layout} from '@/shared/ui'
import {Header} from '@/widgets/header'
import {DislikePost, LikePost, AuthorPost} from '@/entities/ui'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
    LikePost,
    DislikePost,
    AuthorPost
  }
})
</script>
