import { useSetAtom } from "jotai"
import { IHero } from "../atoms/heroes.atom"
import { useEffect, useState } from "react"
import { goldAtom } from "../atoms/gold.atom"
import { HP_COST_PER_SECOND } from "../pages/components/world.ship-alpha.component"

export const useAFKHeroEarnings = (leadingHero?: IHero) => {
  const setGold = useSetAtom(goldAtom)
  const [timeCounter, setTimeCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTimeCounter(timeCounter + 1)
    }, 1000)
  }, [timeCounter])

  useEffect(() => {
    if (!leadingHero) return
    const isHeroActive = leadingHero.hp > 0
    if (!isHeroActive) return
    const heroHpAfterCost = leadingHero.hp - HP_COST_PER_SECOND
    if (heroHpAfterCost < 0) {
      leadingHero.hp = 0
    } else {
      leadingHero.hp = heroHpAfterCost
      setGold((gold) => gold + leadingHero.earnings)
    }
  }, [timeCounter])
}
