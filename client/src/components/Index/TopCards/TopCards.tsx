import React from 'react';
import { CreditCards } from '../../../classes/CreditCards';
import DisplayCards from '../../Ui/DisplayCards/DisplayCards';
import styles from './TopCards.module.css';

const TopCards : React.FunctionComponent<{creditCards : CreditCards}> = ({creditCards}) : JSX.Element => {
    const cards = creditCards.cards.splice(2, 5)
    return <div id={styles.TopCards}>    
        <h4>Våra populäraste kreditkort</h4>
        <DisplayCards creditCards={cards} />
    </div>
}

export default TopCards;