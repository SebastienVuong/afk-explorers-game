import { atomWithStorage } from "jotai/utils"

interface IShipProps {
  isActive?: boolean
  leadingHeroId?: number
}

export const shipAlphaAtom = atomWithStorage<IShipProps>("shipAlpha", {
  isActive: true,
  leadingHeroId: undefined,
})

export const shipBetaAtom = atomWithStorage<IShipProps>("shipBeta", {
  isActive: false,
  leadingHeroId: undefined,
})
