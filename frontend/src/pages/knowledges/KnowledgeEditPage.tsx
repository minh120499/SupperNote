import {
  ActionIcon,
  Button,
  Grid,
  GridCol,
  Input,
  ScrollArea,
  Textarea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBook } from '@tabler/icons-react'
import { useParams } from '@tanstack/react-router'
import { debounce } from 'lodash'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'

import ReactMarkdown from 'react-markdown'

import { englishUnits } from '@/data/english/englishUnitListData'
import { appRouter } from '@/main'
import type { CategoryType } from '@/types/AppType'

interface KnowledgeEditPageProps {
  category: CategoryType
}

export const KnowledgeEditPage = ({ category }: KnowledgeEditPageProps) => {
  const { unit } = useParams({ strict: false })
  const file = `/src/docs/${category}/${unit}.md`
  const content = englishUnits[file]

  const [markdown, setMarkdown] = useState(content)
  const [fileName, setFileName] = useState(unit)
  const [opened, { toggle }] = useDisclosure(true)

  const handleDownload = async () => {
    try {
      const options = {
        suggestedName: `${fileName}.md`,
        types: [
          {
            description: 'Markdown file',
            accept: { 'text/markdown': ['.md'] },
          },
        ],
      }

      const handle = await (window as any).showSaveFilePicker(options)
      const writable = await handle.createWritable()
      await writable.write(markdown)
      await writable.close()

      appRouter.navigate({
        to: !unit ? '/knowledges/english/$unit' : '/knowledges/english',
        params: { unit },
      })
    } catch (error: any) {
      if (error?.name !== 'AbortError') {
        console.error('Lỗi khi lưu file:', error)
      }
    }
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

  useEffect(() => {})

  return (
    <Grid gutter="xs">
      <GridCol span={3}>
        <Input
          defaultValue={unit}
          placeholder="File name"
          name="fileName"
          onChange={handleChangeMarkdown}
          disabled
        />
      </GridCol>

      <GridCol span={6}>
        <Button onClick={handleDownload}>Save</Button>
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
          defaultValue={markdown}
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
