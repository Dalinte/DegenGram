import type { PayableOverrides } from '@ethersproject/contracts'

const likePost = (postId: number, overrides?: PayableOverrides) => {
  console.log(postId, overrides)
}

export default likePost
