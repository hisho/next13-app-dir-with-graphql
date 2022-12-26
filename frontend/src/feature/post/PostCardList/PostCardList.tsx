import { ErrorBoundary } from '@src/component/ErrorBoundary/ErrorBoundary'
import { ReactNode, Suspense, use } from 'react'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'
import {
  PostCardListQueryDocument,
  PostCardListQueryQuery,
} from '@src/feature/post/PostCardList/PostCardListQuery.generated'
import { PostCardListError } from '@src/feature/post/PostCardList/PostCardListError'

const fetchPostCardListQuery = () => {
  return createGraphQLClient()
    .request(PostCardListQueryDocument)
    .then((data) => data)
}

type Props = {
  children: (data: PostCardListQueryQuery) => ReactNode
}

const Fetch = ({ children }: Props) => {
  const data = use(fetchPostCardListQuery())
  return <>{children(data)}</>
}

export const PostCardList = ({ children }: Props) => {
  return (
    <ErrorBoundary Fallback={PostCardListError}>
      <Suspense fallback={<div>loading...</div>}>
        <Fetch children={children} />
      </Suspense>
    </ErrorBoundary>
  )
}
