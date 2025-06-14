import { useState } from 'react'
import { Button, Grid, GridCol, Input } from '@mantine/core'
import { debounce } from 'lodash'
import type { ChangeEvent } from 'react'
import { Markdown } from '@/components/Markdown'

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

      <Markdown onChange={handleChangeMarkdown} content={markdown} />
    </Grid>
  )
}
