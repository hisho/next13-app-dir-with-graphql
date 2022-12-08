import { GraphQLClient } from 'graphql-request'
import { PostsDocument } from '@src/feature/post/posts/posts.generated'

export const fetchPosts = async () => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return await new GraphQLClient('http://localhost:4000/graphql')
    .request(PostsDocument)
    .then((data) => data.posts)
}

export type FetchPostsResult = Awaited<ReturnType<typeof fetchPosts>>
