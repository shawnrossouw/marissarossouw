import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Marissa Rossouw Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Marissa Rossouw
        </h1>
      </main>
    </div>
  )
}
