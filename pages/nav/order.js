import styles from '../../styles/Order.module.css'
import { useSpring, animated } from 'react-spring';
import React, {useState} from 'react';
import Link from 'next/link'

export default function Order() {
    const welcome_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 200,
    });
    const img_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 300,
    });
    const order_spring = useSpring({
        to: {
            opacity: 1,
        },
        from: { 
            opacity: 0,
        },
        delay: 500,
    });

    return(
        <div className={styles.container}>
            <animated.h1 style={welcome_spring} className={styles.welcome}>Thank you for your order!</animated.h1>
            <animated.img style={img_spring} className={styles.img} src="/check.png" />
            <animated.div style={order_spring} className={styles.content}>
                <h1 className={styles.desc}>Order number <h1 className={styles.code}>1F920X3</h1></h1>
            </animated.div>
            <div className={styles.bottom_nav}>
                <Link href="/nav/deal"><img className={styles.bottom_deals} src="/deals.png" /></Link>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}