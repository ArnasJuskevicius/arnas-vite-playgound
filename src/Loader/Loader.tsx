import React, { useRef } from 'react'
import { useIntersectionHook } from '@app/hooks/useIntersectionHook'
import Heart from '@app/images/hearts.svg'
import classes from './loader.module.css'

export type LoaderProps = {
  onVisible: () => void
}

export const Loader: React.FC<LoaderProps> = ({ onVisible }) => {
  const loader = useRef(null)

  useIntersectionHook({
    ref: loader,
    callback: onVisible,
    options: { threshold: 0 },
    keepAlive: true,
  })

  return (
    <div className={classes.container}>
      <img ref={loader} src={Heart} alt="loader" />
    </div>
  )
}
