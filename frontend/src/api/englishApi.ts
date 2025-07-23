import type { EnglishVocabularie } from '@/types/KnowledgeEnglish'
import apiLocalClient from './apiLocalClient'

export const fetchEnglishVocabularies = async () => {
  const res = await apiLocalClient.get<Array<EnglishVocabularie>>(
    '/knowledges/englishVocabularies.json',
  )
  return res.data
}
