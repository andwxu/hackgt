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
    const card1_spring = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '-15px',
        },
        delay: 300,
    });
    const card2_spring = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '-15px',
        },
        delay: 500,
    });
    const card3_spring = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '-15px',
        },
        delay: 700,
    });
    const card4_spring = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '-15px',
        },
        delay: 900,
    });
    const card5_spring = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '-15px',
        },
        delay: 1100,
    });
    const card6_spring = useSpring({
        to: {
            opacity: 1,
            top: '0px',
        },
        from: { 
            opacity: 0,
            top: '-15px',
        },
        delay: 1300,
    });

    return (
        <div>
            <main className={styles.main}>
                <animated.h1 style={welcome_spring} className={styles.welcome}>Restaurants</animated.h1>
            </main>
            <div className={styles.grid}>
                <animated.div style={card1_spring} className={styles.card}>
                    <img className={styles.card_img} src="/ecco.jpeg" />
                    <h1 className={styles.card_text}>Ecco</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$$$ | Italian | 1.4 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 5:30 PM - 10 PM</h1>
                </animated.div>
                <animated.div style={card2_spring} className={styles.card}>
                    <img className={styles.card_img} src="/five.jpeg" />
                    <h1 className={styles.card_text}>Five Daughter's Bakery</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$ | Donuts | 0.8 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 8 AM - 8 PM</h1>
                </animated.div>
                <Link href="/nav/menu"><animated.div style={card3_spring} className={styles.card}>
                    <img className={styles.card_img} src="/twisted.jpeg" />
                    <h1 className={styles.card_text}>Twisted Soul Cookhouse</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$$ | Southern | 1.7 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 12 PM - 10 PM</h1>
                </animated.div></Link>
                <animated.div style={card4_spring} className={styles.card}>
                    <img className={styles.card_img} src="/tassili.jpeg" />
                    <h1 className={styles.card_text}>Tassili's Raw Reality</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$$ | Vegan | 4.4 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 11 AM - 9 PM</h1>
                </animated.div>
                <animated.div style={card5_spring} className={styles.card}>
                    <img className={styles.card_img} src="/crickets.jpeg" />
                    <h1 className={styles.card_text}>J.R. Crickets Midtown</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$$ | Barbecue | 1.7 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 11 AM - 3 AM</h1>
                </animated.div>
                <animated.div style={card6_spring} className={styles.card}>
                    <img className={styles.card_img} src="/chicken.png" />
                    <h1 className={styles.card_text}>Choong Man Chicken</h1>
                    <div className={styles.card_overlay}></div>
                    <h1 className={styles.card_desc}>$$ | Korean BBQ | 0.1 mi</h1>
                    <h1 className={styles.card_hours}>Hours: 11 AM - 10:30 PM</h1>
                </animated.div>
            </div>
            <div className={styles.bottom_nav}>
                <Link href="/nav/deal"><img className={styles.bottom_deals} src="/deals.png" /></Link>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}
