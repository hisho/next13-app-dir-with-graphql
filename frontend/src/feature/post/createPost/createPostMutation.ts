import { GraphQLClient } from 'graphql-request'
import { CreatePostDocument } from '@src/feature/post/createPost/createPost.generated'
import { NEXT_PUBLIC_GRAPHQL_URL } from '@src/constant/env'
import type { CreatePostInput } from '@src/lib/graphql/graphql.type'

type Params = CreatePostInput

export const createPostMutation = (input: Params) => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return new GraphQLClient(NEXT_PUBLIC_GRAPHQL_URL).request(
    CreatePostDocument,
    { input }
  )
}
