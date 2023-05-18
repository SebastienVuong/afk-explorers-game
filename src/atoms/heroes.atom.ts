import { atomWithStorage } from "jotai/utils"

export interface IHero {
  id: number
  name: string
  hp: number
  maxHp: number
  earnings: number
}

const mockHeroes: IHero[] = [
  { id: 11, name: "Dr Nice", hp: 100, maxHp: 100, earnings: 10 },
  { id: 12, name: "Narco", hp: 0, maxHp: 92, earnings: 3 },
  { id: 13, name: "Bombasto", hp: 40, maxHp: 40, earnings: 25 },
  { id: 14, name: "Celeritas", hp: 10, maxHp: 65, earnings: 12 },
  { id: 15, name: "Magneta", hp: 45, maxHp: 45, earnings: 17 },
]

export const heroesAtom = atomWithStorage<IHero[]>("heroes", mockHeroes)
