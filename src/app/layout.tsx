import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider, ThemeScript } from '@/components/ThemeProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicolás Carranza - Computer Science Student & Full-Stack Developer',
  description: 'Personal blog and portfolio of Nicolás Carranza Arauna, Computer Science & Management student at St Andrews, showcasing projects, achievements, and insights in AI, fintech, and full-stack development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-[#faf8f5] via-[#f5f0e9] to-[#f0ebe3] dark:from-gray-950/80 dark:via-blue-950/30 dark:to-indigo-950/40">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
            <SpeedInsights />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
