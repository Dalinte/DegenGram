import { createStore } from 'vuex'

// eslint-disable-next-line import/no-unresolved
import { walletModel } from '@/entities/wallet'

export const store = createStore({
  modules: {
    [walletModel.walletStoreName]: walletModel.walletStoreModule,
  },
})
