import {
  Anchor,
  Breadcrumbs,
  Button,
  Grid,
  GridCol,
  ScrollArea,
} from '@mantine/core'
import { useParams } from '@tanstack/react-router'
import type { CategoryType } from '@/types/AppType'
import { EnglishSideBar } from '@/components/english/EnglishSideBar'
import { Markdown } from '@/components/Markdown'
import { englishUnits } from '@/data/english/englishUnitListData'
import { appRouter } from '@/main'

interface KnowledgeDetailPageProps {
  category: CategoryType
}

export const KnowledgeDetailPage = ({ category }: KnowledgeDetailPageProps) => {
  const { unit } = useParams({ strict: false })

  const handleClick = (path: string) => {
    appRouter.navigate({ to: path })
  }

  const file = `/src/docs/${category}/${unit}.md`

  return (
    <Grid>
      <GridCol span={4}>
        <Breadcrumbs>
          <Anchor onClick={() => handleClick('/knowledges/english')}>
            {category.toUpperCase()}
          </Anchor>
          <Anchor onClick={() => handleClick(`/knowledges/english/${unit}`)}>
            {unit}
          </Anchor>
        </Breadcrumbs>
      </GridCol>
      <GridCol span={8}>
        <Button onClick={() => handleClick(`/knowledges/english/${unit}/edit`)}>
          Edit
        </Button>
      </GridCol>

      <Grid.Col span={4}>
        <EnglishSideBar />
      </Grid.Col>
      <Grid.Col span={8}>
        <ScrollArea>
          <Markdown content={englishUnits[file]} onChange={() => {}} />
        </ScrollArea>
      </Grid.Col>
    </Grid>
  )
}
