import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/english')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/knowledge/english"!</div>
}
