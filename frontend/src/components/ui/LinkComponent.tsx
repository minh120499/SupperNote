import { Link as RouterLink } from '@tanstack/react-router'
import { Anchor } from '@mantine/core'
import { forwardRef } from 'react'
import type { LinkProps as RouterLinkProps } from '@tanstack/react-router'
import type { AnchorProps } from '@mantine/core'

type CombinedLinkProps = AnchorProps & RouterLinkProps

export const LinkComponent = forwardRef<HTMLAnchorElement, CombinedLinkProps>(
  (props, ref) => {
    return <Anchor component={RouterLink as any} ref={ref} {...props} />
  },
)

LinkComponent.displayName = 'LinkComponent'
