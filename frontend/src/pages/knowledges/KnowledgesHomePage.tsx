import { Box, Button, Grid } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { useMemo } from 'react'
import { appRouter } from '@/main'
import { englishUnits } from '@/data/english/englishUnitListData'

interface KnowledgesHomePageProps {
  category: 'programming' | 'english'
}

export const KnowledgesHomePage = ({ category }: KnowledgesHomePageProps) => {
  const englishUnitsName = useMemo(
    () => {

      return Object.keys(englishUnits).map((unit) =>
        unit.replace('/src/docs/english/', ''),
      )
    }
      
    [],
  )

  return (
    <>
      <Box>
        <Button
          onClick={() =>
            appRouter.navigate({ to: '/knowledges/english/create' })
          }
        >
          Create
        </Button>
      </Box>

      <Grid>
        {englishUnitsName.map((englishUnit) => (
          <Grid.Col key={englishUnit} span={4}>
            <Link
              to="/knowledges/english/$unit"
              params={{ unit: englishUnit.replace('.md', '') }}
            >
              {englishUnit.replaceAll('_', ' ')}
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
