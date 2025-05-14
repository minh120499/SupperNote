import { Link, useNavigate, useParams } from '@tanstack/react-router'
import { Anchor, Typography } from 'antd'
import { englishData } from './englishSideBarData'
import { Fragment } from 'react/jsx-runtime'

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
      {englishData.map((english) => {
        return (
          <Fragment key={english.title}>
            <Link
              to="/knowledges/english/$unit"
              params={{ unit: english.path }}
            >
              <Typography>{english.title}</Typography>
            </Link>

            {english.tableOfContents && (
              <Anchor
                affix={false}
                items={english.tableOfContents}
                onChange={() => onChange(english.path)}
              />
            )}
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
