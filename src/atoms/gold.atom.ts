import { atomWithStorage } from "jotai/utils"

const INITIAL_GOLD = 150

export const goldAtom = atomWithStorage("gold", INITIAL_GOLD)
