import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "./components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sulaiman Gide',
  description: 'Sulaiman Gide Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
