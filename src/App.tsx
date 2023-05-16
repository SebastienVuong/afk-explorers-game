import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './shared/nav-bar.component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultPage } from './DefaultPage'
import { Team } from './pages/team.page'
import { Tavern } from './pages/tavern.page'
import { World } from './pages/world.page'
import { Inn } from './pages/inn.page'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/tavern" element={<Tavern />} />
          <Route path="/world" element={<World />} />
          <Route path="/inn" element={<Inn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App