import { Button } from "react-bootstrap";

interface IBoardButtonProps {
  onClick: () => void;
  isDisabled?: boolean;
}
export const BoardButton = ({ onClick, isDisabled }: IBoardButtonProps) => {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      disabled={isDisabled}
      style={{ borderTopRightRadius: "50%", borderBottomRightRadius: "50%", marginRight: "25px" }}
    >
      Board this ship
    </Button>
  );
};
