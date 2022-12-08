import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={'bg-base-200'}>
      <div className="footer footer-center text-base-content rounded max-w-3xl p-10 px-4 mx-auto">
        <div className="grid grid-flow-col gap-4">
          <Link href={'/'} className="link link-hover">
            Top
          </Link>
          <Link href={'/posts'} className="link link-hover">
            Posts
          </Link>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Hisho</p>
        </div>
      </div>
    </footer>
  )
}
