import { Inter } from 'next/font/google'
import Homepg from './homepg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Homepg />
    </>
  )
}
