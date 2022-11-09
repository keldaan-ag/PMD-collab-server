import { Dungeon, DungeonData } from "../types"

export function TilesetMetadata(props: { dungeon: Dungeon }) {
  function downloadFile(fileName: string, data: any) {
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: "application/json" })
    const href = URL.createObjectURL(blob)

    // create "a" HTLM element with href to file
    const link = document.createElement("a")
    link.href = href
    link.download = fileName + ".json"
    document.body.appendChild(link)
    link.click()

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  }
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
        <p>Metadata</p>
        <button
          onClick={() => {
            downloadFile(props.dungeon, DungeonData[props.dungeon].tileset)
          }}
          className="nes-btn is-primary"
        >
          Download
        </button>
      </div>
      <textarea
        value={DungeonData[props.dungeon].tileset}
        readOnly={true}
      ></textarea>
    </div>
  )
}
