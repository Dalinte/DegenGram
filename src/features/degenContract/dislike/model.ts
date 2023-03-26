import type { PayableOverrides } from '@ethersproject/contracts'

const dislikePost = (postId: number, overrides?: PayableOverrides) => {
  console.log(postId, overrides)
}

export default dislikePost
