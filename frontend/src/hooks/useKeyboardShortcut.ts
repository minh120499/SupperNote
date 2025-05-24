import { useEffect, useState } from 'react'

const modifierKeys = ['Control']

export enum KeyboardShortcut {
  SEARCH_SHORTCUT = 'control+f',
}

export const useKeyboardShortcut = () => {
  const [shortcutKeyboard, setShortcutKeyboard] = useState('')
  const [usedShortKey, setUsedShortKey] = useState<{ [key: string]: boolean }>(
    {},
  )

  console.log(modifierKeys)

  useEffect(() => {
    const handleKeyboardShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') {
        event.preventDefault()
        const shortKey = 'control+' + event.key.toLowerCase()
        setShortcutKeyboard(shortKey)
        setUsedShortKey((prev) => ({
          ...prev,
          [shortKey]: !prev[shortKey],
        }))
      }
    }
    document.addEventListener('keydown', handleKeyboardShortcut)

    return () => {
      document.removeEventListener('keydown', handleKeyboardShortcut)
    }
  }, [])

  return {
    shortcutKeyboard,
    usedShortKey,
  }
}
