import { useAtom } from "jotai";
import { IHero, heroesAtom } from "../../atoms/heroes.atom";
import { Button } from "react-bootstrap";
import { goldAtom } from "../../atoms/gold.atom";
import { useState } from "react";
import { generateHero } from "../../utils/generate-hero";

const RECRUITMENT_COST = 100;
export const RecruitmentSection = () => {
  const [gold, setGold] = useAtom(goldAtom);
  const [heroes, setHeroes] = useAtom(heroesAtom);
  const [newHeroName, setNewHeroName] = useState("");

  const handleRecruitButtonClick = () => {
    const highestHeroId = heroes.reduce(
      (highestId, hero) => Math.max(hero.id, highestId),
      0,
    )
    const uniqueHeroId = highestHeroId + 1

    const newHero: IHero = generateHero({ id: uniqueHeroId, name: newHeroName });
    setGold(gold - RECRUITMENT_COST);
    setHeroes([...heroes, newHero]);
  };


  return (
    <>
      <h2>Recruitment:</h2>
      <h4>Gold: {gold}</h4>
      <div className="d-flex flex-row" style={{ gap: 20 }}>
        <input type="text" placeholder="New Hero Name" style={{ padding: 6 }} onChange={(changeEvent) => setNewHeroName(changeEvent.target.value)} />
        <Button className="btn btn-primary" onClick={handleRecruitButtonClick} disabled={!newHeroName || gold < RECRUITMENT_COST}>
          Recruit {newHeroName} for {RECRUITMENT_COST} gold
        </Button>
      </div>
    </>
  );
};
