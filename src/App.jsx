import { useState, useEffect } from "react"
import { getHeroList, getMatchHistory, getPlayerProfile } from "./api/deadlock"
import PlayerHeading from "./components/PlayerHeading"
import PlayerSearch from "./components/PlayerSearch"
import MatchRow from "./components/MatchRow"
import { useApi } from "./hooks/useApi"

function App() {
  const [accountId, setAccountId] = useState("")
  const {data: profile, error: profileError } = useApi(getPlayerProfile, accountId, accountId)
  const {data: heroes, error: heroError } = useApi(getHeroList, null, true)
  const {data: matches, error: matchError} = useApi(getMatchHistory, accountId, accountId)

  let matchContent;
  if (matchError) {
    matchContent = <p>Couldn't load matches. {matchError}</p>
  } else if (matches === null) {
    matchContent = <p>Loading...</p>
  } else if (matches.length === 0) {
    matchContent = <p>No Matches Found</p>
  } else {
    matchContent = matches.map((match) => (
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