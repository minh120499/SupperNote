import { Box, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { fetchNoteBooks } from '@/api/noteBookApi'

export const NoteBookListPage = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: fetchNoteBooks,
  })

  console.log(isPending, error, data, isFetching)

  return (
    <Box>
      <Box>
        <Text variant="gradient">Sách nên đọc</Text>
      </Box>
      <Box>
        Chó sủa nhầm cây - Tại sao những gì ta biết về thành công có khi lại sai
        - BARKING UP THE WRONG TREE
      </Box>
    </Box>
  )
}
