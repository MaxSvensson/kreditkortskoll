import styles from './Category.module.css';
import { motion } from 'framer-motion'
import Link from 'next/link';

interface Props {
    name: string;
    href: string;
}

const Category : React.FC<Props> = ({name, href}) => {
    return <Link href={href}>
        <motion.div whileHover={{scale:1.05, y:-1}} className={styles.Category}>
            <a>
                <i className="fas fa-gem"></i>
                <p>{name}</p>
            </a>
        </motion.div>
    </Link>
}

export default Category;