import "../App.css"
import HeroBadge from "./HeroBadge"

function formatDuration(time) {
  // Converted from seconds
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

function formatDate(date) {
  const MINUTE = 1000 * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  const matchDate = new Date(date * 1000)
  const currentDay = Date.now()
  const timeAgo = currentDay - matchDate
  
  // Converted from milliseconds
  const days = Math.floor(timeAgo / DAY)
  const hours = Math.floor(timeAgo / HOUR)
  const minutes = Math.floor(timeAgo / MINUTE)
  
  if (hours < 1) {
    return `${minutes} minutes ago`
  }
  else if (days < 1) {
    return `${hours} hours ago`
  }
  else {
    return `${days} days ago`
  }
}

function MatchRow({ match, heroes }) {
  const result = match.match_result === match.player_team ? "victory" : "defeat"
  return (
    <div className="match-row"> 
      <span className={result}>
        {result}
      </span>
      <span>{formatDate(match.start_time)}</span>
      <HeroBadge heroId={match.hero_id} heroes={heroes} />
      <span>{formatDuration(match.match_duration_s)}</span>
      <span>Kills: {match.player_kills}  / </span>  
      <span>Deaths: {match.player_deaths} / </span>
      <span>Assists: {match.player_assists} </span>
  </div>
  )
}

export default MatchRow