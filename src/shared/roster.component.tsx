import { useAtomValue } from "jotai";
import { heroesAtom } from "../atoms/heroes.atom";
import { HeroCard } from "./hero-card.component";
import { useState } from "react";

export const RosterSection = () => {
  const heroes = useAtomValue(heroesAtom);
  const [selectedHeroId, setSelectHeroId] = useState<number>()
  return (
    <>
      <h2>Your Team:</h2>
      <div className="d-flex flex-row" style={{ gap: 20, flexWrap: "wrap" }}>
        {heroes.map((hero) =>
          <HeroCard
            key={hero.id}
            hero={hero}
            onClick={() => setSelectHeroId(hero.id)}
            isSelected={hero.id === selectedHeroId}
            isDisabled={hero.hp == 0}
          />)}
      </div>
    </>
  );
};

