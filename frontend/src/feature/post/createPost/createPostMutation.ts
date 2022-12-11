import { CreatePostDocument } from '@src/feature/post/createPost/createPost.generated'
import type { CreatePostInput } from '@src/lib/graphql/graphql.type'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'

type Params = CreatePostInput

export const createPostMutation = (input: Params) => {
  return createGraphQLClient().request(CreatePostDocument, { input })
}
