import { GraphQLClient } from 'graphql-request'
import { NEXT_PUBLIC_GRAPHQL_URL } from '@src/constant/env'

type Options = {}

/**
 * GraphQLのクライアントを作成する
 * TODO optionsの設定を書く
 * TODO `new GraphQLClient(NEXT_PUBLIC_GRAPHQL_URL)request()`もこの関数に含めてPromise<T>を返すようにする
 */
export const createGraphQLClient = (_options: Partial<Options> = {}) => {
  return new GraphQLClient(NEXT_PUBLIC_GRAPHQL_URL)
}
