import '../styles/globals.css'
import '../styles/app.css';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import constants from '../helper/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MyContextProvider } from '../contexts/MyContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    // トークンが存在しない場合、ログインページにリダイレクト
    if (!token && (router.pathname !== '/login' && router.pathname !== '/register'))
    {
      router.push('/login');
    }
    // トークンがある場合メール一覧ページにリダイレクト
    else if (token && (router.pathname == '/login' || router.pathname == '/register'))
    {
      router.push('/mail');
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>{ constants.title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MyContextProvider>
          <Component {...pageProps} />
        </MyContextProvider>
      </main>
    </div>
  )
}

export default MyApp
