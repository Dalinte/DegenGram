import { contractModel } from '@/entities/contract'
import { transactionModel } from '@/entities/transaction'
import { Web3 } from '@/shared/lib'

export const createPost = async (text: string): Promise<contractModel.TWriteContractResponse> => {
  const postCost = await contractModel.instanceDegenContract.postCost()

  const createPostMethodData = contractModel.instanceDegenContract.createPost(text)
  const encodeData = contractModel.DegenContract.encode(createPostMethodData)

  const to = contractModel.instanceDegenContract.address
  const accounts = await Web3.eth.getAccounts()
  const raw = transactionModel.Transaction.getRawTransaction(accounts[0], to, encodeData, postCost)

  return new transactionModel.Transaction(raw).send()
}
