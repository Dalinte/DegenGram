import { PromiEvent } from 'web3-core'
import { TransactionConfig, TransactionReceipt } from 'web3-eth'

import { Web3 } from '@/shared/lib'

export class Transaction {
  transactionObject: TransactionConfig

  constructor (transactionObject: TransactionConfig) {
    this.transactionObject = transactionObject
  }

  send (): PromiEvent<TransactionReceipt> {
    return Web3.eth.sendTransaction(this.transactionObject)
  }
}
