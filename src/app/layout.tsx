
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
