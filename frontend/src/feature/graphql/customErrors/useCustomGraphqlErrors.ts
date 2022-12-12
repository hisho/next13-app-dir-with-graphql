import type { GraphQLError } from 'graphql'
import { useState } from 'react'
import type { Path } from 'react-hook-form'
import { parsedCustomGraphqlErrors } from '@src/feature/graphql/customErrors/parsedCustomGraphqlErrors'
import { findCustomGraphqlErrorsByKey } from '@src/feature/graphql/customErrors/findCustomGraphqlErrorsByKey'

export const useGraphQLErrors = <T>() => {
  const [errors, setErrors] = useState<GraphQLError[]>([])
  const resetErrors = () => setErrors([])

  /**
   * reactに依存していないので他の箇所で使う場合は外部切り出し
   */
  const findErrors = (key: Path<T>) => {
    const parsed = parsedCustomGraphqlErrors(errors)
    return findCustomGraphqlErrorsByKey(parsed, key)
  }

  /**
   * reactに依存していないので他の箇所で使う場合は外部切り出し
   */
  const findErrorMessages = (key: Path<T>) => {
    return findErrors(key).messages
  }

  return {
    errors,
    findErrorMessages,
    findErrors,
    resetErrors,
    setErrors,
  } as const
}
