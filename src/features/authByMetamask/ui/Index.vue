<template>
  <ConnectWalletButton
    :address="address"
    :txnCount="0"
    @click="click"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { walletModel } from '@/entities/wallet'
import { mapGetters } from 'vuex'
import {authByMetamaskModel} from '@/features/authByMetamask'

export default defineComponent({
  name: 'Index',
  beforeCreate () {
    authByMetamaskModel.authIfHasLocalFlag()

    walletModel.wallet.onAccountsChanged((accounts: string[]) => {
      authByMetamaskModel.setUserAddress(accounts[0])
      console.log("account changed to: ", accounts[0]);
    })

    walletModel.wallet.onChainChanged((chainId: number) => {
      console.log("chain changed to:", chainId);
    });
  },
  computed: {
    ...mapGetters('wallet', [
      'address',
      'isLogin',
    ])
  },
  methods: {
    click() {
      if (!this.isLogin) {
        authByMetamaskModel.auth()
      }
    }
  }
})
</script>
