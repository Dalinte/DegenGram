import type { PayableOverrides } from '@ethersproject/contracts'

const unsubscribeFromAuthor = (value: string, overrides: PayableOverrides) => {
  console.log(value, overrides)
}

export default unsubscribeFromAuthor
