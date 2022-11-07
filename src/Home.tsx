import React from "react"
import "./App.css"
import { Caroussel } from "./components/Caroussel"
import { Header } from "./components/Header"

function Home() {
  return (
    <div className="App">
      <Header />
      <Caroussel />
    </div>
  )
}

export default Home
