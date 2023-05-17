import { useAtomValue } from "jotai";
import { heroesAtom } from "../../atoms/heroes.atom";
import { HeroCard } from "../../shared/hero-card.component";
import { shipBetaAtom } from "../../atoms/ship.atom";
import { EmptyShipBody } from "./world.empty-ship.component";
import { LockerShipBody } from "./world.locked-ship.component";

export const SECONDARY_SHIP_COST = 500;
export const ShipBeta = () => {
  const ship = useAtomValue(shipBetaAtom);
  const leadingHero = useAtomValue(heroesAtom).find(hero => hero.id === ship.leadingHeroId);

  const isShipActive = ship.isActive;

  const renderBody = () => {
    if (!ship.isActive) {
      return <LockerShipBody />;
    }
    if (leadingHero) {
      return <HeroCard hero={leadingHero} />;
    }
    return <EmptyShipBody />;

  };

  return (
    <>
      <div className="boat-container d-flex justify-content-center" style={isShipActive ? {} : { opacity: 0.5 }}>
        {renderBody()}
      </div>
    </>
  );
};
