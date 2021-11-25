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
      <BonusText bonustext={creditcard.texts.bonusText} />
      <CreditText creditText={creditcard.texts.creditText} />
      <InsuranceText insurancetext={creditcard.texts.insuranceText} />
  </div>
}

export default CardText;