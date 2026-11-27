import "../App.css";
import HeroBadge from "./HeroBadge";

function formatDuration(time) {
  // Converted from seconds
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const pad = (num) => num.toString().padStart(2, "0");

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
}

function formatDate(date) {
  const MINUTE = 1000 * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const matchDate = new Date(date * 1000);
  const currentDay = Date.now();
  const timeAgo = currentDay - matchDate;

  // Converted from milliseconds
  const days = Math.floor(timeAgo / DAY);
  const hours = Math.floor(timeAgo / HOUR);
  const minutes = Math.floor(timeAgo / MINUTE);

  const phrase = (num, unit) => `${num} ${unit}${num === 1 ? "" : "s"} ago`;

  if (hours < 1) {
    return phrase(minutes, "minute");
  } else if (days < 1) {
    return phrase(hours, "hour");
  } else {
    return phrase(days, "day");
  }
}

function MatchRow({ match, heroes }) {
  const result =
    match.match_result === match.player_team ? "victory" : "defeat";
  return (
    <div className="match-row">
      <div className="match-row-col match-row-time">
        <span>{formatDate(match.start_time)}</span>
      </div>
      <div className="match-row-col match-row-duration">
        <span className={result}>{result}</span>
        <span>{formatDuration(match.match_duration_s)}</span>
      </div>
      <div className="match-row-col">
        <HeroBadge
          className="hero-info"
          heroId={match.hero_id}
          heroes={heroes}
        />
      </div>
      <div className="match-row-col">
        <span className="kda">
          {match.player_kills} / {match.player_deaths} /{" "}
          {match.player_assists}{" "}
        </span>
      </div>
    </div>
  );
}

export default MatchRow;
