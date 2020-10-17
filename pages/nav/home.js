import styles from '../../styles/Welcome.module.css'
import { useSpring, animated } from 'react-spring';
import Link from 'next/link'

export default function Home() {
    const welcome_spring = useSpring({
        to: {
            opacity: 1,
            position: '-15px',
        },
        from: { 
            opacity: 0,
            position: '-5px',
        },
        delay: 100,
    });
    const name_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 300,
    });

    return (
        <div>
            <main className={styles.main}>
                <animated.h1 style={welcome_spring} className={styles.welcome}>Welcome</animated.h1>
                <animated.h1 style={name_spring} className={styles.welcome_name}>John Doe</animated.h1>
            </main>
            <div className={styles.content}>
                <div className={styles.search}>Search</div>
                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h3 className={styles.h3}>For you</h3>
                        <img className={styles.img} src="/momonoki.jpeg"></img>
                        <h1 className={styles.first_image}>Momonoki</h1>
                        <img className={styles.img} src="/publico.jpeg" />
                        <h1 className={styles.second_image}>Publico</h1>
                    </a>
                </div>
                <div className={styles.grid}>
                    <a className={styles.card}>
                        <h3 className={styles.h3}>Local Restaurants</h3>
                        <img className={styles.img} src="/ecco.jpeg"></img>
                        <h1 className={styles.first_image}>Ecco</h1>
                        <img className={styles.img} src="/five.jpeg" />
                        <h1 className={styles.second_image}>Five Daughter's Bakery</h1>
                    </a>
                </div>
                <Link href="/"><button>Logout</button></Link>
            </div>
            <div className={styles.bottom_nav}>
            </div>
        </div>
    )
}