function HeroBadge({ heroId, heroes }) {
  const foundHero = heroes.find((hero) => hero.id === heroId )
  if (!foundHero) {
    return <span>Hero Not Found</span>
  }
  const foundHeroImage = foundHero.images.icon_hero_card
  console.log(foundHero)

  return (
    <>
    <img src={foundHeroImage} alt={foundHero.name} className="hero-icon" />
    <span>{foundHero.name}</span>
    </>
  )
}

export default HeroBadge