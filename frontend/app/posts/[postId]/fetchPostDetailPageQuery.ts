import { PostPageQueryDocument } from '@app/posts/[postId]/postPage.generated'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'

export const fetchPostDetailPageQuery = (postId: string) => {
  return createGraphQLClient()
    .request(PostPageQueryDocument, { postId })
    .then((data) => data)
    .catch(() => {
      return undefined
    })
}
