import { Anchor } from '@mantine/core'
import type { AnchorProps } from '@mantine/core'
import { Link as RouterLink } from '@tanstack/react-router'
import type { LinkProps as RouterLinkProps } from '@tanstack/react-router'

import { forwardRef } from 'react'

type CombinedLinkProps = AnchorProps & RouterLinkProps

export const LinkComponent = forwardRef<HTMLAnchorElement, CombinedLinkProps>(
  (props, ref) => {
    return <Anchor component={RouterLink as any} ref={ref} {...props} />
  },
)

LinkComponent.displayName = 'LinkComponent'
