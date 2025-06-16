import apiClient from './apiClient'
import type { EnglishVocabularie } from '@/types/KnowledgeEnglish'

export const fetchEnglishVocabularies = async () => {
  const res = await apiClient.get<EnglishVocabularie[]>(
    'knowledges/englishVocabularies.json',
  )
  return res.data
}
