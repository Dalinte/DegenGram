import { contractModel } from '@/entities/contract'
import { transactionModel } from '@/entities/transaction'
import { Web3 } from '@/shared/lib'

export const dislikePost = async (postId: number): Promise<contractModel.TWriteContractResponse> => {
  const dislikePostMethodData = contractModel.instanceDegenContract.dislikePost(postId)
  const encodeData = contractModel.DegenContract.encode(dislikePostMethodData)

  const to = contractModel.instanceDegenContract.address
  const accounts = await Web3.eth.getAccounts()
  const raw = transactionModel.Transaction.getRawTransaction(accounts[0], to, encodeData)

  return new transactionModel.Transaction(raw).send()
}
