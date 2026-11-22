
export async function getMatchHistory(accountId) {
  const response = await fetch(`https://api.deadlock-api.com/v1/players/${accountId}/match-history`)
  if (!response.ok) throw new Error(`Request failed: ${response.status}`)
  const json = await response.json();
  return json;
}

export async function getHeroList() {
  const response = await fetch(`https://api.deadlock-api.com/v1/assets/heroes`)
  if (!response.ok) throw new Error(`Request failed: ${response.status}`)
  const json = await response.json()
  return json;
}

export async function getPlayerProfile(accountId) {
  const response = await fetch(`https://api.deadlock-api.com/v1/players/steam?account_ids=${accountId}`)
  if (!response.ok) throw new Error(`Request failed: ${response.status}`)
  const json = await response.json()
  return json[0]
}