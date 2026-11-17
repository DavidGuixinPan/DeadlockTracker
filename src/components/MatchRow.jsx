import "../App.css"
import HeroName from "./HeroBadge"

function MatchRow({ match, heroes }) {
  const result = match.match_result === match.player_team ? "victory" : "defeat"
  return (
    <div className="match-row"> 
      <span className={result}>
        {result}
      </span>
      <HeroName heroId={match.hero_id} heroes={heroes} />
      <span>Kills: {match.player_kills}  / </span>  
      <span>Deaths: {match.player_deaths} / </span>
      <span>Assists: {match.player_assists} </span>
  </div>
  )
}

export default MatchRow