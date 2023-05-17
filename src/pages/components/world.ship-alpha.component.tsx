import { useAtomValue, useSetAtom } from "jotai";
import { heroesAtom } from "../../atoms/heroes.atom";
import { HeroCard } from "../../shared/hero-card.component";
import { shipAlphaAtom } from "../../atoms/ship.atom";
import { EmptyShipBody } from "./world.empty-ship.component";
import { Title } from "../../shared/title.component";
import { useEffect, useState } from "react";
import { goldAtom } from "../../atoms/gold.atom";

const HP_COST_PER_SECOND = 2;

export const ShipAlpha = () => {
  const ship = useAtomValue(shipAlphaAtom);
  const leadingHero = useAtomValue(heroesAtom).find(hero => hero.id === ship.leadingHeroId);
  const setGold = useSetAtom(goldAtom)
  const [timeCounter, setTimeCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTimeCounter(timeCounter + 1)
    }, 1000)
  }, [timeCounter])

  useEffect(() => {
    if (!leadingHero) return
    const isHeroActive = leadingHero.hp > 0
    if (!isHeroActive) return
    const heroHpAfterCost = leadingHero.hp - HP_COST_PER_SECOND
    if (heroHpAfterCost < 0) {
      leadingHero.hp = 0
    } else {
      leadingHero.hp = heroHpAfterCost
      setGold(gold => gold + leadingHero.earnings)
    }
  }, [timeCounter])

  return (
    <div>
      <Title title="Ship Alpha" />
      <div className="boat-container d-flex justify-content-center">
        {leadingHero ? <HeroCard hero={leadingHero} /> : <EmptyShipBody />}
      </div>
    </div>
  );
};


