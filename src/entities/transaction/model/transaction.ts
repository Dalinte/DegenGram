import { PromiEvent } from 'web3-core'
import { TransactionConfig, TransactionReceipt } from 'web3-eth'
import { contractModel } from '@/entities/contract'

import { Web3 } from '@/shared/lib'

export class Transaction {
  transactionObject: TransactionConfig

  constructor (transactionObject: TransactionConfig) {
    this.transactionObject = transactionObject
  }

  send (): contractModel.TWriteContractResponse {
    return Web3.eth.sendTransaction(this.transactionObject)
  }

  static getRawTransaction (from: string, to: string, encodeData: string, ethValue = '0'): TransactionConfig {
    return {
      from,
      to,
      value: ethValue,
      data: encodeData,
    }
  }
}
