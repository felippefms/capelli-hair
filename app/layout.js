'use client'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'

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
  const route = usePathname();
  console.log(route);
  
  if (true) {
    return (
      <html lang="pt-br">
        <body className={montserrat.className}>
          {isPublicPage && children}
        </body>
      </html>
    )
  } else {
    return (
      <html lang="pt-br">
        <body className={montserrat.className}>
          {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </body>
      </html>
    )
  }
}
