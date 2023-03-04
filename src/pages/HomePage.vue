<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:content>
      <like-post text="123123" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/shared/ui/layout/Layout.vue'
import Header from '@/widgets/header/ui/Header.vue'
import {LikePost} from '@/entities/posts/ui'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
    LikePost,
  }
})
</script>
