import { walletModel } from '@/entities/wallet'

export const onAccountsChanged = () => {
  walletModel.wallet.onChainChanged((chainId: number) => {
    // добавить обработчик
    console.log('chain changed to:', chainId)
  })
}
