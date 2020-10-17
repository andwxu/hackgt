import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const background_spring = useSpring({
    to: {
        background: "#00ADD9",
    },
    from: { 
        background: "#FFFFFF",
    },
    delay: 100,
  });

  return (
    <animated.div className={styles.container} style={background_spring}>
      <Head>
        <title>Ordering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.img} src="/junction.png" alt="My image" />

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
    </animated.div>
  )
}
