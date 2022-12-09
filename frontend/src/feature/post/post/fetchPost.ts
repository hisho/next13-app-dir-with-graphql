import { GraphQLClient } from 'graphql-request'
import { PostDocument } from '@src/feature/post/post/post.generated'
import type { Post } from '@src/lib/graphql/graphql.type'
import { NEXT_PUBLIC_GRAPHQL_URL } from '@src/constant/env'

export type FetchPostParams = {
  postId: Post['id']
}

export const fetchPost = async ({ postId }: FetchPostParams) => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return await new GraphQLClient(NEXT_PUBLIC_GRAPHQL_URL)
    .request(PostDocument, { postId })
    .then((data) => data.post)
}

export type FetchTodoResult = Awaited<ReturnType<typeof fetchPost>>
