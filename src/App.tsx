import './App.css'
import { NavBar } from './components/nav-bar.component'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultPage } from './DefaultPage'
import { Team } from './pages/team.page'
import { Tavern } from './pages/tavern.page'
import { World } from './pages/world.page'
import { Inn } from './pages/inn.page'

function App() {
  return (
    <div className="App" style={{ height: "100%", width: "100%", backgroundColor: "lightyellow" }}>
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