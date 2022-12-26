import { PostCard } from '@src/feature/post/PostCard/PostCard'
import { Link } from '@src/component/Link/Link'
import { PostCardList } from '@src/feature/post/PostCardList/PostCardList'

const Page = async () => {
  return (
    <div className={'py-10'}>
      <h1 className={'text-2xl font-bold'}>投稿</h1>
      <div className={'h-4'} aria-hidden />
      <ul className={'grid grid-cols-2 gap-x-2 gap-y-4'}>
        <PostCardList>
          {({ posts }) =>
            posts.map((post) => (
              <li key={`Posts_${post.id}`}>
                <Link
                  href={(path) => path.user.posts.edit._postId(post.id).$url()}
                  className={'transition-opacity hover:opacity-75'}
                >
                  <PostCard post={post} />
                </Link>
              </li>
            ))
          }
        </PostCardList>
      </ul>
    </div>
  )
}

export default Page
