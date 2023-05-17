import { useAtom } from "jotai";
import { IHero } from "../../atoms/heroes.atom";
import { ShipAlpha } from "./world.ship-alpha.component";
import { ShipBeta } from "./world.ship-beta.component";
import { Button, Modal } from "react-bootstrap";
import { shipAlphaAtom, shipBetaAtom } from "../../atoms/ship.atom";
import { BoardButton } from "../../shared/board-ship-button.component";

interface IBoardShipModalProps {
  selectedHero?: IHero;
  onHide: () => void;
}
export const BoardShipModal = ({ selectedHero, onHide }: IBoardShipModalProps) => {
  const [shipAlpha, setShipAlpha] = useAtom(shipAlphaAtom);
  const [shipBeta, setShipBeta] = useAtom(shipBetaAtom);


  return (
    <Modal
      show={Boolean(selectedHero)}
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Which ship should {selectedHero?.name} board?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-row">
          <BoardButton
            isDisabled={!selectedHero}
            onClick={() => {
              setShipAlpha({ ...shipAlpha, leadingHeroId: selectedHero?.id });
              onHide();
            }} />
          <ShipAlpha />
        </div>
        <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
          <BoardButton
            isDisabled={!selectedHero || !shipBeta.isActive}
            onClick={() => {
              setShipBeta({ ...shipBeta, leadingHeroId: selectedHero?.id });
              onHide();
            }} />
          <ShipBeta />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
