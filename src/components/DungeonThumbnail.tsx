import { Link } from "react-router-dom"
import { Dungeon, DungeonData } from "../types"

export function DungeonThumbnail(props: { dungeon: Dungeon }) {
  return (
    <Link to={props.dungeon} className="my-link">
      <div
        className="nes-container nes-pointer grow"
        style={{
          margin: "10px",
          padding: "10px",
          maxWidth: "160px",
          backgroundColor: "white",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid black",
          gap: "5px",
        }}
      >
        <img
          key={props.dungeon}
          src={
            process.env.PUBLIC_URL +
            "/preview/" +
            props.dungeon +
            "-preview.png"
          }
          alt={props.dungeon}
        />
        <p style={{ fontSize: "0.55em" }}>{DungeonData[props.dungeon].name}</p>
      </div>
    </Link>
  )
}
