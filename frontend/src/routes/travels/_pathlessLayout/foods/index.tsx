import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/_pathlessLayout/foods/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/travels/_pathlessLayout/foods/"!</div>
}
