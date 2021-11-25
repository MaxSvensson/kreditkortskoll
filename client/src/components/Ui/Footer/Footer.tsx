import Link from 'next/link';
import styles from './Footer.module.css';

import {useRouter} from "next/router";

const Footer = () => {
  const router = useRouter()

    if(router.pathname === "/Redirect") return null;
    return <div id={styles.footer}>
      <div id={styles.logo}>
        <p>Kreditkortskoll.com</p>
      </div>
      <div id={styles.links}>
        <ul>
          <li>
            <Link href="/#">
              <a>Hem</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>Alla kreditkort</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>Artiklar</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>Legal</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>Om oss</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
}

export default Footer;