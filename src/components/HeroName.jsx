function HeroName({ heroId, heroes }) {
  console.log(heroes)
  const foundHero = heroes.find((hero) => hero.id === heroId )

  return (
    <span>{ foundHero ? foundHero.name : "Hero Not Found"}</span>
  )
}

export default HeroName