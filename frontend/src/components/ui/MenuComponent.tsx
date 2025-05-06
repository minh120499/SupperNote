import { useState } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

export type MenuComponentItemType = Required<MenuProps>['items'][number]

interface MenuComponentProps {
  items: Array<MenuComponentItemType>
  mode?: 'horizontal' | 'vertical' | 'inline'
}

export const MenuComponent = ({ items, mode }: MenuComponentProps) => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode={mode || 'horizontal'}
      items={items}
    />
  )
}
