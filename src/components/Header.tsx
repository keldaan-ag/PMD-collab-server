import DiscordButton from "./DiscordButton"
import HomeButton from "./HomeButton"

export function Header() {
  return (
    <div style={{ display: "flex", padding: "5px 20px 0px 20px", gap: "10px" }}>
      <HomeButton />
      <DiscordButton />
    </div>
  )
}
