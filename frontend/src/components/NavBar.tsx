import { Link } from '@tanstack/react-router'
import {
  ActionIcon,
  Box,
  Flex,
  HoverCard,
  Tabs,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { Fragment } from 'react'
import type { JSX } from 'react'

interface MenuItems {
  label: JSX.Element | string
  key: string
  icon?: JSX.Element | string
  children?: Array<MenuItems>
}

const menus: Array<MenuItems> = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
  },
  {
    label: <Link to="/knowledges">Knowledge</Link>,
    key: 'knowledge',
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
    label: <Link to="/travels">Travel</Link>,
    key: 'travels',
  },
  {
    label: <Link to="/about_us">About us</Link>,
    key: 'aboutUs',
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
              {!menu.children ? (
                <Fragment key={menu.key}>{menu.label}</Fragment>
              ) : (
                <HoverCard key={menu.key}>
                  <HoverCard.Target>
                    <Box variant="transparent">Tài liệu</Box>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Flex direction="column" gap="sm">
                      {menu.children.map((child) => child.label)}
                    </Flex>
                  </HoverCard.Dropdown>
                </HoverCard>
              )}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <ActionIcon variant="default" onClick={toggleColorScheme} size="lg">
        {colorScheme === 'light' ? <IconMoon /> : <IconSun />}
      </ActionIcon>
    </Flex>
  )
}
