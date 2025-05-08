import { Store, useStore } from '@tanstack/react-store'
import { useEffect } from 'react'

export interface AppContext {
  isDarkMode: boolean
}

const LOCAL_KEY = 'AppContext'

const initState = (): AppContext => {
  const storage = localStorage.getItem(LOCAL_KEY)
  if (storage) return JSON.parse(storage)

  const state = {
    isDarkMode: true,
  }

  localStorage.setItem(LOCAL_KEY, JSON.stringify(state))

  return state
}

const appContextState = new Store<AppContext>(initState())

export const useAppContextStore = () => {
  const appContext = useStore(appContextState, (state) => state)

  const toggleDarkMode = () => {
    appContextState.setState((prev) => ({
      ...prev,
      isDarkMode: !prev.isDarkMode,
    }))
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(appContext))
  }, [appContext])

  return {
    ...appContext,
    toggleDarkMode,
    setState: appContextState.setState,
  }
}
