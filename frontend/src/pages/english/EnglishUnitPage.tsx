import { EnglishSideBar } from '@/components/english/EnglishSideBar'
import { Markdown } from '@/components/Markdown'
import { englishUnits } from '@/data/english/englishUnitListData'
import {
  Anchor,
  Box,
  Breadcrumbs,
  Flex,
  Grid,
  GridCol,
  ScrollArea,
  Text,
} from '@mantine/core'
import { Link, useParams } from '@tanstack/react-router'

export const EnglishUnitPage = () => {
  const { unit } = useParams({ strict: false })

  const file = `/src/docs/english/${unit}.md`

  return (
    <Grid>
      <GridCol span={12}>
        <Breadcrumbs>
          <Anchor>
            <Link to="/knowledges/english">English</Link>
          </Anchor>
          <Anchor>{unit}</Anchor>
        </Breadcrumbs>
      </GridCol>

      <Grid.Col span={4}>
        <EnglishSideBar />
      </Grid.Col>
      <Grid.Col span={8}>
        <ScrollArea>
          <Markdown content={englishUnits[file]} />
        </ScrollArea>
      </Grid.Col>
    </Grid>
  )
}
