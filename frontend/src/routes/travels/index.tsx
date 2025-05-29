import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to="/travels/foods">Go to Foods</Link>
    </div>
  )
}
