import { CreditCard } from '../../../classes/CreditCard';
import Creditcard from '../Creditcard/Creditcard';
import CompareContainer from '../../../state/compare';
interface Props {
  creditCards: CreditCard[];
}

const DisplayCards: React.FC<Props> = ({creditCards}) : any => {
  return creditCards.map(CreditCard => {
    return <CompareContainer.Provider>
      <Creditcard card={CreditCard} />
    </CompareContainer.Provider>
  })

}


export default DisplayCards;