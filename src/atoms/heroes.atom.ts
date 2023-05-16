import { atom, useAtom } from "jotai"

export interface IHero {
  id: number
  name: string
}

const mockHeroes: IHero[] = [
  { id: 11, name: "Dr Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
]

export const heroesAtom = atom<IHero[]>(mockHeroes)
