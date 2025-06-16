import type { NoteBook } from '@/types/NoteBook'
import apiClient from './apiClient'

export const fetchNoteBooks = async () => {
  const res = await apiClient.get<NoteBook[]>('/bookNotes.json')
  return res.data
}
