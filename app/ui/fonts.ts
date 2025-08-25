import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'
import { Caveat } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ 
  subsets: ['latin'],
  weight: ['400', '700']
})
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400']
})