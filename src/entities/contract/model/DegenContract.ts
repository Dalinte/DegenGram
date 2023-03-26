import { Contract } from '@/entities/contract/lib/Contract'
import {
  TGetPostsResponse,
  TReadContractResponse,
  TWriteContractResponse,
} from '@/entities/contract/lib/interface'

export class DegenContract extends Contract {
  createPost (text: string): TWriteContractResponse {
    return this.contract.methods.createPost(text).call()
  }

  dislikePost (postId: number): TWriteContractResponse {
    return this.contract.methods.dislikePost(postId).call()
  }

  getPost (postId: number): Promise<[string, string, number]> {
    return this.contract.methods.getPost(postId).call()
  }

  likePost (postId: number): TWriteContractResponse {
    return this.contract.methods.likePost(postId).call()
  }

  owner (): TReadContractResponse {
    return this.contract.methods.owner().call()
  }

  postCost (): Promise<number> {
    return this.contract.methods.postCost().call()
  }

  posts (userAddress: string): TGetPostsResponse {
    return this.contract.methods.posts(userAddress).call()
  }

  setPostCost (postCost: number): TWriteContractResponse {
    return this.contract.methods.setPostCost(postCost).call()
  }

  subscribeToAuthor (authorAddress: string): TWriteContractResponse {
    return this.contract.methods.subscribeToAuthor(authorAddress).call()
  }

  unsubscribeFromAuthor (authorAddress: string): TWriteContractResponse {
    return this.contract.methods.unsubscribeFromAuthor(authorAddress).call()
  }

  withdrawBalance (): TWriteContractResponse {
    return this.contract.methods.withdrawBalance().call()
  }
}
