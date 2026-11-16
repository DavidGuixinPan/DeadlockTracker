
export async function getMatchHistory(accountID) {
  const response = await fetch(`https://api.deadlock-api.com/v1/players/${accountID}/match-history`)
  const json = await response.json();
  return json;
}
