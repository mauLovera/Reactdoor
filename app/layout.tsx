import '@/styles/globals.scss'

import Header from '@/components/layout/Header/Header'

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
