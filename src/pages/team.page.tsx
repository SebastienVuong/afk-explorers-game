import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { goldAtom } from "../atoms/gold.atom"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"
import { heroesAtom } from "../atoms/heroes.atom"

export const Team = () => {
  const gold = useAtomValue(goldAtom)
  const heroes = useAtomValue(heroesAtom)
  return (
    <BaseScreen>
      <Title title="Your team" />
      <RosterSection heroes={heroes} />
      <h4>Total Gold: {gold}</h4>
    </BaseScreen>
  )
}