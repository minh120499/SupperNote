import { Link } from '@tanstack/react-router'
import { BookOutlined, HomeOutlined, IdcardOutlined } from '@ant-design/icons'
import { Flex, Menu, Switch, Typography, type MenuProps } from 'antd'
import { useAppContextStore } from '@/stores/useAppContextStore'

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
    key: 'aboutU  s',
    icon: <IdcardOutlined />,
  },
]

export const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useAppContextStore()

  return (
    <Flex gap={8}>
      <Menu mode="horizontal" items={items} style={{ flexGrow: 1 }} />
      <Switch
        checkedChildren="1"
        unCheckedChildren="0"
        value={isDarkMode}
        onChange={toggleDarkMode}
      />
      <Typography>{isDarkMode + ''}</Typography>
    </Flex>
  )
}
