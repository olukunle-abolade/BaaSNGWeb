import './globals.css'

// ** Third Party
import { Toaster } from 'react-hot-toast'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

export const metadata = {
  title: 'Baas',
  description: 'Fintech Application',
  icons: {
    icon: {
      url: "/favicon.png",
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
          <head>
            <link rel="apple-touch-icon" href="/apple-icon.png" sizes="32x32" />
          </head>
          <body>
            <Providers>
              <Toaster />
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </Providers>
          </body>
        </html>

  )
}
