import styles from '../../styles/Restaurant.module.css'
import { useSpring, animated } from 'react-spring';
import React, {useState} from 'react';
import Link from 'next/link'

export default function Order() {
    return(
        <div>
            <h1 className={styles.welcome}>Thank you for your order!</h1>
            <div className={styles.bottom_nav}>
                <Link href="/nav/home"><img className={styles.bottom_img} src="/bottom.png" /></Link>
            </div>
        </div>
    )
}