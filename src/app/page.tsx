import { Inter } from 'next/font/google'
import Login from './auth/page'
import Profile from './auth/profile/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Profile  />
  )
}
