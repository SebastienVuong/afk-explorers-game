import { useAtomValue, useSetAtom } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { useState } from "react"
import { goldAtom } from "../atoms/gold.atom"
import { ShipAlpha } from "./components/world.ship-alpha.component"
import { ShipBeta } from "./components/world.ship-beta.component"

export const World = () => {
  const gold = useAtomValue(goldAtom)
  const heroes = useAtomValue(heroesAtom)
  const [selectedHeroId, setSelectedHeroId] = useState<number>()
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
    </BaseScreen>
  )
}

