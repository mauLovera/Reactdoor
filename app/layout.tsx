import '@/styles/globals.scss'

import Header from '@/components/layout/Header/Header'
import { Lato } from '@next/font/google'

interface Props {
  children: React.ReactNode
}

/**
 * @next/font automatically chooses a fallback font that
 * will cause the least ammount of layout shift while the 
 * font is being loaded. 
 * 
 * the font is also self hosted which decreases the 
 * ammount of network requests that are made to retrieve
 * the font. 
 * 
 * https://nextjs.org/docs/basic-features/font-optimization
*/

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className={lato.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
