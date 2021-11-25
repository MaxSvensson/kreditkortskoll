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
                                return <td className={styles.info} key={card.id}><img src={card.img} /><br /> <b>{card.name}</b></td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Årsavgift: </td>
                                {cards.map(card => {
                                return card.creditcard_information.annual_fee == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.annual_fee}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Högsta kredit: </td>
                                {cards.map(card => {
                                return card.creditcard_information.maximum_credit == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.maximum_credit}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Ränta: </td>
                                {cards.map(card => {
                                return card.creditcard_information.interest == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.interest}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Effektiv ränta: </td>
                                {cards.map(card => {
                                return card.creditcard_information.effective_interest == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.effective_interest}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Räntefritt: </td>
                                {cards.map(card => {
                                return card.creditcard_information.interest_free == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.interest_free}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Bonus: </td>
                                {cards.map(card => {
                                return card.creditcard_information.bonus == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.bonus}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Försäkringar: </td>
                                {cards.map(card => {
                                return card.creditcard_information.insurances == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.insurances}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Concierge Service: </td>
                                {cards.map(card => {
                                return card.creditcard_information.concierge_Service == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.concierge_Service}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Korttyp: </td>
                                {cards.map(card => {
                                return card.creditcard_information.card_type == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.card_type}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Åldersgräns: </td>
                                {cards.map(card => {
                                return card.creditcard_information.age_limit == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.age_limit}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Inkomstkrav: </td>
                                {cards.map(card => {
                                return card.creditcard_information.income_requirement == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.income_requirement}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Valutapåslag i utlandet: </td>
                                {cards.map(card => {
                                return card.creditcard_information.Currency_surcharge_abroad == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.Currency_surcharge_abroad}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Uttagsavgift: </td>
                                {cards.map(card => {
                                return card.creditcard_information.withdrawal_fee == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.withdrawal_fee}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Minsta belopp att betala: </td>
                                {cards.map(card => {
                                return card.creditcard_information.minimum_payment_amount == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.minimum_payment_amount}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Betalningsanmärkningar: </td>
                                {cards.map(card => {
                                return card.creditcard_information.payment_remarks == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.payment_remarks}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Aviavgift: </td>
                                {cards.map(card => {
                                return card.creditcard_information.avia_fee == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.avia_fee}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Förseningsavgift: </td>
                                {cards.map(card => {
                                return card.creditcard_information.late_fee == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.late_fee}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Dröjsmålsränta: </td>
                                {cards.map(card => {
                                return card.creditcard_information.interest_on_arrears == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.interest_on_arrears}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Övertrasseringsavgift: </td>
                                {cards.map(card => {
                                return card.creditcard_information.overdraft_fee == "?" ? <td className={styles.tdCard} key={card.id}><Tippy content={<span>Vi saknar tyvärr denna information</span>}><i style={{color:'rgba(0,0,0,.25)'}} className="fas fa-question-circle"></i></Tippy></td> : <td className={styles.tdCard} key={card.id}>{card.creditcard_information.overdraft_fee}</td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}>Recension: </td>
                                {cards.map(card => {
                                return <td className={styles.tdCard} key={card.id}><Link href={`/kort/${card.name}`}>Läs mer här</Link></td>
                                })}
                            </tr>
                            <tr>
                                <td className={styles.Statment}></td>
                                {cards.map(card => {
                                return <td style={{height:'80px'}} className={styles.tdCard}><a href={card.url} className={styles.AnsökLink}>Ansök nu!</a></td>
                                })}
                            </tr>
                        </tbody>
                    </table> 
            </div>
    </div>
}



export default CompareTable;