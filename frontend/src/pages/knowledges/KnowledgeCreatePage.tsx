import { Alert, Button, Grid, GridCol, Input } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import { debounce } from 'lodash'

import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { Markdown } from '@/components/Markdown'
import { handleSaveFile } from '@/utils/files'

const initialMarkdown =
  localStorage.getItem('markdown') ||
  `# Welcome to Markdown Editor

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

interface KnowledgesCreatePageProps {
  category: string
}

export const KnowledgesCreatePage = ({
  category,
}: KnowledgesCreatePageProps) => {
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const [fileName, setFileName] = useState('')

  const handleDownload = () => {
    handleSaveFile(markdown, `${fileName}.md`, 'text/markdown')
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
      localStorage.setItem('markdown', value)
    },
    500,
    { trailing: true },
  )

  return (
    <Grid gutter="xs" mt={12}>
      <GridCol>
        <Alert icon={<IconInfoCircle />}>
          Save in <b>/frontend/src/docs/{category}</b>
        </Alert>
      </GridCol>
      <GridCol span={4}>
        <Input
          placeholder="File name"
          name="fileName"
          onChange={handleChangeMarkdown}
        />
      </GridCol>

      <GridCol span={6}>
        <Button onClick={handleDownload}>Create</Button>
      </GridCol>

      <GridCol span={12}>
        <Markdown onChange={handleChangeMarkdown} content={markdown} />
      </GridCol>
    </Grid>
  )
}
