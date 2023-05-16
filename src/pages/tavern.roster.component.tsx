import { useAtomValue } from "jotai";
import { heroesAtom } from "../atoms/heroes.atom";
import { HeroCard } from "../shared/hero-card.component";

export const RosterSection = () => {
  const heroes = useAtomValue(heroesAtom);
  return (
    <>
      <h2>Your Team:</h2>
      <div className="d-flex flex-row" style={{ gap: 20, flexWrap: "wrap" }}>
        {heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </>
  );
};
