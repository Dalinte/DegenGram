import type { PayableOverrides } from '@ethersproject/contracts'

const createPost = (value: string, overrides: PayableOverrides): void => {
  console.log(value, overrides)
}

export default createPost
