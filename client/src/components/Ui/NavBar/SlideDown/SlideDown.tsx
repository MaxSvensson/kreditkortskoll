import styles from './SlideDown.module.css';
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
    visible: Boolean
}

const SlideDown : React.FC<Props> = ({visible}) => {

    const variants = {
        open: {y: -70 },
        closed: {y: 0 },
      }

    return <motion.div variants={variants} animate={visible ? "closed" : "open"} id={styles.SlideDown}>
        <Link href="/">
          <a id={styles.loggo}>Kreditkortskoll.com</a>
        </Link>
        <ul>
          <motion.li whileHover={{y: -2}}><Link href="/kort"><a>Alla kreditkort</a></Link></motion.li>
          <motion.li whileHover={{y: -2}}><Link href="/kategorier"><a>Kategorier</a></Link></motion.li>
          <motion.li whileHover={{y: -2}}><Link href="/artiklar"><a>Artiklar</a></Link></motion.li>
          <motion.li whileHover={{y: -2}}><Link href="/faq"><a>FAQ</a></Link></motion.li>
        </ul>
    </motion.div>
}

export default SlideDown;