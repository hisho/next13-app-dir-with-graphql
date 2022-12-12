import { z } from 'zod'
import type { UrlObject } from 'url'

const resolveHrefSchema = z
  .object({
    pathname: z.string(),
    hash: z.string().optional(),
    query: z.record(z.string(), z.coerce.string()).default({}),
  })
  .transform((v) => {
    const queryMap = new Map<string, string>()
    Object.entries(v.query).forEach(([k, v]) => queryMap.set(k, v))

    const pathname = v.pathname
      .split('/')
      .map((path) => {
        if (path.startsWith('[') && path.endsWith(']')) {
          const sanitizePath = path.replace(/^\[(.+)]$/, '$1')
          if (queryMap.has(sanitizePath)) {
            const ss = queryMap.get(sanitizePath)
            queryMap.delete(sanitizePath)
            return ss
          }
          return ''
        }
        return path
      })
      .join('/')

    const searchParams = new URLSearchParams(
      Object.fromEntries(queryMap)
    ).toString()

    return `${pathname}${!!searchParams ? `?${searchParams}` : ''}${
      v.hash ? `#${v.hash}` : ''
    }`
  })

/**
 * urlObjectをhrefに変換する
 */
export const resolveHref = (urlObject: UrlObject) => {
  const parsedUrlObject = resolveHrefSchema.safeParse(urlObject)
  if (parsedUrlObject.success) {
    return parsedUrlObject.data
  }
  return ''
}
