import styles from './CompareTable.module.css';

// Components
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Interfaces
import { CompareCards } from '../../../interfaces/CompareCards';

interface Props {
    cards: CompareCards[];
}

const CompareTable : React.FunctionComponent<Props> = ({ cards }) : JSX.Element => {
    return <div id={styles.Compare}>
        <div id={styles.compareTable}>
                <table>
                        <tbody>
                            <tr className={styles.TopTr}>
                                <td style={{background:'white'}}></td>
                                {cards.map(card => {
                                return <td className={styles.info} key={card._id}><img src={card.url} /><br /> <b>{card.cardName}</b></td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Årsavgift: </td>
                                {cards.map(card => {
                                return card.Årsavgift == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Årsavgift}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Högsta kredit: </td>
                                {cards.map(card => {
                                return card.Högsta_kredit == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Högsta_kredit}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Ränta: </td>
                                {cards.map(card => {
                                return card.Ränta == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Ränta}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Effektiv ränta: </td>
                                {cards.map(card => {
                                return card.Effektiv_ränta == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Effektiv_ränta}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Räntefritt: </td>
                                {cards.map(card => {
                                return card.Räntefritt == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Räntefritt}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Bonus: </td>
                                {cards.map(card => {
                                return card.Bonus == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Bonus}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Försäkringar: </td>
                                {cards.map(card => {
                                return card.Försäkringar == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Försäkringar}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Concierge Service: </td>
                                {cards.map(card => {
                                return card.Concierge_Service == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Concierge_Service}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Korttyp: </td>
                                {cards.map(card => {
                                return card.Korttyp == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Korttyp}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Åldersgräns: </td>
                                {cards.map(card => {
                                return card.Åldersgräns == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Åldersgräns}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Inkomstkrav: </td>
                                {cards.map(card => {
                                return card.Inkomstkrav == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Inkomstkrav}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Valutapåslag i utlandet: </td>
                                {cards.map(card => {
                                return card.Valutapåslag_utlande == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Valutapåslag_utlande}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Uttagsavgift: </td>
                                {cards.map(card => {
                                return card.Uttagsavgift == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Uttagsavgift}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Minsta belopp att betala: </td>
                                {cards.map(card => {
                                return card.Minsta_belopp_betala == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Minsta_belopp_betala}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Betalningsanmärkningar: </td>
                                {cards.map(card => {
                                return card.Betalningsanmärkningar == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Betalningsanmärkningar}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Aviavgift: </td>
                                {cards.map(card => {
                                return card.Aviavgift == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Aviavgift}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Förseningsavgift: </td>
                                {cards.map(card => {
                                return card.Förseningsavgift == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Förseningsavgift}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Dröjsmålsränta: </td>
                                {cards.map(card => {
                                return card.Dröjsmålsränta == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Dröjsmålsränta}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Övertrasseringsavgift: </td>
                                {cards.map(card => {
                                return card.Övertrasseringsavgift == "?" ? <td className={styles.tdCard} key={card._id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card._id}>{card.Övertrasseringsavgift}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Recension: </td>
                                {cards.map(card => {
                                return <td className={styles.tdCard} key={card._id}><Link href={`/kort/${card.cardId}`}>Läs mer här</Link></td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}></td>
                                {cards.map(card => {
                                return <td style={{height:'80px'}} className={styles.tdCard}><a href={card.affliate} className={styles.AnsökLink}>Ansök nu!</a></td>
                                })}
                            </tr>
                        </tbody>
                    </table> 
            </div>
    </div>
}



export default CompareTable;