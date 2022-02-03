import React, { useEffect, useState, useCallback } from 'react'
import {
  fetchCharactersByPage,
  fetchCharactersByIds,
} from './services/rickAndMortyService/service'
import { CharacterDTO } from './services/rickAndMortyService/types'
import { getRandomInt } from './utils/getRandomInt'
import { Card } from './components/Card/Card'
import { Loader } from './components/Loader/Loader'
import classes from './app.module.css'
import {
  setLocalStorageItem,
  getLocalStorageItem,
  LocalStorageKeys,
} from './utils/localStorage'

export const App: React.FC = () => {
  const [images, setImages] = useState<CharacterDTO[]>([])
  const [page, setPage] = useState<number>(getRandomInt(42))
  const [favorited, setFavorited] = useState<number[]>([])

  useEffect(() => {
    const favoritedCharacters = getLocalStorageItem<number[] | null>({
      key: LocalStorageKeys.FAVORITED,
    })

    if (favoritedCharacters === null || favoritedCharacters.length === 0) {
      return
    }

    async function dataFetch() {
      const characters = await fetchCharactersByIds(
        favoritedCharacters as number[]
      )

      setImages(characters)
      setFavorited(favoritedCharacters as number[])
    }

    dataFetch()
  }, [])

  useEffect(() => {
    async function dataFetch() {
      const characters = await fetchCharactersByPage(page)
      setImages((prevImages) => [...prevImages, ...characters.results])
    }

    // There is only 42 pages in this API, so setting it to 1 after end is reached.
    if (page === 42) {
      setPage(1)
    }

    dataFetch()
  }, [page])

  const loadNextPage = useCallback(() => {
    console.log('loadNextPage')
    setPage((prevPage) => prevPage + 1)
  }, [])

  const clickHandler = (id: number) => {
    let newValue
    if (favorited.includes(id)) {
      newValue = favorited.filter((item) => item !== id)
      setFavorited(newValue)
    } else {
      newValue = [...favorited, id]
      setFavorited(newValue)
    }

    setLocalStorageItem<number[]>({
      key: LocalStorageKeys.FAVORITED,
      value: newValue,
    })
  }

  return (
    <div className={classes.container}>
      {images.length > 0 &&
        images.map(({ id, image, name, origin: { name: originName } }) => (
          <Card
            onClick={() => clickHandler(id)}
            key={id}
            src={image}
            alt={name}
            description={originName}
            name={name}
            isFavorited={favorited.includes(id)}
          />
        ))}
      {images.length > 0 && <Loader onVisible={loadNextPage} />}
    </div>
  )
}
