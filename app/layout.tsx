import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Make me a Coffee',
  description: 'Developed by some-earth11',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
