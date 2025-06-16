import { fetchNoteBooks } from '@/api/noteBookApi'
import { appRouter } from '@/main'
import type { NoteBook } from '@/types/NoteBook'
import { Box, Button, Grid, TextInput, Title } from '@mantine/core'
import { useForm } from '@tanstack/react-form'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const NoteBookCreatePage = () => {
  const { id } = useParams({ strict: false })

  const { data: books } = useQuery({
    queryKey: [],
    queryFn: fetchNoteBooks,
    refetchOnWindowFocus: false,
  })
  const form = useForm({
    defaultValues: {} as NoteBook,
    onSubmit: async ({ value }) => {
      handleSubmit(value)
    },
  })

  const handleSubmit = (value: NoteBook) => {
    const lastId = books?.at(-1)?.id || 0
    value.id = lastId + 1
    const newBooks = [...(books || []), value]
    const text = JSON.stringify(newBooks, null, 2)

    const blob = new Blob([text], { type: 'text/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `bookNotes.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    URL.revokeObjectURL(url)

    appRouter.navigate({ to: '/notes/books' })
  }

  return (
    <Box>
      <Title order={1}>Create a new book note</Title>

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

      <Button onClick={form.handleSubmit}>Submit</Button>
    </Box>
  )
}
