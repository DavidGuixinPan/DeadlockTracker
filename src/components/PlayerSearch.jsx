import { useState } from "react"
import { toAccountId } from "./PlayerHeading"

function PlayerSearch({ onSearch }) {
  const [text, setText] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSearch(toAccountId(text))
    }}>

      <input
        placeholder="Enter friend code or SteamID64"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default PlayerSearch