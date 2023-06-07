import { Source_Sans_3 } from 'next/font/google'
import './globals.scss'

const sourceSans = Source_Sans_3({
  variable: '--default-font',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>{children}</body>
    </html>
  )
}
