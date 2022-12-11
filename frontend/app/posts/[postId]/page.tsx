import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { formatDate } from '@src/util/date/formatDate'
import { fetchPostDetailPageQuery } from '@app/posts/[postId]/fetchPostDetailPageQuery'

/**
 * TODO paramsのエラーハンドリング
 */
const Page = ({ params }: { params: { postId: string } }) => {
  const data = use(fetchPostDetailPageQuery(params.postId))

  if (data === undefined) {
    notFound()
  }

  return (
    <div className={'py-10 flex-1 min-h-0'}>
      <div className={'h-4'} aria-hidden />
      <article>
        <h1 className={'text-4xl font-bold'}>{data.post.title}</h1>
        <div className={'h-2'} aria-hidden />
        <time
          dateTime={formatDate(
            new Date(data.post.updatedAt),
            'yyyy-MM-dd HH:mm'
          )}
        >
          {formatDate(new Date(data.post.updatedAt), 'yyyy月MM日dd HH時mm分')}
        </time>
        <div className={'h-4'} aria-hidden />
        <ol className={'flex gap-2'}>
          {data.post.tags.map((tag) => (
            <li key={`tag_${tag.id}`}>
              <span className={'badge badge-outline'}>{tag.name}</span>
            </li>
          ))}
        </ol>
        <div className={'h-4'} aria-hidden />
        <p>{data.post.content}</p>
      </article>
      <div className={'h-4'} />
      <div className={'flex justify-center'}>
        <Link className={'link link-hover'} href={'/posts'}>
          一覧に戻る
        </Link>
      </div>
    </div>
  )
}

export default Page
