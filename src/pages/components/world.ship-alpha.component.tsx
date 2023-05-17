import { useAtomValue } from "jotai";
import { heroesAtom } from "../../atoms/heroes.atom";
import { HeroCard } from "../../shared/hero-card.component";
import { shipAlphaAtom } from "../../atoms/ship.atom";
import { EmptyShipBody } from "./world.empty-ship.component";
import { Title } from "../../shared/title.component";
import { useAFKHeroEarnings } from "../../hooks/use-afk-hero-earnings.hook";

export const HP_COST_PER_SECOND = 2;

export const ShipAlpha = () => {
  const ship = useAtomValue(shipAlphaAtom);
  const leadingHero = useAtomValue(heroesAtom).find(hero => hero.id === ship.leadingHeroId);

  useAFKHeroEarnings(leadingHero)

  return (
    <div>
      <Title title="Ship Alpha" />
      <div className="boat-container d-flex justify-content-center">
        {leadingHero ? <HeroCard hero={leadingHero} /> : <EmptyShipBody />}
      </div>
    </div>
  );
};


