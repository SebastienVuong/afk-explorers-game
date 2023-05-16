import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { RecruitmentSection } from "./tavern.recruitment.component"
import { RosterSection } from "./tavern.roster.component"

export const Tavern = () => {
  const heroes = useAtomValue(heroesAtom)
  return (
    <BaseScreen>
      <h1 style={{ letterSpacing: 5, textTransform: "uppercase" }}>Tavern</h1>
      <RosterSection />
      <RecruitmentSection />
    </BaseScreen>
  )
}
