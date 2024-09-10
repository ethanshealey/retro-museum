import React95Wrapper from '@/components/React95Wrapper'
import './globals.scss'
import type { Metadata } from 'next'
import cameraIcon from '/public/static/images/camera-2.png'

export const metadata: Metadata = {
  title: 'Retro Museum | ethanshealey.com',
  description: 'A virtual museum of all the vintage and retro items I have collected over the years'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <React95Wrapper>
            {children}
          </React95Wrapper>
      </body>
    </html>
  )
}
