import { use } from 'react'
import { fetchPost, FetchPostParams } from '@src/feature/post/post/fetchPost'

type Props = FetchPostParams

export const Post = ({ postId }: Props) => {
  const post = use(fetchPost({ postId }))

  return (
    <div>
      <div>{post.title}</div>
      <div>の詳細だよ</div>
    </div>
  )
}
