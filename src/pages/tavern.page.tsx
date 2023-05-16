import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { BaseScreen } from "../components/base-screen.component"
import { IHero, heroesAtom } from "../atoms/heroes.atom"
import { HeroCard } from "../components/hero-card.component"
import { Button } from "react-bootstrap"
import { goldAtom } from "../atoms/gold.atom"
import { useState } from "react"

const RECRUITMENT_COST = 100

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

const RosterSection = () => {
  const heroes = useAtomValue(heroesAtom)
  return (
    <>
      <h2>Your Team:</h2>
      <div className="d-flex flex-row" style={{ gap: 20, flexWrap: "wrap" }}>
        {heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </>
  )
}

const RecruitmentSection = () => {
  const [gold, setGold] = useAtom(goldAtom)
  const setHeroes = useSetAtom(heroesAtom)
  const [newHeroName, setNewHeroName] = useState("")

  const handleRecruitButtonClick = () => {
    setGold((gold) => gold - RECRUITMENT_COST)
    setHeroes((heroes) => {
      const highestHeroId = heroes.reduce((highestId, hero) => hero.id > highestId ? hero.id : highestId, 0)
      const uniqueHeroId = highestHeroId + 1
      const newHero: IHero = { id: uniqueHeroId, name: newHeroName }
      return [...heroes, newHero]
    })
  }

  return (
    <>
      <h2>Recruitment:</h2>
      <h4 className="">Gold: {gold}</h4>
      <div className="d-flex flex-row" style={{ gap: 20 }}>
        <input type="text" placeholder="New Hero Name" style={{ padding: 6 }} onChange={(changeEvent) => setNewHeroName(changeEvent.target.value)} />
        <Button className="btn btn-primary" onClick={handleRecruitButtonClick} disabled={gold < RECRUITMENT_COST}>
          Recruit {newHeroName} for {RECRUITMENT_COST} gold
        </Button>
      </div>
    </>
  )
}