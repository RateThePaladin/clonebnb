import './globals.css'
import Link from 'next/link'
import Styles from './page.module.css'

export const metadata = {
  title: 'Clonebnb',
  description: 'Clonebnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className={Styles.nav}>
          <Link href="/" className={Styles.navItem}>Home</Link>
          <Link href="/about" className={Styles.navItem}>About</Link>
          <Link href="/listings" className={Styles.navItem}>Listings</Link>
          {/* <h1>Clonebnb</h1> */}
        </nav>
        {children}
        </body>
    </html>
  )
}
