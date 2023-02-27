import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
import Test from '@/components/ApiTest'

export default function Home() {
 
  return (
    <main className={styles.main}>
      <Test />
    </main>
  )
}
