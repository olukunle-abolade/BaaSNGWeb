import './globals.css'

// ** Contexts
// import { AuthProvider } from '@/contexts/AuthContext'

// ** Store Imports
// ximport { Provider } from 'react-redux'

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
    // <Provider store={store}>
      // <AuthProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      // </AuthProvider>
    // </Provider>

  )
}
