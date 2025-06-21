import { Box, Button, Grid } from '@mantine/core'
import type { CategoryType } from '@/types/AppType'
import { appRouter } from '@/main'
import { LinkComponent } from '@/components/ui/LinkComponent'
import { getKnowledgeCategory } from '@/utils/knowledge'

interface KnowledgeHomePageProps {
  category: CategoryType
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
            <LinkComponent
              to={`/knowledges/${category}/$unit`}
              params={{ unit: knowledgeCategory.replace('.md', '') }}
            >
              {knowledgeCategory.replaceAll('_', ' ')}
            </LinkComponent>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
