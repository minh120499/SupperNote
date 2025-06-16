import { useState } from 'react'
import { Button, Grid, GridCol, Input } from '@mantine/core'
import { debounce } from 'lodash'
import type { ChangeEvent } from 'react'
import { Markdown } from '@/components/Markdown'
import { handleSaveFile } from '@/utils/files'

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

      <Markdown onChange={handleChangeMarkdown} content={markdown} />
    </Grid>
  )
}
