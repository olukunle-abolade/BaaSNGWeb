import { Inter } from 'next/font/google'
import Login from './auth/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Login />
  )
}
