function PlayerHeading({ profile, profileError }) {
  if (profileError) {
    return <span>Couldn't load profile. {profileError}</span>
  }

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