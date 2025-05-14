import { Markdown } from '@/components/Markdown'
import { useParams } from '@tanstack/react-router'

const posts = import.meta.glob('@/docs/english/*.md', {
  as: 'raw',
  eager: true,
})

export const EnglishUnitPage = () => {
  const { unit } = useParams({ strict: false })
  const file = `/src/docs/english/${unit}.md`

  return (
    <div>
      <Markdown content={posts[file]} />
    </div>
  )
}
