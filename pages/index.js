import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ordering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Name Placeholder
        </h1>

        <p className={styles.description}>
          Login
        </p>

        <div className={styles.grid}>
          <Link href="/nav/home"><a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Here to order food &rarr;</h3>
            <p>Browse our selection of local restaurants</p>
          </a></Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Here to manage a restaurant &rarr;</h3>
            <p>Check analytics of your local restaurant</p>
          </a>
        </div>
      </main>
    </div>
  )
}
