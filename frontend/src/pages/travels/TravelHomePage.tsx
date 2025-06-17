import { Outlet } from '@tanstack/react-router'
import { LinkComponent } from '@/components/ui/LinkComponent'

export const TravelHomePage = () => {
  return (
    <div>
      <LinkComponent to="/travels/foods">Go to Foods</LinkComponent>
      <Outlet />
    </div>
  )
}
