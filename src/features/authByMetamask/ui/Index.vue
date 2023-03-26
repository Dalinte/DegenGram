<template>
  <div class="d-flex align-center" @click="logout">
    <ConnectWalletButton
      :address="address"
      :txnCount="0"
      @click="login"
    />
    <v-icon v-if="isAuth" class="ml-2" icon="mdi-exit-to-app" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import {authByMetamaskModel} from '@/features/authByMetamask'

export default defineComponent({
  name: 'Index',
  beforeCreate () {
    authByMetamaskModel.authIfHasLocalFlag()
    authByMetamaskModel.onChainChanged()
    authByMetamaskModel.onAccountsChanged()
  },
  computed: {
    ...mapGetters('wallet', [
      'address',
      'isAuth',
    ])
  },
  methods: {
    login() {
      if (!this.isAuth) {
        authByMetamaskModel.auth()
      }
    },
    logout() {
      if (this.isAuth) {
        authByMetamaskModel.logout()
      }
    }
  }
})
</script>
