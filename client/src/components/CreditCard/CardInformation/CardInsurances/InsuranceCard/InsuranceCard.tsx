import styles from './InsuranceCard.module.css'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {
    insurance: {text: string, available: boolean }
}

const InsuranceCard : React.FC<Props> = ({insurance}) => {
    return <Link href={`/forsakringar/${insurance.text}`}><motion.li id={styles.InsuranceCard} whileHover={{y:-2}} key={insurance.text}><a><p><i className="far fa-check-circle"></i>{insurance.text}</p></a></motion.li></Link>
    
}

export default InsuranceCard