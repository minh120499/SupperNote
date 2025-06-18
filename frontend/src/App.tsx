import { Outlet } from '@tanstack/react-router'
import {
  Container,
  Flex,
  MantineProvider,
  Paper,
  createTheme,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { NavBar } from '@/components/NavBar'

const theme = createTheme({
  /** Your theme override here */
})

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Flex direction="column" h="100vh">
          <Paper pos="sticky" top={0} style={{ zIndex: 1 }}>
            <Container fluid>
              <NavBar />
            </Container>
          </Paper>

          <Container
            fluid
            flex={1}
            style={{ overflow: 'auto' }}
            m={0}
            pos="relative"
          >
            <Outlet />
          </Container>
        </Flex>
      </ModalsProvider>
    </MantineProvider>
  )
}
