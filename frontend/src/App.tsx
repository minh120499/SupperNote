import { Outlet } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({
  /** Your theme override here */
})

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <Outlet />
    </MantineProvider>
  )
}
