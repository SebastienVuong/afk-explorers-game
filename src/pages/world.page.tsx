import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { useState } from "react"
import { goldAtom } from "../atoms/gold.atom"
import { ShipAlpha } from "./components/world.ship-alpha.component"
import { ShipBeta } from "./components/world.ship-beta.component"
import { BoardShipModal } from "./components/world.board-ship.modal"
import { shipAlphaAtom, shipBetaAtom } from "../atoms/ship.atom"
import { useAFKHeroEarnings } from "../hooks/use-afk-hero-earnings.hook"

export const World = () => {
  const gold = useAtomValue(goldAtom)
  const heroes = useAtomValue(heroesAtom)
  const [selectedHeroId, setSelectedHeroId] = useState<number>()
  const selectedHero = heroes.find(hero => hero.id === selectedHeroId)

  const shipAlpha = useAtomValue(shipAlphaAtom)
  const shipAlphaLeadingHero = heroes.find(hero => hero.id === shipAlpha.leadingHeroId)
  useAFKHeroEarnings(shipAlphaLeadingHero)

  const shipBeta = useAtomValue(shipBetaAtom)
  const shipBetaLeadingHero = heroes.find(hero => hero.id === shipBeta.leadingHeroId)
  useAFKHeroEarnings(shipBetaLeadingHero)

  return (
    <BaseScreen>
      <Title title="World" />
      <h4>Your Gold: {gold}</h4>
      <RosterSection
        heroes={heroes}
        activeHeroId={selectedHeroId}
        onHeroClick={(heroId) => setSelectedHeroId(heroId)}
      />
      <h4>Ships:</h4>
      <ShipAlpha />
      <ShipBeta />
      <BoardShipModal
        selectedHero={selectedHero}
        onHide={() => setSelectedHeroId(undefined)}
      />
    </BaseScreen>
  )
}


