import { Dungeon } from "../types"
import { DungeonThumbnail } from "./DungeonThumbnail"

export function Caroussel() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
      className="nes-container my-container"
    >
      {(Object.keys(Dungeon) as Dungeon[]).map((dungeon) => (
        <DungeonThumbnail key={dungeon} dungeon={dungeon} />
      ))}
    </div>
  )
}
