import { RickAndMortyDTO, CharacterDTO } from './types'

export const fetchCharactersByPage = async (
  page: number
): Promise<RickAndMortyDTO> => {
  const response = await fetch(
    `${import.meta.env.VITE_RICK_AND_MORTY_API}/character/?page=${page}`
  )

  return response.json()
}

export const fetchCharactersByIds = async (
  ids: number[]
): Promise<CharacterDTO[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_RICK_AND_MORTY_API}/character/${ids.join(',')}`
  )

  // API returns object if there is only one character requested.
  if (ids.length === 1) {
    return [await response.json()]
  }

  return response.json()
}
