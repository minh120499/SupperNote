import { Anchor, Breadcrumbs } from '@mantine/core'
import { Outlet, createFileRoute, useLocation } from '@tanstack/react-router'
import { LinkComponent } from '@/components/ui/LinkComponent'

export const Route = createFileRoute('/travels/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  const { pathname } = useLocation()

  return (
    <>
      <Breadcrumbs>
        <LinkComponent to="/travels">Travels</LinkComponent>
        {getAnchorPath(pathname)}
      </Breadcrumbs>
      <Outlet />
    </>
  )
}

const getAnchorPath = (pathName: string) => {
  switch (pathName) {
    case '/travels/foods':
      return <Anchor>Foods</Anchor>
  }
}
