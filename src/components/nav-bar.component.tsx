import { Nav, Navbar } from "react-bootstrap"

const navBarLinks = [
  { label: "Your Team", value: "/team" },
  { label: "Tavern", value: "/tavern" },
  { label: "World", value: "/world" },
  { label: "Inn", value: "/inn" }]

export const NavBar = () => (
  <Navbar bg="light" expand="lg" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
    {navBarLinks.map(({ label, value }, idx) => (
      <Nav.Link key={idx} href={value}>{label}</Nav.Link>
    ))}
  </Navbar>
)