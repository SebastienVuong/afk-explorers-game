import { IHero } from "../atoms/heroes.atom"

interface IHeroCardProps {
  hero: IHero;
  onClick?: () => void
  isSelected?: boolean
}

export const HeroCard = ({ hero: { name, id }, onClick, isSelected }: IHeroCardProps) => (
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
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{`Hero ID: ${id}`}</p>
    </div>
  </div>
)

