import { GraphQLClient } from 'graphql-request'
import { PostDocument } from '@src/feature/post/post/post.generated'
import type { Post } from '@src/lib/graphql/graphql.type'

export type FetchTodoParams = {
  postId: Post['id']
}

export const fetchPost = async ({ postId }: FetchTodoParams) => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return await new GraphQLClient('http://localhost:4000/graphql')
    .request(PostDocument, { postId })
    .then((data) => data.post)
}

export type FetchTodoResult = Awaited<ReturnType<typeof fetchPost>>
