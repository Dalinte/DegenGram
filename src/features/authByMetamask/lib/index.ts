import { store } from '@/app/providers'
import { walletModel } from '@/entities/wallet'

export const IS_USER_LOGIN = 'isUserLogin'

export const setUserAddress = (address: string) => {
  const actionName = walletModel.walletStoreNameSpace + 'setUserAddress'
  store.dispatch(actionName, { address })
}
