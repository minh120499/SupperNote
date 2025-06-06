import { Box, Text } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notes/_pathlessLayout/books/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Box>
        <Text variant="gradient">Sách nên đọc</Text>
      </Box>
      <Box>
        Chó sủa nhầm cây - Tại sao những gì ta biết về thành công có khi lại sai
        - BARKING UP THE WRONG TREE
      </Box>
    </div>
  )
}
