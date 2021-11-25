import styles from './NavigationBar.module.css';
import Link from 'next/link'

const NavigationBar = () => {
    return <div id={styles.NavigationBar}>
        <ul>
            <li><Link href="#"><a>Kortfakta & krav</a></Link></li>
            <li><Link href="#"><a>Bonusar & Förmåner</a></Link></li>
            <li><Link href="#"><a>Försäkringar</a></Link></li>
            <li><Link href="#"><a>Detaljerad information</a></Link></li>
        </ul>
    </div>
}

export default NavigationBar;