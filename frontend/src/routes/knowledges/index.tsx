import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
