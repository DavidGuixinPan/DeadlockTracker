function MatchRow({ match }) {
  return (
    console.log(match),
    <div className="match-row"> 
      <span>{match.match_result === 1 ? "Win  " : "Lose  "}</span>
      <span>Kills: {match.player_kills} / </span>  
      <span>Deaths: {match.player_deaths} / </span>
      <span>Assists: {match.player_assists} </span>
  </div>
  )
}

export default MatchRow