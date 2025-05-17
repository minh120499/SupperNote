import { englishUnits } from '@/data/english/englishUnitListData'
import { Grid } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { useMemo } from 'react'

export const EnglishHomePage = () => {
  const englishUnitsName = useMemo(
    () =>
      Object.keys(englishUnits).map((unit) =>
        unit.replace('/src/docs/english/', ''),
      ),
    [],
  )

  return (
    <>
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
