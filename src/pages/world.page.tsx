import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"
import { heroesAtom } from "../atoms/heroes.atom"

export const World = () => {
  const heroes = useAtomValue(heroesAtom)
  return (
    <BaseScreen>
      <Title title="World" />
      <RosterSection heroes={heroes} />
    </BaseScreen>
  )
}

