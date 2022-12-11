import { GraphQLClient } from 'graphql-request'
import { NEXT_PUBLIC_GRAPHQL_URL } from '@src/constant/env'
import { PostPageQueryDocument } from '@app/posts/[postId]/postPage.generated'

export const fetchPostDetailPageQuery = async (postId: string) => {
  /**
   * TODO: new GraphQLClientを切り出す
   */
  return await new GraphQLClient(NEXT_PUBLIC_GRAPHQL_URL)
    .request(PostPageQueryDocument, { postId })
    .then((data) => data)
    .catch(() => {
      return undefined
    })
}
