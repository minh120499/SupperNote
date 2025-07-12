import apiLocalClient from './apiLocalClient'
import type { NoteBook } from '@/types/NoteBook'

export const fetchNoteBooks = async () => {
  const res = await apiLocalClient.get<Array<NoteBook>>('/notes/books.json')
  return res.data
}
