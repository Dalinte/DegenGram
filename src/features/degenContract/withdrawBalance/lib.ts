import type { PayableOverrides } from '@ethersproject/contracts'

const withdrawBalance = (value: string, overrides: PayableOverrides) => {
  console.log(value, overrides)
}

export default withdrawBalance
