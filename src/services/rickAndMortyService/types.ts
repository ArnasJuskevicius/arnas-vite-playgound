export type CharacterDTO = {
  id: number
  name: string
  status: 'Dead' | 'Alive' | 'unknown'
  type: string
  species: string
  gender: 'unknown' | 'Female' | 'Male' | 'Genderless'
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
}

export type RickAndMortyDTO = {
  info: {
    count: number
    pages: number
    next: string
    prev: string
  }
  results: CharacterDTO[]
}
