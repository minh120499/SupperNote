import { Link } from '@tanstack/react-router'
import {
  BookOutlined,
  HomeOutlined,
  IdcardOutlined,
  MoonFilled,
  SunFilled,
} from '@ant-design/icons'
import { Flex, Menu, Switch, Typography } from 'antd'
import type { MenuProps } from 'antd'
import { useAppContextStore } from '@/stores/useAppContextStore'
import { Box } from './ui/Box'

type MenuItem = Required<MenuProps>['items'][number]

const items: Array<MenuItem> = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Knowledge',
    key: 'knowledge',
    icon: <BookOutlined />,
    children: [
      {
        type: 'item',
        label: <Link to="/knowledges/english">English</Link>,
        key: 'english',
      },
      {
        type: 'item',
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
  const { isDarkMode, toggleDarkMode } = useAppContextStore()

  return (
    <Box>
      <Flex gap={8} style={{ padding: 0 }}>
        <Menu mode="horizontal" items={items} style={{ flexGrow: 1 }} />
        <Switch
          checkedChildren={<MoonFilled />}
          unCheckedChildren={<SunFilled />}
          value={isDarkMode}
          onChange={toggleDarkMode}
        />
        <Typography>{isDarkMode + ''}</Typography>
      </Flex>
    </Box>
  )
}
