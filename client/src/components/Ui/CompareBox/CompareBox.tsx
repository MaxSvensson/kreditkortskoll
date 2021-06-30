import React, { useContext } from 'react';
import styles from './CompareBox.module.css';
import Link from 'next/link';
import { Card as CreditCardInterface } from '../../../classes/CreditCard';
import { StateContext } from '../../../context/State';

const CompareBox = () => {

    const [state, setState] = useContext<any>(StateContext)

    const removeFromCompare = () => {
        let State = Object.assign({}, state);
        const index = State.compareIds.findIndex((Card : CreditCardInterface) => Card._id)
        if(index < 0) return;
        State.compareIds.splice(index, 1);
        setState(State)
    }
    console.log(state.compareIds.length)
    if(state.compareIds.length <= 0) return null;
    return <div className={styles.CompareBox}>
        <h2>Dina valda kreditkort</h2>
        <div className={styles.cards}>
            <ul>
                {state.compareIds.length > 0 ? <React.Fragment>
                {state.compareIds.map((card : CreditCardInterface) => {
                return <li>
                        <div className={styles.card}>
                        <img src={card.img} />
                            <Link href={`/kort/${card._id}`}>
                                <a className={styles.text}>{card.name}</a>    
                            </Link>
                            <i onClick={() => removeFromCompare()} className="fas fa-times-circle"></i>
                    </div>
                </li>
                })}
        </React.Fragment> : null}
        </ul>
        </div>
        <div className={styles.buttonBackground}>
            <Link href={`/jamfor?cards=${JSON.stringify(state.compareIds.map((Card : CreditCardInterface) => Card._id))}`} >
                <a id={styles.compareBtn}>Jämför {state.compareIds.length}st kreditkort</a>
            </Link>
        </div>
    </div>
}   

export default CompareBox;
