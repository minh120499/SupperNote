import { Card } from 'antd'
import styled from 'styled-components'

export const Box = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties | undefined
}) => {
  return <StyledCard style={style}>{children}</StyledCard>
}

const StyledCard = styled(Card)`
  border-radius: 0;
  .ant-card-body {
    padding: 0;
  }
`
