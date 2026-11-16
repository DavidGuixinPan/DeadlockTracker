function MatchRow({ match }) {
  return (
    <div className="match-row"> 
      <span>Kills: {match.player_kills} / </span>  
      <span>Deaths: {match.player_deaths} / </span>
      <span>Assists: {match.player_assists} </span>
  </div>
  )
}

export default MatchRow