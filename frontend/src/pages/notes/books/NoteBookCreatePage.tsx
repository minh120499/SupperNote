import { Box, Button, Grid, Group, TextInput, Title } from '@mantine/core'
import { useForm } from '@tanstack/react-form'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import type { NoteBook } from '@/types/NoteBook'
import { handleSaveFile } from '@/utils/files'
import { appRouter } from '@/main'
import { fetchNoteBooks } from '@/api/noteBookApi'

export const NoteBookCreatePage = () => {
  const { id } = useParams({ strict: false })

  const { data: books } = useQuery({
    queryKey: [],
    queryFn: fetchNoteBooks,
    refetchOnWindowFocus: false,
  })

  const currentBook = books?.find((book) => book.id === Number(id))

  const form = useForm({
    defaultValues: { ...currentBook } as NoteBook,
    onSubmit: ({ value }) => {
      handleSubmit(value)
    },
  })

  const handleSubmit = (value: NoteBook) => {
    const lastId = books?.at(-1)?.id || 0
    value.id = lastId + 1
    const newBooks = [...(books || []), value]
    const content = JSON.stringify(newBooks, null, 2)
    handleSaveFile(content, 'bookNotes.json')
    appRouter.navigate({ to: '/notes/books' })
  }

  const handleDelete = () => {
    const newBooks = books?.filter((book) => book.id !== currentBook?.id)
    const content = JSON.stringify(newBooks, null, 2)
    handleSaveFile(content, 'bookNotes.json')
    appRouter.navigate({ to: '/notes/books' })
  }

  return (
    <Box>
      <Title order={1}>
        {!currentBook ? 'Create a new book note' : currentBook.name}
      </Title>

      <Grid>
        <Grid.Col span={6}>
          <form.Field
            name="name"
            children={(field) => {
              return (
                <TextInput
                  label="Book Name"
                  placeholder="Enter book name"
                  withAsterisk
                  value={field.state.value}
                  onChange={(event) => field.handleChange(event.target.value)}
                />
              )
            }}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <form.Field
            name="description"
            children={(field) => {
              return (
                <TextInput
                  label="Description"
                  placeholder="Enter book description"
                  value={field.state.value}
                  onChange={(event) => field.handleChange(event.target.value)}
                />
              )
            }}
          />
        </Grid.Col>
      </Grid>

      <Group mt={'md'}>
        <Button onClick={form.handleSubmit}>
          {currentBook ? 'Update' : 'Submit'}
        </Button>

        {currentBook && (
          <Button variant="outline" color="red" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </Group>
    </Box>
  )
}
