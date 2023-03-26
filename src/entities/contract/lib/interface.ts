import { Contract as ContractInterface } from 'web3-eth-contract'
import { PromiEvent } from 'web3-core'
import { TransactionReceipt } from 'web3-eth'

export interface IContract {
  contract: ContractInterface
}

export type TWriteContractResponse = PromiEvent<TransactionReceipt>
export type TReadContractResponse = Promise<[string]>

export type TGetPostsResponse = Promise<[string, string, number] & {
  author: string;
  content: string;
  createdAt: number;
}>
