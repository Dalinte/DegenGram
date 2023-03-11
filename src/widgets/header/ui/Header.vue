<template>
  <v-app-bar elevation="1">
    <template v-slot:prepend>
      <div class="rounded-circle bg-grey">
        <v-icon class="ma-2" icon="mdi-account" size="large" />
      </div>
    </template>
    <template v-slot:append>
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
    </template>
  </v-app-bar>
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

