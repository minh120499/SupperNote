import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface MarkdownProps {
  content?: string
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>
      {content || '# 404 - Không tìm thấy bài viết'}
    </ReactMarkdown>
  )
}
