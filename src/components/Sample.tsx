/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Design from "../core/design"
import { Dungeon, DungeonData } from "../types"

export function Sample(props: { dungeon: Dungeon }) {
  const data = DungeonData[props.dungeon]
  const [imageData, setImageData] = useState<ImageData | undefined>()
  const [img, setImg] = useState<HTMLImageElement | undefined>()

  useEffect(() => {
    const virtualCanvas = document.createElement("canvas")
    virtualCanvas.width = 3 * data.tileset.length * 25 + 1
    virtualCanvas.height = 601
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = `${process.env.PUBLIC_URL}/tilesets/${props.dungeon}.png`
    const virtualCtx = virtualCanvas.getContext("2d")
    img.addEventListener("load", () => {
      setImg(img)
      if (virtualCtx) {
        virtualCtx.drawImage(img, 0, 0)
        setImageData(
          virtualCtx.getImageData(
            0,
            0,
            virtualCanvas.width,
            virtualCanvas.height
          )
        )
      }
    })
  }, [])

  useEffect(() => {
    generate()
  }, [imageData])

  function generate() {
    if (imageData) {
      const design = new Design(props.dungeon, imageData, 5, 0.1, 54, 26)
      const canvas = document.getElementById(`sample`) as HTMLCanvasElement

      if (canvas && img) {
        const ctx = canvas.getContext("2d")
        design.tilemap.forEach((coord) => {
          ctx!.drawImage(
            img,
            coord.sx * 25 + 1,
            coord.sy * 25 + 1,
            24,
            24,
            coord.dx * 25,
            coord.dy * 25,
            25,
            25
          )
        })
      }
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p>Sample</p>
        <button className="nes-btn is-primary" onClick={generate}>
          Generate
        </button>
      </div>
      <div className="nes-container" style={{ padding: "0px" }}>
        <canvas width={1350} height={600} id="sample"></canvas>
      </div>
    </div>
  )
}
