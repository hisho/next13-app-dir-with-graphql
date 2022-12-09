import type { PostCard_PostFragment } from '@src/feature/post/PostCard/PostCard.generated'

type Props = {
  post: PostCard_PostFragment
}

export const PostCard = ({ post }: Props) => {
  const { title, content } = post

  return (
    <div className={'card bg-base-200 h-full shadow-xl'}>
      <figure style={{ aspectRatio: '400/225' }} className={'bg-gray-500'}>
        <img src={'https://placeimg.com/400/225/arch'} alt={''} />
      </figure>
      <div className={'card-body'}>
        <h2 className={'card-title'}>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}
