import { Dungeon } from "../types"

export function Tileset(props: { dungeon: Dungeon }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        gap: "10px",
        width: "15vw",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p>Tileset</p>
        <a
          target="_blank"
          className="nes-btn is-primary"
          href={`${process.env.PUBLIC_URL}/tilesets/${props.dungeon}.png`}
          rel="noreferrer"
        >
          Download
        </a>
      </div>

      <img
        style={{
          imageRendering: "pixelated",
        }}
        alt={props.dungeon}
        src={`${process.env.PUBLIC_URL}/tilesets/${props.dungeon}.png`}
      />
    </div>
  )
}
