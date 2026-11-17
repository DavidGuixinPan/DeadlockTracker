import { useState, useEffect } from "react"
import { getHeroList, getMatchHistory } from "./api/deadlock"
import PlayerHeading from "./components/PlayerHeading"
import PlayerSearch from "./components/PlayerSearch"
import MatchRow from "./components/MatchRow"

function App() {
  const [accountId, setAccountId] = useState("")
  const [data, setData] = useState(null)
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    async function loadMatches() {
      if (!accountId) return
      setData(null)
      const json = await getMatchHistory(accountId)
      setData(json)
    }

    loadMatches()
  }, [accountId])

  useEffect(() => {
    async function loadHeroes() {
      const json = await getHeroList()
      setHeroes(json)
    }

    loadHeroes()
  }, [])


  return (
    <div>
      <h1>Deadlock Tracker</h1>

      <PlayerSearch onSearch={setAccountId}/>
      <PlayerHeading 
        name="Kewlkuku"
        accountId={accountId}
      />
      
      {!accountId && <p>Search for a player...</p>}

      {accountId && (data === null 
        ? <p>Loading...</p> 
        : data.map((match) => (
          <MatchRow key={match.match_id} match={match} heroes={heroes}/>
      )))}

      
    </div>
  )
}

export default App