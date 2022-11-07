import { Dungeon } from "../types"
import { Header } from "./Header"

export function DungeonPage(props: { dungeon: Dungeon }) {
  return (
    <div>
      <Header />
      <h2>{props.dungeon}</h2>
    </div>
  )
}
