import { Dungeon } from "../types"
import { DungeonThumbnail } from "./DungeonThumbnail"

export function Caroussel() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "5px 20px 5px 20px",
        backgroundColor: "rgba(255,255,255,0.7)",
      }}
      className="nes-container"
    >
      {(Object.keys(Dungeon) as Dungeon[]).map((dungeon) => (
        <DungeonThumbnail key={dungeon} dungeon={dungeon} />
      ))}
    </div>
  )
}
