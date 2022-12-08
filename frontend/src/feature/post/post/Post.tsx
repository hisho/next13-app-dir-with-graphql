import { use } from 'react'
import { fetchPost, FetchTodoParams } from '@src/feature/post/post/fetchPost'

type Props = FetchTodoParams

export const Post = ({ todoId }: Props) => {
  const post = use(fetchPost({ todoId }))

  return (
    <div>
      <div>{post.title}</div>
      <div>の詳細だよ</div>
    </div>
  )
}
