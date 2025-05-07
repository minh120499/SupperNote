import { Outlet } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { ConfigProvider, theme } from 'antd'
import { useAppContextStore } from './stores/useAppContextStore'

export const App = () => {
  const { isDarkMode } = useAppContextStore()
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <NavBar />
      <Outlet />
    </ConfigProvider>
  )
}
