import { Anchor, Breadcrumbs } from '@mantine/core'
import { Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import { LinkComponent } from '@/components/ui/LinkComponent'

export const Route = createFileRoute('/notes/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pathname } = useLocation()

  return (
    <>
      <Breadcrumbs>
        <LinkComponent to="/notes">Note</LinkComponent>
        {getAnchorPath(pathname)}
      </Breadcrumbs>
      <Outlet />
    </>
  )
}

const getAnchorPath = (pathName: string) => {
  if (pathName.startsWith('/notes/books')) {
    const bookId = Number(pathName.split('/notes/books/').pop())
    return [
      <LinkComponent to="/notes/books">Books</LinkComponent>,
      Number.isInteger(bookId) && <Anchor key={2}>{bookId}</Anchor>,
    ]
  }
}
