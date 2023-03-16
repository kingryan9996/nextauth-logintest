import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react';
import Nav from './src/component/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <SessionProvider session={pageProps.session}>
    <Nav/>
    <Component {...pageProps} />
    </SessionProvider>
  )
}
