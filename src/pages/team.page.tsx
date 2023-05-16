import { useAtom } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { goldAtom } from "../atoms/gold.atom"

export const Team = () => {
  const [heroes, _setHeroes] = useAtom(heroesAtom)
  const [gold, _setGold] = useAtom(goldAtom)
  return (
    <BaseScreen>
      YOUR TEAM
      {heroes.map(({ name, id }) => (
        <div key={id}>
          {name}
        </div>
      ))}
      Total Gold: {gold}
    </BaseScreen>
  )
}