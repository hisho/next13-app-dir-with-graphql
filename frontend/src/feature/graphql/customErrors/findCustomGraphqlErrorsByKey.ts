import type { ParsedCustomGraphqlErrorsResult } from '@src/feature/graphql/customErrors/parsedCustomGraphqlErrors'

/**
 * ParsedCustomGraphqlErrorsResultを受け取り、keyに該当するエラーを返す。
 * エラーが複数ある可能性があるので、messagesをマージして返す。
 *
 * @example
 * const errors = [
 *   {
 *    key: 'name',
 *    messages: ['nameは必須です', 'nameは3文字以上です']
 *   },
 *   {
 *    key: 'name',
 *    messages: ['nameはすでに存在します']
 *   },
 *  ]
 *  const result = findCustomGraphqlErrorsByKey(errors, 'name')
 *  //^? {key: 'name', messages: ['nameは必須です', 'nameは3文字以上です', 'nameはすでに存在します'] }
 */
export const findCustomGraphqlErrorsByKey = <T extends string>(
  errors: ParsedCustomGraphqlErrorsResult,
  key: T
): { key: string; messages: string[] } => {
  return errors
    .filter((n) => n.key === key)
    .reduce(
      (prevValue, currentValue) => {
        return {
          ...prevValue,
          messages: [...prevValue.messages, ...currentValue.messages],
        }
      },
      { key, messages: [] }
    )
}
