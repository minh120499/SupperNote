import { Anchor, Box, Breadcrumbs, Button } from '@mantine/core'
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
  switch (pathName) {
    case '/notes/books':
      return <Anchor>Books</Anchor>
  }
}
