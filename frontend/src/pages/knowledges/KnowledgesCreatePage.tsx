import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {
  ActionIcon,
  Button,
  Grid,
  GridCol,
  Input,
  ScrollArea,
  Textarea,
} from '@mantine/core'
import { debounce } from 'lodash'
import { useDisclosure } from '@mantine/hooks'
import { IconBook } from '@tabler/icons-react'
import type { ChangeEvent } from 'react'

const initialMarkdown = `# Welcome to Markdown Editor

Edit this text on the left!

## Features

- **Bold**, *Italic*, \`Code\`
- Tables, task lists
- [Links](https://reactjs.org)
- Code blocks:

\`\`\`js
console.log('Hello, world!');
\`\`\`

> Blockquote here
`

export const KnowledgesCreatePage = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const [fileName, setFileName] = useState('')
  const [opened, { toggle }] = useDisclosure()

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${fileName}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    URL.revokeObjectURL(url)
  }

  const handleChangeMarkdown = debounce(
    ({
      target: { name, value },
    }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      switch (name) {
        case 'markdown':
          setMarkdown(value)
          break
        case 'fileName':
          setFileName(value)
          break
      }
    },
    500,
    { trailing: true },
  )

  return (
    <Grid gutter="xs">
      <GridCol span={3}>
        <Input
          placeholder="File name"
          name="fileName"
          onChange={handleChangeMarkdown}
        />
      </GridCol>

      <GridCol span={6}>
        <Button onClick={handleDownload}>Create</Button>
      </GridCol>

      <GridCol span={opened ? 6 : 12} pos="relative">
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
          onChange={handleChangeMarkdown}
          minRows={30}
          maxRows={30}
          name="markdown"
        />
      </GridCol>

      {opened && (
        <GridCol span={6}>
          <ScrollArea h={650}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {markdown}
            </ReactMarkdown>
          </ScrollArea>
        </GridCol>
      )}
    </Grid>
  )
}
