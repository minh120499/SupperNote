import type { NoteBook } from '@/types/NoteBook'
import apiClient from './apiClient'

export const fetchNoteBooks = async () => {
  const res = await apiClient.get<NoteBook[]>('notes/books.json')
  return res.data
}
