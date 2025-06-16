import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/notes/_pathlessLayout/books/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/notes/_pathlessLayout/books/$id"!</div>
}
