import apiClient from './apiClient'

export const fetchNoteBooks = async () => {
  const res = await apiClient.get('/bookNotes.json')
  return res.data
}
