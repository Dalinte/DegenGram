<template>
  <header class="d-flex justify-space-between">
    <v-btn
      class="ma-2"
      color="indigo"
      icon="mdi-baby-face-outline"
    ></v-btn>
    <v-btn
      v-if="!authStatus"
      @click="toggleAuthStatus"
    >
      Connect wallet
    </v-btn>
    <UserLogout
      v-if="authStatus"
      address="0x690b9a9e9aa1c9db991c7721a92d351db4fac990"
      @click="toggleAuthStatus"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserLogout from '@/features/UserLogout.vue'

export default defineComponent({
  name: 'Header',
  components: {
    UserLogout
  },
  data() {
    return {
      authStatus: false,
    }
  },
  methods: {
    toggleAuthStatus() {
      this.authStatus = !this.authStatus
    }
  }
})
</script>

