import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/programming/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/knowledge/programmings"!</div>
}
