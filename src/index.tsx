import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "nes.css/css/nes.min.css"
import Home from "./Home"
import reportWebVitals from "./reportWebVitals"
import { HashRouter, Routes, Route } from "react-router-dom"
import { Dungeon } from "./types"
import { DungeonPage } from "./components/DungeonPage"
import { Guide } from "./Guide"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        {(Object.keys(Dungeon) as Dungeon[]).map((d, i) => (
          <Route key={d} path={`/${d}`} element={<DungeonPage dungeon={d} />} />
        ))}
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
