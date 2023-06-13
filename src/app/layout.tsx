'use client'

import './globals.css'

// ** Contexts
import { AuthProvider } from '@/contexts/AuthContext'

// ** Store Imports
import { store } from '@/store'
import { Provider } from 'react-redux'

// ** Third Party
import { Toaster } from 'react-hot-toast'
import StyledComponentsRegistry from '@/lib/registry'

//


// export const metadata = {
//   title: 'Baas',
//   description: 'Fintech Application',
//   icons: {
//     icon: {
//       url: "/favicon.png",
//     },
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <html lang="en">
          <head>
            <link rel="apple-touch-icon" href="/apple-icon.png" sizes="32x32" />
          </head>
          <body>
            <Toaster />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
       </AuthProvider>
    </Provider>

  )
}
