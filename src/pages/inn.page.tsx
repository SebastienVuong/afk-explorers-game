import { useAtom } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { goldAtom } from "../atoms/gold.atom"
import { Button } from "react-bootstrap"

const COST_TO_REST = 10

export const Inn = () => {
  const [heroes, setHeroes] = useAtom(heroesAtom)
  const [gold, setGold] = useAtom(goldAtom)

  return (
    <BaseScreen>
      <Title title="Inn" />
      <RosterSection heroes={heroes} />
      <h4>Total Gold: {gold}</h4>
      <Button
        className="btn btn-primary"
        disabled={gold < COST_TO_REST}
        onClick={() => {
          setHeroes(heroes.map(hero => ({ ...hero, hp: hero.maxHp })))
          setGold(gold - COST_TO_REST)
        }}>
        Stay the night for {COST_TO_REST} gold
      </Button>

    </BaseScreen>
  )
}