import type { PayableOverrides } from '@ethersproject/contracts'

const posts = (value: string, overrides: PayableOverrides) => {
  console.log(value, overrides)
}

export default posts