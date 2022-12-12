import type { UpdatePostInput } from '@src/lib/graphql/graphql.type'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'
import { UpdatePostDocument } from '@src/feature/post/updatePost/updatePost.generated'

type Params = UpdatePostInput

export const updatePostMutation = (postId: string, input: Params) => {
  return createGraphQLClient().request(UpdatePostDocument, { postId, input })
}
