import styles from './Creditcard.module.css';

export interface Creditcard {
  name: string;
}

interface Props {
  creditcard: Creditcard
}

const Creditcard : React.FC<Props> = ({creditcard}) => {
    return <div id={styles.Creditcard}>
        <p>{creditcard.name}</p>
    </div>
}

export default Creditcard