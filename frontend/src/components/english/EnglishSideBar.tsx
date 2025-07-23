import { Container, Paper, TableOfContents } from '@mantine/core'
import { useParams } from '@tanstack/react-router'

export const EnglishSideBar = () => {
  const { unit: currentUnit } = useParams({ strict: false })

  return (
    <>
      <Container size="md" style={{ display: 'flex', gap: 40 }}>
        <Paper
          withBorder
          p="md"
          mah="80vh"
          style={{ position: 'sticky', top: 40, overflow: 'auto' }}
        >
          <TableOfContents
            key={currentUnit}
            variant="filled"
            color="blue"
            size="sm"
            radius="sm"
            scrollSpyOptions={{
              selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
            }}
            getControlProps={({ data }) => ({
              onClick: () =>
                data.getNode().scrollIntoView({ behavior: 'smooth' }),
              children: data.value,
            })}
          />
        </Paper>
      </Container>
    </>
  )
}
