import { store } from '@/app/providers'
import { walletModel, walletStore } from '@/entities/wallet'

export const IS_USER_LOGIN = 'isUserLogin'

export const authIfHasLocalFlag = async () => {
  const isUserLogin = localStorage.getItem(IS_USER_LOGIN)

  if (isUserLogin) {
    await auth()
  }
}

export const auth = async () => {
  const accounts = await walletModel.wallet.connect()
  if (typeof accounts === 'string') {
    throw new Error('An error occurred' + accounts)
  }

  setUserAddress(accounts[0])

  localStorage.setItem(IS_USER_LOGIN, '1')
}

export const setUserAddress = (address: string) => {
  const actionName = walletStore.walletStoreNameSpace + 'setUserAddress'
  store.dispatch(actionName, { address })
}
