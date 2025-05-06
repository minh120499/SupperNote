import { Link } from '@tanstack/react-router'
import { MenuComponent } from './ui/MenuComponent'
import MailOutlinedIcon from './icons/MailOutlinedIcon'
import type { MenuComponentItemType } from './ui/MenuComponent'

const items: Array<MenuComponentItemType> = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <MailOutlinedIcon />,
  },
  {
    label: <Link to="/knowledge">Knowledge</Link>,
    key: 'knowledge',
    icon: <MailOutlinedIcon />,
  },
  {
    label: <Link to="/about_us">About us</Link>,
    key: 'aboutU  s',
    icon: <MailOutlinedIcon />,
  },
]

export const NavBar = () => {
  return (
    <div>
      <MenuComponent items={items} />
      {/* <p>Nav nè</p>
      <Link to="/">Home</Link>
      <Link to="/knowledge">Knowledge</Link>
      <Link to="/about_us">About us</Link> */}
    </div>
  )
}
