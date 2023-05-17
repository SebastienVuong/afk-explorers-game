import { atom } from "jotai"

interface IShipProps {
  isActive?: boolean
  leadingHeroId?: number
}

export const shipAlphaAtom = atom<IShipProps>({
  isActive: true,
  leadingHeroId: undefined,
})

export const shipBetaAtom = atom<IShipProps>({
  isActive: false,
  leadingHeroId: undefined,
})
