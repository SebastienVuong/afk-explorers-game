import { useAtomValue } from "jotai";
import { heroesAtom } from "../../atoms/heroes.atom";
import { HeroCard } from "../../shared/hero-card.component";
import { shipAlphaAtom } from "../../atoms/ship.atom";
import { EmptyShipBody } from "./world.empty-ship.component";

export const ShipAlpha = () => {
  const ship = useAtomValue(shipAlphaAtom);
  const leadingHero = useAtomValue(heroesAtom).find(hero => hero.id === ship.leadingHeroId);

  return (
    <div className="boat-container d-flex justify-content-center">
      {leadingHero ? <HeroCard hero={leadingHero} /> : <EmptyShipBody />}
    </div>
  );
};
