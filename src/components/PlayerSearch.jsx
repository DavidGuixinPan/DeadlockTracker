import { useState } from "react"

function PlayerSearch({ onSearch }) {
  const [text, setText] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSearch(text)
    }}>

      <input
        placeholder="Enter steam friend code"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default PlayerSearch