'use client'

import { Montserrat } from 'next/font/google'
import './globals.css'

import { usePathname } from 'next/navigation'

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
        <body className={montserrat.className}>
          {isPublicPage && children}
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </body>
      </html>
    )
}
