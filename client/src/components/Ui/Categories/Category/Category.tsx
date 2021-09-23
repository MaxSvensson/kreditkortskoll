import styles from './Category.module.css';
import { motion } from 'framer-motion'

const Category : React.FC = () => {
    return <motion.div whileHover={{scale:1.05, y:-1}} className={styles.Category}>
        <i className="fas fa-gem"></i>
        <p>Räntor</p>
    </motion.div>
}

export default Category;