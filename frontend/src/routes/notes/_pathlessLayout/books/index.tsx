import { createFileRoute } from '@tanstack/react-router'

import { NoteBookListPage } from '@/pages/notes/books/NoteBookListPage'

export const Route = createFileRoute('/notes/_pathlessLayout/books/')({
  component: NoteBookListPage,
})
