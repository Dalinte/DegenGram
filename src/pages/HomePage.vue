<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:content>
      <author-post />
      <like text="123123" />
      <dislike text="123123" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Layout} from '@/shared/ui'
import {Header} from '@/widgets/header'
import {AuthorPost} from '@/entities/author'
import {Dislike} from '@/entities/dislike'
import {Like} from '@/entities/like'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
    Like,
    Dislike,
    AuthorPost
  }
})
</script>
