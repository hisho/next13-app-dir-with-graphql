import { PostsDocument } from '@src/feature/post/posts/posts.generated'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'

export const fetchPosts = async () => {
  return await createGraphQLClient()
    .request(PostsDocument)
    .then((data) => data.posts)
}

export type FetchPostsResult = Awaited<ReturnType<typeof fetchPosts>>
