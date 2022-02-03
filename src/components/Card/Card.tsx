import React, { useRef, useState } from 'react'
import { useIntersectionHook } from '@app/hooks/useIntersectionHook'
import Blur1 from '@app/images/blured-1.jpg'
import classes from './card.module.css'

export type CardProps = {
  src: string
  alt: string
  description: string | null
  name: string | null
  onClick: () => void
  isFavorited: boolean
}

export const Card: React.FC<CardProps> = ({
  alt,
  src,
  name,
  description,
  isFavorited,
  onClick,
}) => {
  const card = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  useIntersectionHook({
    ref: card,
    callback: () => setIsVisible(true),
    options: { threshold: 0 },
  })

  return (
    <div data-test="card" className={classes.card} ref={card}>
      <div className={classes.overlay}>
        <p className={classes.description}>{description}</p>
        <p className={classes.name}>{name}</p>
        <button
          className={`${classes.button} ${
            isFavorited ? classes.isFavorited : ''
          }`}
          type="button"
          onClick={onClick}
        >
          {isFavorited ? 'Dislike' : 'Favorite'}
        </button>
      </div>
      {isVisible && (
        <picture className={classes.imageContainer}>
          <img
            className={`${classes.image} ${!isLoaded ? classes.isVisible : ''}`}
            alt="blured"
            src={Blur1}
          />
          <img
            className={`${classes.image} ${isLoaded ? classes.isVisible : ''}`}
            src={src}
            alt={alt}
            onLoad={handleOnLoad}
          />
        </picture>
      )}
    </div>
  )
}
