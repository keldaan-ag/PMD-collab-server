import { Dungeon, DungeonData } from "../types"
import { Header } from "./Header"
import { Sample } from "./Sample"
import { Tileset } from "./Tileset"
import { TilesetMetadata } from "./TilesetMetadata"

export function DungeonPage(props: { dungeon: Dungeon }) {
  return (
    <div>
      <Header />
      <div className="nes-container my-container">
        <h2>{DungeonData[props.dungeon].name}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Sample dungeon={props.dungeon} />
          <div style={{ display: "flex", gap: "10px", flexFlow: "column" }}>
            <Tileset dungeon={props.dungeon} />
            <TilesetMetadata dungeon={props.dungeon} />
          </div>
        </div>
      </div>
    </div>
  )
}
