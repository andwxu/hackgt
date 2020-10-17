import styles from '../../styles/Restaurant.module.css'
import { useSpring, animated } from 'react-spring';
import Link from 'next/link'

export default function Restaurant() {
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

    return (
        <div>
            <main className={styles.main}>
                <animated.h1 style={welcome_spring} className={styles.welcome}>Restaurants</animated.h1>
            </main>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <img className={styles.card_img} src="/ecco.jpeg" />
                    <h1 className={styles.card_text}>Ecco</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$$$ | Italian | 1.4 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 5:30 PM - 10 PM</h1>
                </div>
                <div className={styles.card}>
                    <img className={styles.card_img} src="/five.jpeg" />
                    <h1 className={styles.card_text}>Five Daughter's Bakery</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$ | Donuts | 0.8 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 8 AM - 8 PM</h1>
                </div>
                
                <div className={styles.card}>
                    <img className={styles.card_img} src="/chicken.png" />
                    <h1 className={styles.card_text}>Choong Man Chicken</h1>
                    <div className={styles.card_overlay}></div>
                </div>
            </div>
            <div className={styles.bottom_nav}>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}
