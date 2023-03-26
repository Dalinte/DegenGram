import type { PayableOverrides } from '@ethersproject/contracts'

const subscribeToAuthor = (value: string, overrides: PayableOverrides) => {
  console.log(value, overrides)
}

export default subscribeToAuthor
