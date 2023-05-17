import { IHero, } from "../atoms/heroes.atom";
import { HeroCard } from "./hero-card.component";

interface IRosterSectionProps {
  heroes: IHero[];
  activeHeroId?: number;
  onHeroClick?: (heroId: number) => void;
}

export const RosterSection = ({ heroes, activeHeroId, onHeroClick }: IRosterSectionProps) => {
  return (
    <>
      <h2>Your Team:</h2>
      <div className="d-flex flex-row" style={{ gap: 20, flexWrap: "wrap" }}>
        {heroes.map((hero) =>
          <HeroCard
            key={hero.id}
            hero={hero}
            isSelected={hero.id === activeHeroId}
            isDisabled={hero.hp == 0}
            {...onHeroClick ? { onClick: () => onHeroClick(hero.id) } : {}}
          />)}
      </div>
    </>
  );
};

