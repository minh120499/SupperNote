import { LinkComponent } from '@/components/ui/LinkComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <LinkComponent to="/travels/foods">Food</LinkComponent>
      <LinkComponent to="/travels/coffees">Coffee</LinkComponent>
    </>
  )
}
