'use client'

import { UpdatePostForm } from '@src/feature/post/updatePost/UpdatePostForm'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'
import { UserPostEditPageQueryDocument } from '@app/user/post/edit/[postId]/userPostEdit.generated'
import { use } from 'react'

const fetcher = (postId: string) => {
  return createGraphQLClient()
    .request(UserPostEditPageQueryDocument, { postId })
    .then((data) => data)
    .catch(() => undefined)
}

const page = ({ params }: { params: { postId: string } }) => {
  const data = use(fetcher(params.postId))

  if (data === undefined) {
    return <div>投稿は存在しません。</div>
  }

  return (
    <div>
      <UpdatePostForm post={data.post} />
    </div>
  )
}

export default page
