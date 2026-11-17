import "../App.css"
import HeroBadge from "./HeroBadge"

function formatDuration(time) {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor(time % 3600 / 60)
  const seconds = Math.floor(time % 60)

  const pad = (num) => num.toString().padStart(2, '0')
  
  return (
    hours > 0 
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`
  )
}

function MatchRow({ match, heroes }) {
  const result = match.match_result === match.player_team ? "victory" : "defeat"
  return (
    <div className="match-row"> 
      <span className={result}>
        {result}
      </span>
      <HeroBadge heroId={match.hero_id} heroes={heroes} />
      <span>{formatDuration(match.match_duration_s)}</span>
      <span>Kills: {match.player_kills}  / </span>  
      <span>Deaths: {match.player_deaths} / </span>
      <span>Assists: {match.player_assists} </span>
  </div>
  )
}

export default MatchRow