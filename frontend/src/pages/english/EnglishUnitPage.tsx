import { useParams } from '@tanstack/react-router'

export const EnglishUnitPage = () => {
  const { unit } = useParams({ strict: false })
  return <div>{unit}</div>
}
