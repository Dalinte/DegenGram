<template>
  <MainContainer>
    <MainContent>
      <template v-slot:aside-left>
        <v-img
          :width="55"
          aspect-ratio="1"
          src="images/logo.png"
          cover
        ></v-img>
      </template>
      <template v-slot:aside-right>
        <AuthByMetamask/>
      </template>
    </MainContent>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {MainContainer, MainContent} from '@/shared/ui'
import {AuthByMetamask} from '@/features/authByMetamask'
export default defineComponent({
  name: 'Header',
  components: {
    MainContainer,
    MainContent,
    AuthByMetamask,
  },
})
</script>

