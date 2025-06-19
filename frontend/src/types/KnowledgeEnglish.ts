export interface EnglishVocabularie {
  id: number
  word: string
  meaning: string
  example?: string
  pronunciation?: string
  definition?: string
  species?: string
  word_relations?: Array<string>
  tags?: Array<string>
}
