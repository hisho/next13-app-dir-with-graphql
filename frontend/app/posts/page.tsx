import { Posts } from '@src/feature/post/posts/Posts'
import { PostCard } from '@src/feature/post/PostCard/PostCard'
import Link from 'next/link'

const Page = () => {
  return (
    <div className={'py-10'}>
      <h1 className={'text-2xl font-bold'}>投稿</h1>
      <div className={'h-4'} aria-hidden />
      <Posts>
        {(posts) => (
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
        )}
      </Posts>
    </div>
  )
}

export default Page
