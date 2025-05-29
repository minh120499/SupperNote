import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from '@tanstack/react-router'
import { Anchor, type AnchorProps } from '@mantine/core'
import { forwardRef } from 'react'

type CombinedLinkProps = AnchorProps & RouterLinkProps

export const LinkComponent = forwardRef<HTMLAnchorElement, CombinedLinkProps>(
  (props, ref) => {
    return <Anchor component={RouterLink as any} ref={ref} {...props} />
  },
)

LinkComponent.displayName = 'LinkComponent'
