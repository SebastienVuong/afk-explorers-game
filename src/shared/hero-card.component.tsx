import { IHero } from "../atoms/heroes.atom"

interface IHeroCardProps {
  hero: IHero;
  onClick?: () => void
  isSelected?: boolean
}

export const HeroCard = ({ hero: { name, id, hp, maxHp, earnings }, onClick, isSelected }: IHeroCardProps) => (
  <div
    className="card"
    style={{
      width: "300px",
      backgroundColor: "sandybrown",
      borderRadius: "10px",
      border: "2px solid skyblue",
      transition: "box-shadow 0.3s",
      ...(isSelected && { boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3)" })
    }}
    onClick={onClick}
  >
    <div className="card-body d-flex flex-column" style={{ gap: 10 }}>
      <strong className="card-title">
        {name}
        <span style={{ fontWeight: "normal", fontSize: "12px", paddingLeft: "4px" }}>{`(Hero ID: ${id})`}</span>
      </strong>
      <div className="d-flex flex-column ">
        <span>{`HP: ${hp}/${maxHp}`}</span>
        <span>{`Earnings: ${earnings} gold/s`}</span>
      </div>
    </div>
  </div>
)

