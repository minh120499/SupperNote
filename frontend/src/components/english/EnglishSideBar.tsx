import { Link, useNavigate, useParams } from '@tanstack/react-router'
import { Anchor, Typography } from 'antd'
import { englishData } from './englishSideBarData'

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
          <>
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
          </>
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
