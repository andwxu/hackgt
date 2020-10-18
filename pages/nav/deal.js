import styles from '../../styles/Deal.module.css'
import { useSpring, animated } from 'react-spring';
import Link from 'next/link'

export default function Deal() {
    const img_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 200,
    });

    return (
        <div>
            <animated.img style={img_spring} className={styles.img} src="/diagram.png" />
            <div className={styles.bottom_nav}>
                <Link href="/nav/deal"><img className={styles.bottom_deals} src="/deals.png" /></Link>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}