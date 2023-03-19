import { ActionContext } from 'vuex'

export const walletStoreName = 'wallet'
export const walletStoreNameSpace = `${walletStoreName}/`

export const state = {
  address: '',
  chainId: 1,
}

export type TState = typeof state

export const walletStoreModule = {
  strict: process.env.NODE_ENV === 'development',
  namespaced: true,
  state,
  mutations: {
    saveUserAddress (state: TState, payload: {address: string}) {
      state.address = payload.address
    },
    saveChainId (state: TState, payload: {chainId: number}) {
      state.chainId = payload.chainId
    },
  },
  actions: {
    setUserAddress ({ commit }: ActionContext<TState, any>, address: string) {
      commit('saveUserAddress', address)
    },
    setChainId ({ commit }: ActionContext<TState, any>, chainId: string) {
      commit('saveChainId', chainId)
    },
  },
  getters: {
    address: (state: TState) => state.address,
    isLogin: (state: TState) => !!state.address,
    chainId: (state: TState) => state.chainId,
  },
}
