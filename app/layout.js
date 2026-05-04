import { ClerkProvider } from '@clerk/nextjs'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
})

export const metadata = {
  title: 'AI-My-Work | AI Writing Tools for Business',
  description: 'Stop Doing It All. Let AI Help. Six AI-powered writing tools built for small and mid-sized businesses.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
        <body className="font-sans bg-white text-black">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
