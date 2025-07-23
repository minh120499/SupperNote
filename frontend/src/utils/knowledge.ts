import { englishUnits } from '@/data/english/englishUnitListData'
import { programmingUnits } from '@/data/programming/programmingUnitsListData'
import type { CategoryType } from '@/types/AppType'

export const getKnowledgeCategory = (category: CategoryType) => {
  let knowledge: Record<string, string>
  switch (category) {
    case 'english':
      knowledge = englishUnits
      break
    case 'programming':
      knowledge = programmingUnits
      break
  }

  return Object.keys(knowledge).map(unit =>
    unit.replace(`/src/docs/${category}/`, ''),
  )
}

export const getKnowledgeFileContent = (
  category: CategoryType,
  path: string | undefined,
) => {
  const file = `/src/docs/${category}/${path}.md`
  if (!file) return ''

  let knowledge: Record<string, string>
  switch (category) {
    case 'english':
      knowledge = englishUnits
      break
    case 'programming':
      knowledge = programmingUnits
      break
  }
  return knowledge[file]
}
