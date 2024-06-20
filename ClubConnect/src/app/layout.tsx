import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import NavLinks from '../components/navbar'

const roboto = Roboto_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className} style={{ backgroundColor: '#323437' }}>
        <div className='flex flex-col min-h-screen'>
          <NavLinks />
          <main className='flex-1 flex items-center justify-center'>{children}</main>
        </div>
      </body>
    </html>
  )
}
