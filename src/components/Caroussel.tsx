import { useState } from "react"
import { Dungeon, DungeonData } from "../types"
import { DungeonThumbnail } from "./DungeonThumbnail"

export function Caroussel() {
  const [nameFilter, setNameFilter] = useState<string>("")
  return (
    <div
      className="nes-container my-container"
      style={{ display: "flex", flexFlow: "column", alignItems: "center" }}
    >
      <div className="nes-field is-inline" style={{ width: "30vw" }}>
        <label htmlFor="name_field">Search for a tileset</label>
        <input
          type="text"
          id="name_field"
          className="nes-input"
          placeholder="Tiny woods ..."
          value={nameFilter}
          onChange={(e) => {
            setNameFilter(e.target.value)
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {(Object.keys(Dungeon) as Dungeon[]).map((dungeon) => {
          if (nameFilter === "") {
            return <DungeonThumbnail key={dungeon} dungeon={dungeon} />
          } else {
            if (
              DungeonData[dungeon].name
                .toLowerCase()
                .includes(nameFilter.toLowerCase())
            ) {
              return <DungeonThumbnail key={dungeon} dungeon={dungeon} />
            } else {
              return null
            }
          }
        })}
      </div>
    </div>
  )
}
