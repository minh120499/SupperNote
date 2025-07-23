import { Box } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

import { LinkComponent } from '@/components/ui/LinkComponent'

export const Route = createFileRoute('/notes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Box>
        <LinkComponent to="/notes/books">Book</LinkComponent>
      </Box>
    </>
  )
}
