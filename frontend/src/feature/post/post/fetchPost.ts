import { PostDocument } from '@src/feature/post/post/post.generated'
import type { Post } from '@src/lib/graphql/graphql.type'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'

export type FetchPostParams = {
  postId: Post['id']
}

export const fetchPost = async ({ postId }: FetchPostParams) => {
  return await createGraphQLClient()
    .request(PostDocument, { postId })
    .then((data) => data.post)
}

export type FetchTodoResult = Awaited<ReturnType<typeof fetchPost>>
