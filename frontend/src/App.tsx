import { Outlet } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import {
  Container,
  createTheme,
  Flex,
  MantineProvider,
  Paper,
} from '@mantine/core'

const theme = createTheme({
  /** Your theme override here */
})

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Flex direction="column" h="100vh">
        <Paper pos="sticky" top={0} style={{ zIndex: 1 }}>
          <Container w="100%">
            <NavBar />
          </Container>
        </Paper>

        <Container flex={1} style={{ overflow: 'auto' }} pos="relative">
          <Outlet />
        </Container>
      </Flex>
    </MantineProvider>
  )
}
