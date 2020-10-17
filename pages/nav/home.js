import styles from '../../styles/Home.module.css'
import { useSpring, animated } from 'react-spring';

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
            <div className={styles.bottom_nav}>
            </div>
        </div>
    )
}