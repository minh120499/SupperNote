import { EnglishSideBar } from '@/components/english/EnglishSideBar'
import { Markdown } from '@/components/Markdown'
import { englishUnits } from '@/data/english/englishUnitListData'
import { Anchor, Breadcrumbs, Grid, GridCol, ScrollArea } from '@mantine/core'
import { useNavigate, useParams } from '@tanstack/react-router'

export const EnglishUnitPage = () => {
  const { unit } = useParams({ strict: false })
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    navigate({ to: path })
  }

  const file = `/src/docs/english/${unit}.md`

  return (
    <Grid>
      <GridCol span={12}>
        <Breadcrumbs>
          <Anchor onClick={() => handleClick('/knowledges/english')}>
            English
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
