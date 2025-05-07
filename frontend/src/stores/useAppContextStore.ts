import { Store, useStore } from '@tanstack/react-store'

export interface AppContext {
  isDarkMode: boolean
}

const appContextState = new Store<AppContext>({
  isDarkMode: true,
})

export const useAppContextStore = () => {
  const state = useStore(appContextState, (state) => state)

  const toggleDarkMode = () => {
    appContextState.setState((prev) => ({
      ...prev,
      isDarkMode: !prev.isDarkMode,
    }))
  }

  return {
    ...state,
    toggleDarkMode,
    setState: appContextState.setState,
  }
}
