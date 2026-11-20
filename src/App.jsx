import { useState, useEffect } from "react"
import { getHeroList, getMatchHistory, getPlayerProfile } from "./api/deadlock"
import PlayerHeading from "./components/PlayerHeading"
import PlayerSearch from "./components/PlayerSearch"
import MatchRow from "./components/MatchRow"

function App() {
  const [accountId, setAccountId] = useState("")
  const [data, setData] = useState(null)
  const [heroes, setHeroes] = useState([])
  const [profile, setProfile] = useState(null)

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

  useEffect(() => {
    async function loadProfile() {
      if (!accountId) return
      setProfile(null)
      const profile = await getPlayerProfile(accountId)
      setProfile(profile)
    }

    loadProfile()
  }, [accountId])

  let matchContent;
  if (data == null) {
    matchContent = <p>Loading...</p>
  } else if (data.length === 0) {
    matchContent = <p>No Matches Found</p>
  } else {
    matchContent = data.map((match) => (
          <MatchRow key={match.match_id} match={match} heroes={heroes}/>
    ))
  }
  return (
    <div>
      <h1>Deadlock Tracker</h1>

      <PlayerSearch onSearch={setAccountId}/>
      <PlayerHeading 
        profile={profile}
      />
      
      {!accountId && <p>Search for a player...</p>}

      {accountId && matchContent}
    </div>
  )
}

export default App