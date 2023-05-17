import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export enum NavBarLinksEnum {
  TEAM = "/team",
  TAVERN = "/tavern",
  WORLD = "/world",
  INN = "/inn",
}

const navBarLinkLabels: { [key in NavBarLinksEnum]: string } = {
  [NavBarLinksEnum.TEAM]: "👥 Your Team",
  [NavBarLinksEnum.TAVERN]: "🍻 Tavern",
  [NavBarLinksEnum.WORLD]: "🗺️ World",
  [NavBarLinksEnum.INN]: "🛏️ Inn",
}

export const NavBar = () => (
  <Navbar bg="light" expand="lg" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
    {Object.values(NavBarLinksEnum).map((navBarLink, idx) => (
      <Link key={idx} to={navBarLink}>{navBarLinkLabels[navBarLink]}</Link>
    ))}
  </Navbar>
)