import type { NoteBook } from '@/types/NoteBook'

import apiLocalClient from './apiLocalClient'

export const fetchNoteBooks = async () => {
  const res = await apiLocalClient.get<Array<NoteBook>>('/notes/books.json')
  return res.data
}
