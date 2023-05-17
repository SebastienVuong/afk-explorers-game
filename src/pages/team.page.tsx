import { useAtomValue } from "jotai"
import { BaseScreen } from "../shared/base-screen.component"
import { goldAtom } from "../atoms/gold.atom"
import { RosterSection } from "../shared/roster.component"
import { Title } from "../shared/title.component"
import { heroesAtom } from "../atoms/heroes.atom"
import { useState } from "react"
import { Image } from "react-bootstrap"

export const Team = () => {
  const gold = useAtomValue(goldAtom)
  const heroes = useAtomValue(heroesAtom)
  const [selectedHeroId, setSelectedHeroId] = useState<number>()

  const selectedHero = heroes.find(hero => hero.id === selectedHeroId)
  return (
    <BaseScreen>
      <Title title="Your team" />
      <div className="d-flex">
        <RosterSection
          heroes={heroes}
          activeHeroId={selectedHeroId}
          onHeroClick={(heroId) => setSelectedHeroId(heroId)}
        />
        {
          <div style={{ width: selectedHero ? "400px" : "0", margin: "50px", transition: "width 0.3s ease" }}>
            {selectedHero && <div className="card" style={{ height: "100%", width: "100%", backgroundColor: "burlywood" }}>
              <div className="card-body d-flex justify-content-center align-items-center" style={{ backgroundColor: "peachpuff" }}>
                <Image
                  style={{ width: "300px", height: "300px" }}
                  src={"https://cdn4.iconfinder.com/data/icons/game-of-thrones-4/64/game_of_thrones_game_thrones_series_character_avatar_jon_snow-512.png"}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">{selectedHero.name}</h4>
                <p className="card-text">HP: {selectedHero.hp}/{selectedHero.maxHp}</p>
                <p className="card-text">Earnings: {selectedHero.earnings} gold/s</p>
              </div>
            </div>}
          </div>}
      </div>
      <h4>Total Gold: {gold}</h4>
    </BaseScreen>
  )
}