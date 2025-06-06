import {
  ActionIcon,
  Anchor,
  Box,
  Flex,
  HoverCard,
  NavLink,
  Tabs,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { Fragment } from 'react'
import type { JSX } from 'react'
import { LinkComponent } from './ui/LinkComponent'

interface MenuItems {
  label: JSX.Element | string
  key: string
  icon?: JSX.Element | string
  children?: Array<MenuItems>
}

const menus: Array<MenuItems> = [
  {
    label: <LinkComponent to="/">Home</LinkComponent>,
    key: 'home',
  },
  {
    label: <LinkComponent to="/knowledges">Knowledge</LinkComponent>,
    key: 'knowledge',
    children: [
      {
        label: <LinkComponent to="/knowledges/english">English</LinkComponent>,
        key: 'english',
      },
      {
        label: (
          <LinkComponent to="/knowledges/programming">
            Programming
          </LinkComponent>
        ),
        key: 'programming',
      },
    ],
  },
  {
    label: <LinkComponent to="/travels">Travel</LinkComponent>,
    key: 'travels',
  },
  {
    label: <LinkComponent to="/notes">Note</LinkComponent>,
    key: 'notes',
  },
  {
    label: <LinkComponent to="/about_us">About us</LinkComponent>,
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
                    <Anchor>Knowledges</Anchor>
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
