const navBarLinks = [
  { label: "Your Team", value: "/team" },
  { label: "Tavern", value: "/tavern" },
  { label: "World", value: "/world" },
  { label: "Inn", value: "/inn" }]

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        {navBarLinks.map(({ label, value }, idx) => {
          return (
            <div key={idx}>
              <a className="nav-link"
                aria-current="page" href={value}>
                {label}
              </a>
            </div>
          )
        })}
      </div>
    </nav>
    ||
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Team</h5>
              <p className="card-text">Your team is your family.</p>
              <a href="/team" className="btn btn-primary">Go to your team</a>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tavern</h5>
              <p className="card-text">The tavern is where you can recruit new members.</p>
              <a href="/tavern" className="btn btn-primary">Go to the tavern</a>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">World</h5>
              <p className="card-text">The world is where you can explore.</p>
              <a href="/world" className="btn btn-primary">Go to the world</a>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inn</h5>
              <p className="card-text">The inn is where you can rest.</p>
              <a href="/inn" className="btn btn-primary">Go to the inn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}