import { useAtom } from "jotai";
import { shipBetaAtom } from "../../atoms/ship.atom";
import { goldAtom } from "../../atoms/gold.atom";
import { Button } from "react-bootstrap";
import { SECONDARY_SHIP_COST } from "./world.ship-beta.component";

export const LockerShipBody = () => {
  const [gold, setGold] = useAtom(goldAtom);
  const [ship, setShip] = useAtom(shipBetaAtom);

  const unlockShip = () => {
    setGold(gold - SECONDARY_SHIP_COST);
    setShip({ ...ship, isActive: true });
  };
  return (
    <div className="card list-item-card justify-content-between bg-white">
      You can unlock this ship for {SECONDARY_SHIP_COST} gold.
      <Button className="btn btn-primary" disabled={gold < SECONDARY_SHIP_COST} onClick={unlockShip}>Unlock</Button>
    </div>
  );
};
