import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

import '../styles/globals.css'
import Header from '@/Layout/Header'
import NextNProgress from 'nextjs-progressbar';


// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={roboto.className}>
    <NextNProgress color='blue' />
    <Header />
    <Component {...pageProps} />
  </div>
}
