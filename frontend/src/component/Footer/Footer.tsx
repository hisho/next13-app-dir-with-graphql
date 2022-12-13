import { Link } from '@src/component/Link/Link'
import { formatDate } from '@src/util/date/formatDate'

export const Footer = () => {
  return (
    <footer className={'bg-base-200'}>
      <div className="footer footer-center text-base-content rounded max-w-3xl p-10 px-4 mx-auto">
        <div className="grid grid-flow-col gap-4">
          <Link href={(path) => path.$url()} className="link link-hover">
            Top
          </Link>
          <Link href={(path) => path.posts.$url()} className="link link-hover">
            Posts
          </Link>
          <Link
            href={(path) => path.user.posts.$url()}
            className="link link-hover"
          >
            User Posts
          </Link>
        </div>
        <div>
          <p>
            Copyright © {formatDate(new Date(), 'yyyy')} - All right reserved by
            Hisho
          </p>
        </div>
      </div>
    </footer>
  )
}
