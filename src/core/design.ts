import { Dungeon, TerrainType, Mask } from "../types"
import Tileset from "./tileset"
import Terrain from "./terrain"
import Masker from "./masker"

export default class Design {
  id: Dungeon
  terrain: TerrainType[][] = []
  bitmask: Mask[][] = []
  tilemap: { sx: number; sy: number; dx: number; dy: number }[] = []
  width = 42
  height = 22
  frequency: number
  persistance: number
  tileset: Tileset

  constructor(
    id: Dungeon,
    imageData: ImageData,
    frequency: number,
    persistance: number,
    width?: number,
    height?: number
  ) {
    this.id = id
    this.frequency = frequency
    this.persistance = persistance
    this.width = width ? width : this.width
    this.height = height ? height : this.height
    this.tileset = new Tileset(this.id, imageData)
    this.generateTerrain()
    this.generateMask()
    this.generateTilemap()
  }

  generateTerrain() {
    const t = new Terrain(
      this.width,
      this.height,
      this.frequency,
      this.persistance
    )
    const generation = t.terrain

    for (let i = 0; i < this.height; i++) {
      const row: number[] = []
      for (let j = 0; j < this.width; j++) {
        const v = generation[i][j]
        if (v > 0.66) {
          row.push(TerrainType.WALL)
        } else if (v > 0.33) {
          row.push(TerrainType.GROUND)
        } else {
          row.push(TerrainType.WATER)
        }
      }
      this.terrain.push(row)
    }
  }

  generateMask() {
    const masker = new Masker()
    for (let i = 0; i < this.height; i++) {
      const row = new Array<Mask>()
      for (let j = 0; j < this.width; j++) {
        row.push(masker.mask8bits(this.terrain, i, j))
      }
      this.bitmask.push(row)
    }
  }

  generateTilemap() {
    this.tilemap = []
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const tileID = this.tileset.getTilemapId(
          this.terrain[i][j],
          this.bitmask[i][j]
        )
        this.tilemap.push({ sx: tileID.x, sy: tileID.y, dx: j, dy: i })
      }
    }
  }
}
