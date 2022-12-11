import { use } from 'react'
import { fetchPostDetailPageQuery } from '@app/posts/[postId]/fetchPostDetailPageQuery'

const Head = ({ params }: { params: { postId: string } }) => {
  const data = use(fetchPostDetailPageQuery(params.postId))

  return (
    <>
      <title>{data?.post.title}</title>
      <meta name={'description'} content={data?.post.content} />
    </>
  )
}

export default Head
