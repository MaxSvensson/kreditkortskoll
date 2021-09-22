import React, {useContext} from 'react';
import styles from './Creditcard.module.css'

// Components
import Rating from '../Rating/Rating';
import { CreditCard } from '../../../classes/CreditCard';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ButtonOrange from '../Buttons/ButtonBlue';
import {Card as CreditCardInterface} from '../../../classes/CreditCard'
import { StateContext } from '../../../context/State';



const Creditcard : React.FunctionComponent<{card : CreditCard}> = ({card}) => {


    const [state, setState] = useContext<any>(StateContext)
    // const isCardCompare = compareState.checkIfCardCompare(card.properties._id)


    const addToCompare = (card : CreditCardInterface) => {
        let State = Object.assign({}, state);
        State.compareIds.push(card)
        setState(State)
    }   

    const removeFromCompare = (id : string) => {
        let State = Object.assign({}, state);
        const index = State.compareIds.findIndex((Card : CreditCardInterface) => Card._id === id)
        if(index < 0) return;
        State.compareIds.splice(index, 1);
        setState(State)
    }

    const isCardCompare = (id : string) : Boolean => {
        const exists = state.compareIds.find((Card : CreditCardInterface) => Card._id === id)

        return exists ? true : false;
    }

    return <React.Fragment>
       <div className={styles.card}> 
            <div className={styles.content}>
            <div>
            <h4 className={styles.Ismobile}>{card.properties.name}</h4>
            <span className={styles.Ismobile}><Rating className={styles.rating} rating={card.properties.rating}/></span>
            <img alt={`kreditkort ${card.properties.name}`} src={card.properties.img} />
            </div>
            <div>
                <h4 className={styles.IsComputer}>{card.properties.name}</h4>
                <span className={styles.IsComputer}><Rating rating={card.properties.rating} /></span>
                <div className={styles.properties}>
                    <div>
                        <ul>
                            {card.properties.properties.map(propertie => {
                                if(propertie.type === 'GOOD') {
                                    return <div className={styles.propertie}>
                                        <span className={styles.good}><i className="fas fa-check-circle"></i></span>
                                        <li key={propertie.propertie}>{propertie.propertie}</li>
                                    </div> 
                                }else {
                                    return <div className={styles.propertie}>
                                        <span className={styles.bad}><i className="fas fa-times-circle"></i></span>
                                        <li key={propertie.propertie}>{propertie.propertie}</li>
                                    </div>
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
                <div className={styles.specific}>
                    <ul>
                    {card.properties.specifics.map(specific => {
                        const text = specific.text.split(': ')
                        return <React.Fragment key={specific.text}>
                            <li><span style={{fontWeight:'bold'}}>{text[0]}:</span> <span>{text[1]}</span></li>
                        </React.Fragment>
                    })}
                    </ul>
                </div> 
            </div> 
            <div className={styles.btnBackground}>
                <div className={styles.buttons}>
                    <ButtonOrange type="full" text="Ansök nu!" href={`/Redirect?card=${card.properties._id}`} className={styles.ansökButton} /> 
                    <ButtonOrange type="outline" text="Mer information" href={`/kort/${card.properties._id.replace(/(\s)/g, '-')}`} className={styles.ansökButton} />
                </div>
            </div>
            <Tippy content={!isCardCompare(card.properties._id) ? 'Lägg till kreditkort i jämförelse' : 'Ta bort kreditkort ur jämförelse'}>
                <div onClick={() => isCardCompare(card.properties._id) ? removeFromCompare(card.properties._id) : addToCompare(card.properties)} className={styles.toCompare}>
                     {isCardCompare(card.properties._id) ? <i className="far fa-times-circle"></i> : <i className="fas fa-file-import"></i>}
                </div>
            </Tippy>
       </div>
   </React.Fragment>
}

export default Creditcard;