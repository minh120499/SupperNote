import { Link } from '@tanstack/react-router'
import {
  BookOutlined,
  HomeOutlined,
  IdcardOutlined,
  MoonFilled,
  SunFilled,
} from '@ant-design/icons'
import { ActionIcon, Flex, Tabs, useMantineColorScheme } from '@mantine/core'
import type { JSX } from 'react'

interface MenuItems {
  label: JSX.Element | string
  key: string
  icon?: JSX.Element | string
  children?: MenuItems[]
}

const menus: MenuItems[] = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/knowledges">Knowledge</Link>,
    key: 'knowledge',
    icon: <BookOutlined />,
    children: [
      {
        label: <Link to="/knowledges/english">English</Link>,
        key: 'english',
      },
      {
        label: <Link to="/knowledges/programming">Programming</Link>,
        key: 'programming',
      },
    ],
  },
  {
    label: <Link to="/about_us">About us</Link>,
    key: 'aboutUs',
    icon: <IdcardOutlined />,
  },
]

export const NavBar = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()

  return (
    <Flex direction="row" gap="md" justify="space-between">
      <Tabs defaultValue="first">
        <Tabs.List>
          {menus.map((menu) => (
            <Tabs.Tab key={menu.key} value={menu.key}>
              {menu.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <ActionIcon variant="default" onClick={toggleColorScheme} size="lg">
        {colorScheme === 'light' ? <MoonFilled /> : <SunFilled />}
      </ActionIcon>
    </Flex>
  )
}
