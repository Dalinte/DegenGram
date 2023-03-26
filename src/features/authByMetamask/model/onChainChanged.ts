import { walletLib } from '@/entities/wallet'
import { authByMetamaskLib } from '@/features/authByMetamask'

export const onChainChanged = () => {
  walletLib.wallet.onAccountsChanged((accounts: string[]) => {
    authByMetamaskLib.setUserAddress(accounts[0])
    console.log('account changed to: ', accounts[0])
  })
}
