import { contractModel } from '@/entities/contract'

const dislikePost = (postId: number): contractModel.TWriteContractResponse => {
  return contractModel.instanceDegenContract.dislikePost(postId)
}

export default dislikePost
