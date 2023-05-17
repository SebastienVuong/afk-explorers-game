import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { RecruitmentSection } from "./tavern.recruitment.component"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"

export const Tavern = () => {
  const heroes = useAtomValue(heroesAtom)
  return (
    <BaseScreen>
      <Title title="Tavern" />
      <RosterSection heroes={heroes} />
      <RecruitmentSection />
    </BaseScreen>
  )
}


