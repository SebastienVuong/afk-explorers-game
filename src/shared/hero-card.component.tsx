import { IHero } from "../atoms/heroes.atom"

interface IHeroCardProps {
  hero: IHero;
  onClick?: () => void
  isSelected?: boolean
  isDisabled?: boolean
}

const getHpColor = ({ hp, maxHp }: { hp: number, maxHp: number }) => {
  const percentage = hp / maxHp;
  if (percentage > 0.2) {
    return "green";
  }
  if (percentage > 0) {
    return "yellow";
  }
  return "red";
}

export const HeroCard = ({ hero: { name, id, hp, maxHp, earnings }, onClick, isSelected, isDisabled }: IHeroCardProps) => (
  <ListItemCard
    className={[onClick && "clickable-card", isSelected && "selected"].filter(Boolean).join(" ")}
    style={(isDisabled ? { opacity: 0.5 } : {})}
    onClick={onClick}
  >
    {isSelected && <div className="star"></div>}
    <div className="card-body d-flex flex-column justify-content-around">
      <strong className="card-title">
        {name}
        <span style={{ fontWeight: "normal", fontSize: "12px", paddingLeft: "4px" }}>{`(Hero ID: ${id})`}</span>
      </strong>
      <div className="d-flex flex-column ">
        <span style={{ color: getHpColor({ hp, maxHp }) }}>{`HP: ${hp} /${maxHp}`}</span >
        <span>{`Earnings: ${earnings} gold/s`}</span>
      </div >
    </div >
  </ListItemCard >
)

interface IListItemCardProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  style?: React.CSSProperties
}

const ListItemCard = ({ className, children, onClick, style }: IListItemCardProps) => (
  <div
    className={["card list-item-card", className].join(" ")}
    style={style}
    onClick={onClick}
  >
    {children}
  </div>
)