import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { App } from '@/App'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <App />
        <TanStackRouterDevtools />
      </QueryClientProvider>
    </>
  ),
})
