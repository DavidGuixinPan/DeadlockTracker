function toAccountId(input) {
  const cleanInput = input.trim()

  if (cleanInput.length === 17) {
    const steamId = BigInt(cleanInput)
    const accountId = steamId - 76561197960265728n
    return accountId.toString()
  }

  return cleanInput
}

function PlayerHeading({ profile }) {
  if (!profile) {
    return null
  }

  const avatar = profile.avatarmedium

  return (
    <>
      <img src={avatar} alt={profile.personaname}/>
      <h2>{profile.personaname}</h2>
    </>
  )
}

export default PlayerHeading