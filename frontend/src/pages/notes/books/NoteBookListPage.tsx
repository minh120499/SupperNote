import { ActionIcon, Box, Flex, NavLink, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { IconPlus } from '@tabler/icons-react'
import { fetchNoteBooks } from '@/api/noteBookApi'
import { appRouter } from '@/main'

export const NoteBookListPage = () => {
  const {
    isLoading,
    error,
    data: books,
  } = useQuery({
    queryKey: [],
    queryFn: fetchNoteBooks,
    refetchOnWindowFocus: false,
  })

  const handleAddBook = () => {
    appRouter.navigate({
      to: '/notes/books/create',
    })
  }

  return (
    <Box>
      <Flex align={'center'} mb="md" gap={'xs'}>
        <Text variant="gradient">Sách nên đọc</Text>
        <ActionIcon variant="subtle" size={'sm'} onClick={handleAddBook}>
          <IconPlus stroke={2} />
        </ActionIcon>
      </Flex>

      {isLoading && <Box>Loading...</Box>}
      {!error &&
        books?.map((book) => (
          <NavLink
            key={book.id}
            onClick={(e) => {
              e.preventDefault()
              appRouter.navigate({ to: '/notes/books/' + book.id })
            }}
            href={'/notes/books/' + book.id}
            label={
              <Box mb="md">
                <Box>
                  <Text>{book.name}</Text>
                </Box>
                <Box>{book.description}</Box>
                {book.link && (
                  <Box>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </Box>
                )}
                {book.image && (
                  <Box>
                    <img src={book.image} alt={book.name} />
                  </Box>
                )}
              </Box>
            }
          />
        ))}
    </Box>
  )
}
