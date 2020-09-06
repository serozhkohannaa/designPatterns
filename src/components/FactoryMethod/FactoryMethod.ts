import { Villain} from "./UserTwo";
import { Hero } from "./UserOne";

export class SuperHeroFactory {
  // @ts-ignore
  createSuperHero(type: Object);
  createSuperHero(type: 'hero'): Hero;
  createSuperHero(type: 'villain'): Villain;

  public createSuperHero(heroOptions: any): Hero | Villain {
	if (heroOptions.type === "hero") {
	  const hero = new Hero(heroOptions.name, heroOptions.health);
	  return hero;
	} else if (heroOptions.type === "villain") {
	  const villain = new Villain(heroOptions.name, heroOptions.health);
	  return villain;
	} else {
	  throw new Error('Select either a Hero or a Villain');
	}
  }
}