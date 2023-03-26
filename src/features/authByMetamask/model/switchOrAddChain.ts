import { walletLib } from '@/entities/wallet'
import { IChainConfig } from '@/shared/config'

export const switchOrAddChain = async (currentChainId: number, receiverChainId: number, chainConfig: IChainConfig) => {
  if (!walletLib.wallet.isMetaMask) {
    return
  }

  if (currentChainId !== receiverChainId) {
    await walletLib.wallet.switchOrAddChain(receiverChainId, chainConfig)
  }
}
