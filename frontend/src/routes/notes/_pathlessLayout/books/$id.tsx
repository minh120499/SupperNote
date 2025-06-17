import { createFileRoute } from '@tanstack/react-router'
import { NoteBookCreatePage } from '@/pages/notes/books/NoteBookCreatePage'

export const Route = createFileRoute('/notes/_pathlessLayout/books/$id')({
  component: NoteBookCreatePage,
})
