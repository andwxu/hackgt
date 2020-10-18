import styles from '../../styles/Owner.module.css';
import Link from 'next/link';

export default function Owner() {
    return(
        <div>
            <img src="/test.png" />
            <Link href="/"><div className={styles.logout}>Logout</div></Link>
        </div>
    )
}