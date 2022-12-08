import type { ReactNode } from 'react'
import '@app/globals.css'
import { Footer } from '@src/component/Footer/Footer'
import { Header } from '@src/component/Header/Header'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body className={'min-h-[100svh] flex flex-col'}>
        <Header />
        <main className={'flex-1 min-h-0'}>
          <div className={'w-full max-w-3xl px-4 mx-auto'}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
