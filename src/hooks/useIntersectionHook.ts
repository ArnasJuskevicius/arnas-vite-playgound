import { useEffect, MutableRefObject } from 'react'

type UseIntersectionHookProps = {
  ref: MutableRefObject<Element | null>
  callback: () => void
  options?: Record<string, string | number>
  keepAlive?: boolean
}

const listenerCallbacks = new WeakMap()

let observer: IntersectionObserver

export const useIntersectionHook = ({
  options,
  ref,
  callback,
  keepAlive = false,
}: UseIntersectionHookProps) => {
  useEffect(() => {
    const target = ref.current

    if (target === null) {
      return function () {
        return null
      }
    }

    const handleIntersections = (
      entries: IntersectionObserverEntry[]
    ): void => {
      entries.forEach((entry) => {
        if (listenerCallbacks.has(entry.target)) {
          const cb = listenerCallbacks.get(entry.target)

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            if (keepAlive) {
              cb()
            } else {
              observer.unobserve(entry.target)
              listenerCallbacks.delete(entry.target)
              cb()
            }
          }
        }
      })
    }

    observer = new IntersectionObserver(handleIntersections, options)
    listenerCallbacks.set(target, callback)
    observer.observe(target)

    return () => {
      listenerCallbacks.delete(target)
      observer.unobserve(target)
    }
  }, [])
}
