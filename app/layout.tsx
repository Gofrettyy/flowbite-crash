import './globals.css'

import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flowbite Crash',
  description: 'Flowbite crash course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <main className="container pt-10 pb-40 min-h-screen">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  )
}
