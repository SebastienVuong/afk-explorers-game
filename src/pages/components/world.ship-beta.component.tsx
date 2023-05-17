import { useAtomValue } from "jotai";
import { heroesAtom } from "../../atoms/heroes.atom";
import { HeroCard } from "../../shared/hero-card.component";
import { shipBetaAtom } from "../../atoms/ship.atom";
import { EmptyShipBody } from "./world.empty-ship.component";
import { LockerShipBody } from "./world.locked-ship.component";
import { goldAtom } from "../../atoms/gold.atom";
import { Title } from "../../shared/title.component";
import { useAFKHeroEarnings } from "../../hooks/use-afk-hero-earnings.hook";

export const SECONDARY_SHIP_COST = 500;

export const ShipBeta = () => {
  const ship = useAtomValue(shipBetaAtom);
  const gold = useAtomValue(goldAtom)
  const leadingHero = useAtomValue(heroesAtom).find(hero => hero.id === ship.leadingHeroId);

  useAFKHeroEarnings(leadingHero)

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

  const isGoldSufficient = gold >= SECONDARY_SHIP_COST;
  return (
    <div>
      <Title title="Ship Beta" />
      <div className="boat-container d-flex justify-content-center" style={!isShipActive && !isGoldSufficient ? { opacity: 0.5 } : {}}>
        {renderBody()}
      </div>
    </div>
  );
};
