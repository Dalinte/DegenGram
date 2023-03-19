import { createStore } from 'vuex'

import { walletModel } from '@/entities/wallet'

export const store = createStore({
  modules: {
    [walletModel.walletStoreName]: walletModel.walletStoreModule,
  },
})
