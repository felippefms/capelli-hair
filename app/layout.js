'use client'

import { Montserrat } from 'next/font/google'
import './globals.css'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

import { checkIsPrivateRoute } from './api/appRoutes'
import PrivateRoute from './api/privateRoute'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

// export const metadata = {
//   title: 'Capelli Hair',
//   description: 'Capelli Hair',
// }

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const isPublicPage = checkIsPrivateRoute(pathName);

    return (
      <html lang="pt-br">
          <Script src="https://apis.google.com/js/platform.js" async defer></Script>
          <meta name="google-signin-client_id" content="663251853476-1q6mbc6l62mjl4lajeqopsq5a4v6e3qo.apps.googleusercontent.com"></meta>

        <body className={montserrat.className}>
          {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </body>
      </html>
    )
}
