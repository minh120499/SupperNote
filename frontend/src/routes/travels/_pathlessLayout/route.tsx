import { LinkComponent } from '@/components/ui/LinkComponent'
import { Anchor, Breadcrumbs } from '@mantine/core'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Breadcrumbs>
        <Anchor>
          <LinkComponent to="/travels">Travels</LinkComponent>
        </Anchor>
      </Breadcrumbs>
      <Outlet />
    </div>
  )
}
