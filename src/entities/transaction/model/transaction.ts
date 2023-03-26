import { TransactionConfig } from 'web3-eth'

import { Web3 } from '@/shared/lib'

export class Transaction {
  transactionObject: TransactionConfig

  constructor (transactionObject: TransactionConfig) {
    this.transactionObject = transactionObject
  }

  async send () {
    return Web3.eth.sendTransaction(this.transactionObject)
  }
}
