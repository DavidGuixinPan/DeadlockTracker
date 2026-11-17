import { useState, useEffect } from "react"
import { getHeroList, getMatchHistory } from "./api/deadlock"
import PlayerHeading from "./components/PlayerHeading"
import PlayerSearch from "./components/PlayerSearch"
import MatchRow from "./components/MatchRow"

function App() {
  const accountID = 367616718
  const [data, setData] = useState(null)
  const [heroes, setHeroes] = useState([])

  const matchHistory = useEffect(() => {
    async function loadMatches() {
      const json = await getMatchHistory(accountID)
      setData(json)
    }

    loadMatches()
  }, [])

  useEffect(() => {
    async function loadHeroes() {
      const json = await getHeroList()
      setHeroes(json)
    }

    loadHeroes()
  }, [])

  console.log(heroes)


  return (
    <div>
      <h1>Deadlock Tracker</h1>

      <PlayerHeading 
        name="Kewlkuku"
        accountID={accountID}
      />
      
      <PlayerSearch />
      {data === null 
        ? <p>Loading...</p> 
        : data.map((match) => (
          <MatchRow key={match.match_id} match={match} heroes={heroes}/>
      ))}

      
    </div>
  )
}



export default App