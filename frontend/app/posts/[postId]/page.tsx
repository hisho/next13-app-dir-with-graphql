import { use } from 'react'
import { NEXT_PUBLIC_GRAPHQL_URL } from '@src/constant/env'
import { PostPageQueryDocument } from '@app/posts/[postId]/postPage.generated'
import { notFound } from 'next/navigation'
import { GraphQLClient } from 'graphql-request'

const fetchPostsPageQuery = async (postId: string) => {
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

/**
 * TODO paramsのエラーハンドリング
 */
const Page = ({ params }: { params: { postId: string } }) => {
  const data = use(fetchPostsPageQuery(params.postId))

  if (data === undefined) {
    notFound()
  }

  return (
    <div className={'py-10'}>
      <div className={'h-4'} aria-hidden />
      <article>
        <h1>{data.post.title}</h1>
        <p>{data.post.content}</p>
      </article>
    </div>
  )
}

export default Page
