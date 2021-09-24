import styles from './Test.module.css';
import Image from 'next/image';

const Test : React.FC = () => {
    return <div id={styles.Test}>
        <div id={styles.imgContainer}>  
          <Image
            width={500}
            height={700}
            src="/images/test.svg"
            id={styles.Img}
            />
        </div>
    </div>
}

export default Test;