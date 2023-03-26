import type { PayableOverrides } from '@ethersproject/contracts'

const getPost = (value: string, overrides: PayableOverrides) => {
  console.log(value, overrides)
}

export default getPost
