import { NoteBookCreatePage } from '@/pages/notes/books/NoteBookCreatePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notes/_pathlessLayout/books/$id')({
  component: NoteBookCreatePage,
})
