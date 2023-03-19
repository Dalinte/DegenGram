import { walletModel } from '@/entities/wallet'
import { authByMetamaskLib } from '@/features/authByMetamask'

export const authIfHasLocalFlag = async () => {
  const isUserLogin = localStorage.getItem(authByMetamaskLib.IS_USER_LOGIN)

  if (isUserLogin) {
    await auth()
  }
}

export const auth = async () => {
  if (!walletModel.wallet.isMetaMask) {
    return
  }

  const accounts = await walletModel.wallet.connect()

  if (typeof accounts === 'string') {
    throw new Error('An error occurred' + accounts)
  }

  authByMetamaskLib.setUserAddress(accounts[0])

  localStorage.setItem(authByMetamaskLib.IS_USER_LOGIN, '1')
}
