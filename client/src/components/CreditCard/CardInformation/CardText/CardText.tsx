import { Card } from '../../../../classes/CreditCard';
import BonusText from './BonusText/BonusText';
import styles from './CardText.module.css';
import CreditText from './CreditText/CreditText';
import InsuranceText from './InsuranceText/InsuranceText';

interface Props {
  creditcard : Card
}

const CardText : React.FunctionComponent<Props> = ({creditcard}) => {
  return <div id={styles.CardText}>  
      <BonusText bonustext={creditcard.bonustext} />
      <CreditText creditText={creditcard.creditText} />
      <InsuranceText insurancetext={creditcard.insuranceText} />
  </div>
}

export default CardText;