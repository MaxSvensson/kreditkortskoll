import React from 'react';
import styles from './CardBenefits.module.css'
import { motion } from 'framer-motion';
 
// interface Props {
//     requirments : string[];
// }

const CardBenefits : React.FC = ({}) => {
    return <div id={styles.CardBenefits}>
                <div id={styles.content}>
                    <p id={styles.title}>Förmåner</p>
                    <p id={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium debitis tenetur quas molestiae sunt, quaerat natus alias fugit odit quos expedita tempore vitae reprehenderit odio dolorem? Recusandae beatae voluptates laboriosam?</p>
                    <ul>
                        <motion.li whileHover={{y:-2}}><i className="far fa-check-circle"></i>Bra försäkringar</motion.li>
                        <motion.li whileHover={{y:-2}}><i className="far fa-check-circle"></i>Bra bonusar</motion.li>
                        <motion.li whileHover={{y:-2}}><i className="far fa-check-circle"></i>Låg ränta 12,5%</motion.li>
                    </ul>
                </div>
        </div>
}
export default CardBenefits;