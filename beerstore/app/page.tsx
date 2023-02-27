
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
import Cards from '@/components/Cards'
import { DesignSystemProvider } from '@ao-internal/components-react';
export default function Home() {
  
  return (
    
      <main className={styles.main}>
        <Cards />
      </main>
   
  )
}
