import { Box } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

import { LinkComponent } from '@/components/ui/LinkComponent'

export const Route = createFileRoute('/travels/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Box>
        <LinkComponent to="/travels/foods">Foods</LinkComponent>
      </Box>
      <Box>
        <LinkComponent to="/travels/coffees">Coffee</LinkComponent>
      </Box>
    </>
  )
}
