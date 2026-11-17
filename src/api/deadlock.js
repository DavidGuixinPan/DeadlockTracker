
export async function getMatchHistory(accountID) {
  const response = await fetch(`https://api.deadlock-api.com/v1/players/${accountID}/match-history`)
  const json = await response.json();
  return json;
}

export async function getHeroList() {
  const response = await fetch(`https://api.deadlock-api.com/v1/assets/heroes`)
  const json = await response.json()
  return json;
}
