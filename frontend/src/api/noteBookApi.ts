import apiClient from './apiClient'
import type { NoteBook } from '@/types/NoteBook'

export const fetchNoteBooks = async () => {
  const res = await apiClient.get<Array<NoteBook>>('notes/books.json')
  return res.data
}
