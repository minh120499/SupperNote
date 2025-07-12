import apiLocalClient from './apiLocalClient'
import type { EnglishVocabularie } from '@/types/KnowledgeEnglish'

export const fetchEnglishVocabularies = async () => {
  const res = await apiLocalClient.get<Array<EnglishVocabularie>>(
    '/knowledges/englishVocabularies.json',
  )
  return res.data
}
