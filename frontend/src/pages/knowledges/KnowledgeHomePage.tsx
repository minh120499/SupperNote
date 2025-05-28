import { Box, Button, Grid } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import type { CategoryType } from '@/types/AppType'
import { appRouter } from '@/main'
import { englishUnits } from '@/data/english/englishUnitListData'
import { programmingUnits } from '@/data/programming/programmingUnitsListData'

interface KnowledgeHomePageProps {
  category: CategoryType
}

const getKnowledgeCategory = (category: CategoryType) => {
  let knowledge: Record<string, string>
  switch (category) {
    case 'english':
      knowledge = englishUnits
      break
    case 'programming':
      knowledge = programmingUnits
      break
  }

  return Object.keys(knowledge).map((unit) =>
    unit.replace('/src/docs/english/', ''),
  )
}

export const KnowledgesHomePage = ({ category }: KnowledgeHomePageProps) => {
  return (
    <>
      <Box>
        <Button
          onClick={() =>
            appRouter.navigate({ to: `/knowledges/${category}/create` })
          }
        >
          Create
        </Button>
      </Box>

      <Grid>
        {getKnowledgeCategory(category).map((knowledgeCategory) => (
          <Grid.Col key={knowledgeCategory} span={4}>
            <Link
              to="/knowledges/english/$unit"
              params={{ unit: knowledgeCategory.replace('.md', '') }}
            >
              {knowledgeCategory.replaceAll('_', ' ')}
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
