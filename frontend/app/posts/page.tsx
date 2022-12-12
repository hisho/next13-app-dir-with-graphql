import { PostCard } from '@src/feature/post/PostCard/PostCard'
import Link from 'next/link'
import { PostsPageQueryDocument } from '@app/posts/postsPage.generated'
import { use } from 'react'
import { createGraphQLClient } from '@src/util/createGraphQLClient/createGraphQLClient'

const fetchPostsPageQuery = () => {
  return createGraphQLClient()
    .request(PostsPageQueryDocument)
    .then((data) => data)
}

const Page = () => {
  const { posts } = use(fetchPostsPageQuery())

  return (
    <div className={'py-10'}>
      <h1 className={'text-2xl font-bold'}>投稿</h1>
      <div className={'h-4'} aria-hidden />
      <ul className={'grid grid-cols-2 gap-x-2 gap-y-4'}>
        {posts.map((post) => (
          <li key={`Posts_${post.id}`}>
            <Link
              href={`/posts/${post.id}`}
              className={'transition-opacity hover:opacity-75'}
            >
              <PostCard post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
