import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>_pathlessLayout</h1>
      <Link to="/travels/foods">Go to Foods</Link>
      <Outlet />
    </div>
  )
}
