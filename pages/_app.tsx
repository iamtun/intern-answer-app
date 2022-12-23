import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from '@/Layout/Header'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress color='blue'/>
    <Header />
    <Component {...pageProps} />
  </>
}
