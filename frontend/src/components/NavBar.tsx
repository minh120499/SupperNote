import { Link } from '@tanstack/react-router'
import {
  BookOutlined,
  HomeOutlined,
  IdcardOutlined,
  MoonFilled,
  SunFilled,
} from '@ant-design/icons'
import { Card, Flex, Menu, Switch, Typography } from 'antd'
import styled from 'styled-components'
import type { MenuProps } from 'antd'
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
    key: 'aboutUs',
    icon: <IdcardOutlined />,
  },
]

export const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useAppContextStore()

  return (
    <StyledCard style={{ borderRadius: 0, padding: 0 }}>
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
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  .ant-card-body {
    border-radius: 0;
    padding: 0;
  }
`
