import { contractModel } from '@/entities/contract'

const likePost = (postId: number): contractModel.TWriteContractResponse => {

  return contractModel.instanceDegenContract.likePost(postId)
}

export default likePost
