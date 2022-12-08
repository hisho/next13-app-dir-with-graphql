import type { PostCard_PostFragment } from '@src/feature/post/PostCard/PostCard.generated'

type Props = {
  post: PostCard_PostFragment
}

export const PostCard = ({ post }: Props) => {
  const { title, content } = post

  return (
    <div className={'card bg-base-200 shadow-xl'}>
      <figure>
        <img src={'https://placeimg.com/400/225/arch'} alt={''} />
      </figure>
      <div className={'card-body'}>
        <h2 className={'card-title'}>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}
