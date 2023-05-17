import { BaseScreen } from "../shared/base-screen.component"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"

export const World = () => {
  return (
    <BaseScreen>
      <Title title="World" />
      <RosterSection />
    </BaseScreen>
  )
}

