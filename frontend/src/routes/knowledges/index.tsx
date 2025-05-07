import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Navigate to={'/knowledges/english'} />
}
