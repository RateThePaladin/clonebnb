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
      <img src="https://raw.githubusercontent.com/RateThePaladin/clonebnb/main/public/house.png" width={490} height={275} alt="house"></img>
      <Link href={`/listings` }>
      <h2 className={styles.description}>Check Availability</h2>
      </Link>
      
    </main>
  )
}
