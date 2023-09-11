import '../styles/globals.css'
import '../styles/app.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import constants from '../constants';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{ constants.title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
