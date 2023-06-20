'use client'

// ** Store Imports
import { store } from '@/store'

// ** Contexts
import { AuthProvider } from '@/contexts/AuthContext'

// ** Third Party
import { Provider } from 'react-redux'

interface ProvidersProps {
  children: React.ReactNode;
}


export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  )
}