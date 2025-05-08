import { Outlet } from '@tanstack/react-router'
import { ConfigProvider, theme } from 'antd'
import { useAppContextStore } from './stores/useAppContextStore'
import { NavBar } from '@/components/NavBar'

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
