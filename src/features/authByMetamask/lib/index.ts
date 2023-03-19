import { store } from '@/app/providers'
import { walletStore } from '@/entities/wallet'

export const IS_USER_LOGIN = 'isUserLogin'

export const setUserAddress = (address: string) => {
  const actionName = walletStore.walletStoreNameSpace + 'setUserAddress'
  store.dispatch(actionName, { address })
}
