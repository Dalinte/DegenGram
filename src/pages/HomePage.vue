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
import HelloWorld from '@/features/HelloWorld.vue';
import Layout from '@/shared/ui/layout/Layout.vue'
import Header from '@/widgets/header/ui/Header.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Layout,
    HelloWorld
  }
})
</script>
