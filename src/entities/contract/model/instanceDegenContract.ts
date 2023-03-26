import { degenContractAbi } from '../lib/abi'
import { DegenContract } from '../model/DegenContract'

import { degenAddressPolygon } from '@/shared/config'

export const instanceDegenContract = new DegenContract(degenAddressPolygon, degenContractAbi)
