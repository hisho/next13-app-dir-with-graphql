import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
