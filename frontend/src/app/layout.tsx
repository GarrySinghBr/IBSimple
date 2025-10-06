import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'IBSimple',
  description: 'Help people with IBS and SIBO quickly assess the FODMAP impact of foods and recipes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
