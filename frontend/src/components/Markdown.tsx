import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import Mark from 'mark.js'
import { memo, useEffect, useRef, useState } from 'react'
import { ActionIcon, Box, Input, ScrollArea, Textarea } from '@mantine/core'
import {
  KeyboardShortcut,
  useKeyboardShortcut,
} from '@/hooks/useKeyboardShortcut'
import { IconBook } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

interface MarkdownProps {
  content?: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

const MarkdownComponent = ({
  content = '# 404 - Không tìm thấy bài viết',
  onChange,
}: MarkdownProps) => {
  console.log(content)

  const { usedShortKey } = useKeyboardShortcut()
  const isOpenSearch = usedShortKey[KeyboardShortcut.SEARCH_SHORTCUT]
  const [opened, { toggle }] = useDisclosure()

  const contentRef = useRef<HTMLDivElement>(null)

  // const [currentIndex, setCurrentIndex] = useState(0)
  // const [marks, setMarks] = useState<NodeListOf<HTMLElement>>()
  const [searchWords, setSearchWords] = useState('')

  useEffect(() => {
    if (contentRef.current && content.length > 0) {
      const instance = new Mark(contentRef.current)
      if (!searchWords || !isOpenSearch) {
        instance.unmark()
        setSearchWords('')
      } else {
        instance.unmark({
          done: () => {
            instance.mark(searchWords, { separateWordSearch: false })
          },
        })
      }
    }
  }, [searchWords, content, isOpenSearch])

  return (
    <Box style={{ width: '100%' }} id="mdx" display={'flex'}>
      {isOpenSearch && (
        <Input
          autoFocus
          value={searchWords}
          onChange={(e) => {
            setSearchWords(e.target.value)
          }}
        />
      )}
      {/* <GridCol span={opened ? 6 : 12} pos="relative"> */}
      <Box
        style={{ width: opened ? '50%' : '100%', gap: '4px' }}
        pos="relative"
      >
        <ActionIcon
          variant="subtle"
          onClick={toggle}
          pos="absolute"
          style={{ zIndex: 9, right: 0, margin: '4px 8px' }}
        >
          <IconBook />
        </ActionIcon>
        <Textarea
          autosize
          defaultValue={content}
          onChange={onChange}
          minRows={30}
          maxRows={30}
          name="markdown"
        />
      </Box>
      {/* </GridCol> */}

      {opened && (
        // <GridCol span={6}>
        <Box style={{ width: '50%' }} pos="relative">
          <ScrollArea h={650}>
            <div ref={contentRef}>
              <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </ScrollArea>
        </Box>
        // </GridCol>
      )}
    </Box>
  )
}

export const Markdown = memo(MarkdownComponent)
