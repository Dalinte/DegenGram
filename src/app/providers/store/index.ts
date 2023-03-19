import { createStore } from 'vuex'

import { walletStore } from '@/entities/wallet'

export const store = createStore({
  modules: {
    [walletStore.walletStoreName]: walletStore.walletStoreModule,
  },
})
