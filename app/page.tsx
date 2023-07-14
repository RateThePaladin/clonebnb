import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import house from '../public/house.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Clonebnb</h1>
      <Image src="/../public/house.png" width={576} height={324} alt="house"></Image>
      <Link href={`/listings` }>
      <h2 className={styles.description}>Check Availability</h2>
      </Link>
      
    </main>
  )
}
