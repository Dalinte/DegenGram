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
        <ConnectWalletButton address="0x690b9a9e9aa1c9db991c7721a92d351db4fac990" />
      </template>
    </MainContent>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserLogout from '@/features/UserLogout.vue'
import {MainContainer, MainContent} from '@/shared/ui'

export default defineComponent({
  name: 'Header',
  components: {
    UserLogout,
    MainContainer,
    MainContent
  },
})
</script>

