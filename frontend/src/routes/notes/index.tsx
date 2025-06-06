import { LinkComponent } from '@/components/ui/LinkComponent'
import { Box } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

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
