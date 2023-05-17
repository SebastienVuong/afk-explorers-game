import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { goldAtom } from "../atoms/gold.atom"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"

export const Team = () => {
  const gold = useAtomValue(goldAtom)
  return (
    <BaseScreen>
      <Title title="Your team" />
      <RosterSection />
      <h4>Total Gold: {gold}</h4>
    </BaseScreen>
  )
}