import { Dungeon } from "../types"

export function Sample(props: { dungeon: Dungeon }) {
  return (
    <div
      style={{
        width: "70vw",
        display: "flex",
        flexFlow: "column",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p>Sample</p>
        <button className="nes-btn is-primary">Generate</button>
      </div>
      <div className="nes-container"></div>
    </div>
  )
}
