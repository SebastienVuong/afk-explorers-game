import { IHero } from "../atoms/heroes.atom"
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
  id: number
  name: string
  maxHp?: number
  earnings?: number
}

export const generateHero = ({
  id,
  name,
  maxHp: presetMaxHp,
  earnings,
}: IGenerateHeroProps): IHero => {
  const maxHp =
    presetMaxHp ||
    generateNumber({
      min: HERO_HP_BOUNDARIES.min,
      max: HERO_HP_BOUNDARIES.max,
    })
  return {
    id,
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
