import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Mark from 'mark.js'
import { useRef, useEffect, useState, memo } from 'react'
import {
  KeyboardShortcut,
  useKeyboardShortcut,
} from '@/hooks/useKeyboardShortcut'
import { Input } from 'antd'
import { debounce } from 'lodash'
interface MarkdownProps {
  content?: string
}

const MarkdownComponent = ({
  content = '# 404 - Không tìm thấy bài viết',
}: MarkdownProps) => {
  const { usedShortKey } = useKeyboardShortcut()

  const contentRef = useRef<HTMLDivElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchWords, setSearchWords] = useState('')
  const [marks, setMarks] = useState<NodeListOf<HTMLElement>>()

  useEffect(() => {
    if (searchWords && contentRef.current && content.length > 0) {
      const instance = new Mark(contentRef.current)
      instance.unmark({
        done: () => {
          instance.mark(searchWords, { separateWordSearch: false })
        },
      })
    }
  }, [searchWords, content])

  const logSearch = debounce((query) => {
    console.log('Tìm kiếm:', query)
  }, 500)

  console.log(usedShortKey)

  return (
    <div ref={contentRef}>
      {usedShortKey[KeyboardShortcut.SEARCH_SHORTCUT] && (
        <Input
          value={searchWords}
          onChange={(e) => {
            setSearchWords(e.target.value)
            logSearch(e.target.value)
          }}
        />
      )}
      <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export const Markdown = memo(MarkdownComponent)
