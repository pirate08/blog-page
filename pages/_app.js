import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Information Stock</title>
      </Head>
      <div>
       <Component {...pageProps} />
      </div>
    </div>
  )
}
