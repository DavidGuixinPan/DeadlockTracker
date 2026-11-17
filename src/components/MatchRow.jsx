import "../App.css"
import HeroName from "./HeroName"

function MatchRow({ match, heroes }) {
  console.log(heroes)
  const result = match.match_result === match.player_team ? "victory" : "defeat"
  return (
    <div className="match-row"> 
      <span className={result}>
        {result}
      </span>
      <span>Kills: {match.player_kills}  / </span>  
      <span>Deaths: {match.player_deaths} / </span>
      <span>Assists: {match.player_assists} </span>
      <HeroName heroId={match.hero_id} heroes={heroes} />
  </div>
  )
}

export default MatchRow