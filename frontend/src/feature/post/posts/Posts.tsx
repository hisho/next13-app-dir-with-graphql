import { ReactNode, use } from 'react'
import {
  fetchPosts,
  FetchPostsResult,
} from '@src/feature/post/posts/fetchPosts'

type Props = {
  children: ReactNode | ((posts: FetchPostsResult) => ReactNode)
}

export const Posts = ({ children }: Props) => {
  const posts = use(fetchPosts())

  return <>{typeof children === 'function' ? children(posts) : children}</>
}
