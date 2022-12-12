import NextLink from 'next/link'
import type { ComponentProps } from 'react'
import type { UrlObject } from 'url'
import type { PagesPath } from '@src/lib/pathpida/$path'
import { pagesPath } from '@src/lib/pathpida/$path'
import { resolveHref } from '@src/util/resolveHref/resolveHref'

type Props = Pick<ComponentProps<'a'>, 'className' | 'children'> & {
  href: ((path: PagesPath) => UrlObject) | UrlObject
}

export const Link = ({ href, children, ...props }: Props) => {
  const _href = typeof href === 'function' ? href(pagesPath) : href

  return (
    <NextLink href={resolveHref(_href)} {...props}>
      {children}
    </NextLink>
  )
}
