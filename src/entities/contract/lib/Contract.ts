import { Contract as ContractInterface } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'

// eslint-disable-next-line import/no-unresolved
import { IContract } from '@/entities/contract/lib/interface'
import { Web3 } from '@/shared/lib'

export class Contract implements IContract {
  contract: ContractInterface

  constructor (address: string, abi: AbiItem) {
    this.contract = new Web3.eth.Contract(abi, address)
  }
}
