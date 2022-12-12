import { Link } from '@src/component/Link/Link'

export const Header = () => {
  return (
    <header className={'bg-base-200'}>
      <div className={'py-6 w-full max-w-3xl px-4 mx-auto'}>
        <div className={'flex items-center'}>
          <Link
            href={(path) => path.$url()}
            className={'link link-hover text-2xl uppercase'}
          >
            header
          </Link>
          <div aria-hidden className={'flex-1'} />
          <Link
            href={(path) => path.user.posts.new.$url()}
            className={'btn btn-primary'}
          >
            投稿
          </Link>
        </div>
      </div>
    </header>
  )
}
