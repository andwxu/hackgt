import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const card1_spring = useSpring({
    to: {
        background: '#00ADD9',
    },
    from: { 
        background: '#c4c4c4',
    },
    delay: 300,
  });
  const card2_spring = useSpring({
    to: {
        background: '#00ADD9',
    },
    from: { 
        background: '#c4c4c4',
    },
    delay: 500,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Ordering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.img} src="/fulllogo.png" alt="My image" />

        <p className={styles.description}>
          Login
        </p>

        <div className={styles.food_overlay}></div>
        <img className={styles.food} src="/food.jpg"/>

        <div className={styles.grid}>
          <Link href="/nav/home"><animated.a className={styles.card} style={card1_spring}>
            <h3>Here to order food &rarr;</h3>
            <p>Browse our selection of local restaurants</p>
          </animated.a></Link>

          <Link href="/nav/owner">
          <animated.a className={styles.card} style={card2_spring}>
            <h3>Here to manage a restaurant &rarr;</h3>
            <p>Check analytics of your local restaurant</p>
          </animated.a></Link>
        </div>
      </main>
    </div>
  )
}
