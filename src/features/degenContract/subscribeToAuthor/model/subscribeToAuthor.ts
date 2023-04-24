import { contractModel } from '@/entities/contract'
import { transactionModel } from '@/entities/transaction'
import { Web3 } from '@/shared/lib'

export const subscribeToAuthor = async (authorAddress: string): Promise<contractModel.TWriteContractResponse> => {
  const subscribeToAuthorMethodData = contractModel.instanceDegenContract.subscribeToAuthor(authorAddress)
  const encodeData = contractModel.DegenContract.encode(subscribeToAuthorMethodData)

  const to = contractModel.instanceDegenContract.address
  const accounts = await Web3.eth.getAccounts()
  const raw = transactionModel.Transaction.getRawTransaction(accounts[0], to, encodeData)

  return new transactionModel.Transaction(raw).send()
}
