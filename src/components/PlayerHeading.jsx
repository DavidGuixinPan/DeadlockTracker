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