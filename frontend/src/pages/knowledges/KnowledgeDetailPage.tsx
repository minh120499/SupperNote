import {
  Anchor,
  Breadcrumbs,
  Button,
  Grid,
  GridCol,
  ScrollArea,
} from '@mantine/core'
import { useParams } from '@tanstack/react-router'

import { Markdown } from '@/components/Markdown'
import { EnglishSideBar } from '@/components/english/EnglishSideBar'
import { appRouter } from '@/main'
import type { CategoryType } from '@/types/AppType'
import { getKnowledgeFileContent } from '@/utils/knowledge'

interface KnowledgeDetailPageProps {
  category: CategoryType
}

export const KnowledgeDetailPage = ({ category }: KnowledgeDetailPageProps) => {
  const { unit } = useParams({ strict: false })

  const handleClick = (path: string) => {
    appRouter.navigate({ to: path })
  }

  return (
    <Grid>
      <GridCol span={4}>
        <Breadcrumbs>
          <Anchor onClick={() => handleClick(`/knowledges/${category}`)}>
            {category.toUpperCase()}
          </Anchor>
          <Anchor
            onClick={() => handleClick(`/knowledges/${category}/${unit}`)}
          >
            {unit}
          </Anchor>
        </Breadcrumbs>
      </GridCol>
      <GridCol span={8}>
        <Button
          onClick={() => handleClick(`/knowledges/${category}/${unit}/edit`)}
        >
          Edit
        </Button>
      </GridCol>

      <Grid.Col span={4}>
        <EnglishSideBar />
      </Grid.Col>
      <Grid.Col span={8}>
        <ScrollArea>
          <Markdown
            content={getKnowledgeFileContent(category, unit)}
            onChange={() => {}}
          />
        </ScrollArea>
      </Grid.Col>
    </Grid>
  )
}
