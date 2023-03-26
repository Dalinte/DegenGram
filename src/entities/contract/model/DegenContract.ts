import { Contract } from '@/entities/contract/lib/Contract'
import {
  TGetPostsResponse,
  TReadContractResponse,
  TWriteContractResponse,
} from '@/entities/contract/lib/interface'

export class DegenContract extends Contract {
  createPost (text: string): string {
    return this.contract.methods.createPost(text)
  }

  dislikePost (postId: number): TWriteContractResponse {
    return this.contract.methods.dislikePost(postId)
  }

  getPost (postId: number): Promise<[string, string, number]> {
    return this.contract.methods.getPost(postId).call()
  }

  likePost (postId: number): TWriteContractResponse {
    return this.contract.methods.likePost(postId)
  }

  owner (): TReadContractResponse {
    return this.contract.methods.owner()
  }

  postCost (): TReadContractResponse {
    return this.contract.methods.postCost().call()
  }

  posts (userAddress: string): TGetPostsResponse {
    return this.contract.methods.posts(userAddress).call()
  }

  setPostCost (postCost: number): TWriteContractResponse {
    return this.contract.methods.setPostCost(postCost)
  }

  subscribeToAuthor (authorAddress: string): TWriteContractResponse {
    return this.contract.methods.subscribeToAuthor(authorAddress)
  }

  unsubscribeFromAuthor (authorAddress: string): TWriteContractResponse {
    return this.contract.methods.unsubscribeFromAuthor(authorAddress)
  }

  withdrawBalance (): TWriteContractResponse {
    return this.contract.methods.withdrawBalance()
  }
}
