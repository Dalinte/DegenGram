import { walletLib } from '@/entities/wallet'
import { authByMetamaskLib } from '@/features/authByMetamask'

export const authIfHasLocalFlag = async () => {
  const isUserLogin = localStorage.getItem(authByMetamaskLib.IS_USER_LOGIN)

  if (isUserLogin) {
    await auth()
  }
}

export const auth = async () => {
  if (!walletLib.wallet.isMetaMask) {
    return
  }

  const accounts = await walletLib.wallet.connect()

  if (typeof accounts === 'string') {
    throw new Error('An error occurred' + accounts)
  }

  authByMetamaskLib.setUserAddress(accounts[0])

  localStorage.setItem(authByMetamaskLib.IS_USER_LOGIN, '1')
}
