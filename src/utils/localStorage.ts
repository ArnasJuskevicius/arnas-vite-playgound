// Also can be done with union type example
// type LocalStorageKeys = 'FAVORITED'
export enum LocalStorageKeys {
  FAVORITED = 'FAVORITED',
}

export type SetLocalStorageItemProps<T> = {
  key: LocalStorageKeys
  value: T
}

export const setLocalStorageItem = <T>({
  key,
  value,
}: SetLocalStorageItemProps<T>) => {
  try {
    const stringifiedValue = JSON.stringify(value)
    localStorage.setItem(key, stringifiedValue)
  } catch (e) {
    // Good place to add sentry, trackjs
    console.log(e)
  }
}

export type GetLocalStorageItemProps = {
  key: LocalStorageKeys
}

export const getLocalStorageItem = <T>({
  key,
}: GetLocalStorageItemProps): T | null => {
  try {
    const value = localStorage.getItem(key)

    return value ? JSON.parse(value) : null
  } catch (e) {
    // Good place to add sentry, trackjs
    console.log(e)
    return null
  }
}
