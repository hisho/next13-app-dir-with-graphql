import type { GraphQLError } from 'graphql/error'
import { isNotUndefined } from 'typesafe-utils'
import { z } from 'zod'

const schema = z
  .object({
    code: z.literal('BAD_USER_INPUT'),
    response: z.object({
      message: z
        .object({
          key: z.string(),
          messages: z.string().array(),
        })
        .array(),
    }),
  })
  .transform(({ response }) => {
    return response.message
  })

export const parsedCustomGraphqlErrors = (errors: GraphQLError[]) => {
  return errors
    .map(({ extensions }) => {
      const parsedError = schema.safeParse(extensions)

      if (parsedError.success) {
        return parsedError.data
      }
      return undefined
    })
    .filter(isNotUndefined)
    .flat()
}

export type ParsedCustomGraphqlErrorsResult = ReturnType<
  typeof parsedCustomGraphqlErrors
>
