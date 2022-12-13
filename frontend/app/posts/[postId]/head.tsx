import { fetchPostDetailPageQuery } from '@app/posts/[postId]/fetchPostDetailPageQuery'

const Head = async ({ params }: { params: { postId: string } }) => {
  const data = await fetchPostDetailPageQuery(params.postId)

  return (
    <>
      <title>{data?.post.title}</title>
      <meta name={'description'} content={data?.post.content} />
    </>
  )
}

export default Head
