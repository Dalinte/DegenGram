import { walletLib } from '@/entities/wallet'

export const onAccountsChanged = () => {
  walletLib.wallet.onChainChanged((chainId: number) => {
    // добавить обработчик
    console.log('chain changed to:', chainId)
  })
}
