import { useAtomValue } from "jotai"
import { IHero, heroesAtom } from "../atoms/heroes.atom"
import { generateNumber } from "./generate-number"

const HERO_HP_BOUNDARIES = {
  min: 40,
  max: 100,
}

const HERO_EARNINGS_BOUNDARIES = {
  min: 3,
  max: 25,
}

interface IGenerateHeroProps {
  name: string
  maxHp?: number
  earnings?: number
}

export const generateHero = ({ name, maxHp: presetMaxHp, earnings }: IGenerateHeroProps): IHero => {
  const heroes = useAtomValue(heroesAtom)
  const highestHeroId = heroes.reduce(
    (highestId, hero) => (hero.id > highestId ? hero.id : highestId),
    0,
  )
  const uniqueHeroId = highestHeroId + 1

  const maxHp =
    presetMaxHp ||
    generateNumber({
      min: HERO_HP_BOUNDARIES.min,
      max: HERO_EARNINGS_BOUNDARIES.max,
    })
  return {
    id: uniqueHeroId,
    name,
    hp: maxHp,
    maxHp,
    earnings:
      earnings ||
      generateNumber({
        min: HERO_EARNINGS_BOUNDARIES.min,
        max: HERO_EARNINGS_BOUNDARIES.max,
      }),
  }
}
