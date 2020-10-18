import styles from '../../styles/Owner.module.css';
import Link from 'next/link';

export default function Owner() {
    return(
        <div>
            <h1 className={styles.header}>Restaurant Analytics</h1>
            <img src="/test.png" />
            <Link href="/"><div className={styles.logout}>Logout</div></Link>
        </div>
    )
}