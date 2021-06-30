import styles from './RedirectBox.module.css';
import { Card as CreditCardInterface } from '../../../classes/CreditCard';

interface Props {
  card : CreditCardInterface
}

const RedirectBox : React.FC<Props> = ({card}) => {
    return <div id={styles.RedirectBox}>
      <h1>{card.name}</h1>
      <p>Vi omredigerar nu dig</p>
    </div>
}

export default RedirectBox;