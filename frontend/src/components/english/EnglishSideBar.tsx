import { Link, useNavigate, useParams } from '@tanstack/react-router'
import { englishData } from './englishSideBarData'
import { Fragment } from 'react/jsx-runtime'
import { TableOfContents, Text } from '@mantine/core'

export const EnglishSideBar = () => {
  const navigate = useNavigate()
  const { unit: currentUnit } = useParams({ strict: false })
  const onChange = (unit: string) => {
    if (currentUnit !== unit) {
      navigate({ to: '/knowledges/english/$unit', params: { unit } })
    }
  }

  return (
    <div>
      <TableOfContents
        variant="filled"
        color="blue"
        size="sm"
        radius="sm"
        scrollSpyOptions={{
          selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
        }}
        getControlProps={({ data }) => ({
          onClick: () => data.getNode().scrollIntoView(),
          children: data.value,
        })}
      />
      <h1>ádf</h1>

      {englishData.map((english) => {
        return (
          <Fragment key={english.title}>
            <Link
              to="/knowledges/english/$unit"
              params={{ unit: english.path }}
            >
              <Text>{english.title}</Text>
            </Link>

            {/* {english.tableOfContents && (
              <Anchor
                affix={false}
                items={english.tableOfContents}
                onChange={() => onChange(english.path)}
              />
            )} */}
          </Fragment>
        )
      })}

      {/* <Link to="/knowledges/english/$unit" params={{ unit: 'unit_2' }}>
        <Typography>UNIT 2</Typography>
      </Link>

      <Anchor
        affix={false}
        items={anchorItem}
        onChange={() => onChange('unit_2')}
      /> */}
    </div>
  )
}
