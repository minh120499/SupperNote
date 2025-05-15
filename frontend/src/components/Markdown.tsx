import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Mark from 'mark.js'
import { useRef, useEffect, useState, memo } from 'react'
import {
  KeyboardShortcut,
  useKeyboardShortcut,
} from '@/hooks/useKeyboardShortcut'
import { Input } from '@mantine/core'
interface MarkdownProps {
  content?: string
}

const MarkdownComponent = ({
  content = '# 404 - Không tìm thấy bài viết',
}: MarkdownProps) => {
  const { usedShortKey } = useKeyboardShortcut()
  const isOpenSearch = usedShortKey[KeyboardShortcut.SEARCH_SHORTCUT]

  const contentRef = useRef<HTMLDivElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchWords, setSearchWords] = useState('')
  const [marks, setMarks] = useState<NodeListOf<HTMLElement>>()

  useEffect(() => {
    if (contentRef.current && content.length > 0) {
      const instance = new Mark(contentRef.current)
      if (!searchWords || isOpenSearch) {
        instance.unmark()
      } else {
        instance.unmark({
          done: () => {
            instance.mark(searchWords, { separateWordSearch: false })
          },
        })
      }
    }
  }, [searchWords, content])

  return (
    <div ref={contentRef}>
      {isOpenSearch && (
        <Input
          autoFocus
          value={searchWords}
          onChange={(e) => {
            setSearchWords(e.target.value)
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
