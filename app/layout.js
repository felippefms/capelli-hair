import { Montserrat } from 'next/font/google'
import './globals.css'

import NextAuthSessionProvider from '../providers/SessionProvider'

import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: 'Capelli Hair',
  description: 'Capelli Hair',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Script src="https://apis.google.com/js/platform.js" async defer></Script>
      <meta name="google-signin-client_id" content="663251853476-1q6mbc6l62mjl4lajeqopsq5a4v6e3qo.apps.googleusercontent.com"></meta>
      <body className={montserrat.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}
