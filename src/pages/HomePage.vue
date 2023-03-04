<template>
  <Layout>
    <template v-slot:header>
      <Header/>
    </template>
    <template v-slot:content>

    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {Layout} from '@/shared/ui'
import {Header} from '@/widgets/header'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
  }
})
</script>
