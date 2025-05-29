import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/_pathlessLayout/foods/')({
  component: FoodsPage,
})

function FoodsPage() {
  return (
    <div>
      <h2>Foods Page</h2>
      <Link to="/travels/foods/test">Go to Test</Link>
      <Outlet />
    </div>
  )
}
