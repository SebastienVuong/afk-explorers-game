import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, NavBarLinksEnum } from './shared/nav-bar.component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultPage } from './DefaultPage'
import { Team } from './pages/team.page'
import { Tavern } from './pages/tavern.page'
import { World } from './pages/world.page'
import { Inn } from './pages/inn.page'

const navBarLinkElements: { [key in NavBarLinksEnum]: JSX.Element } = {
  [NavBarLinksEnum.TEAM]: <Team />,
  [NavBarLinksEnum.TAVERN]: <Tavern />,
  [NavBarLinksEnum.WORLD]: <World />,
  [NavBarLinksEnum.INN]: <Inn />,
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          {Object.values(NavBarLinksEnum).map((navBarLink, idx) => (
            <Route key={idx} path={navBarLink} element={navBarLinkElements[navBarLink]} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App