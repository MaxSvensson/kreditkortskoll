import React from 'react';
import styles from './Requirements.module.css'
import {motion} from 'framer-motion'

interface Props {
    requirments : string[];
}

const Requirements : React.FunctionComponent<Props> = ({requirments}) => {
    return <div id={styles.requirments}>
                <div id={styles.content}>
                    <p id={styles.title}>Krav</p>
                        <ul>
                            {requirments.map((requirments : string) => {
                                return <motion.li whileHover={{y:-2}} key={requirments}><span className={styles.good}><i className="far fa-check-circle"></i></span>{requirments}</motion.li>
                            })}
                        </ul>
                </div>
        </div>
}
export default Requirements;