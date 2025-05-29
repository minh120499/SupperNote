import { LinkComponent } from '@/components/ui/LinkComponent'
import { Outlet } from '@tanstack/react-router'

export const TravelHomePage = () => {
  return (
    <div>
      <LinkComponent to="/travels/foods">Go to Foods</LinkComponent>
      <Outlet />
    </div>
  )
}
