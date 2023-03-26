import { degenContractAbi } from '@/entities/contract/lib/abi'
import { DegenContract } from '@/entities/contract/model/DegenContract'
import { degenAddressPolygon } from '@/shared/config/env'

export const instanceDegenContract = new DegenContract(degenAddressPolygon, degenContractAbi)
