import HamburgerButton from '../Navigation/Navigation';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return <div id={styles.Navbar}>
      <Link href="/">
          <a id={styles.loggo}>Kreditkortskoll.com</a>
      </Link>
      <HamburgerButton />
    </div>
}


export default Navbar;