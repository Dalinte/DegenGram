import type { PayableOverrides } from '@ethersproject/contracts'

export class createPost {
  createPost (value: string, overrides: PayableOverrides) {
    console.log(value, overrides)
  }
}
