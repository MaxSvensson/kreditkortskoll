import React from 'react';
import styles from './CardInsurances.module.css'

interface Props {
    insurances : {_id?: number, text: string, type: string }[];
}

const CardInsurances : React.FunctionComponent<Props> = ({insurances}) => {
    return <div className={styles.försäkring}>
            <h1>Försäkringar</h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Ingår</h2>
                    <ul>
                        {insurances.map(insurance => {
                            if(insurance.type === 'GOOD') {
                                return <li key={insurance.text}><span className={styles.good}><i className="fas fa-check-circle"></i></span>{insurance.text}</li>
                            }
                        })}
                    </ul>
                </div>
                <div className={styles.right}>
                    <h2>Ingår inte</h2>
                    <ul>
                        {insurances.map(insurance => {
                            if(insurance.type === 'BAD') {
                                return <li key={insurance.text}><span className={styles.bad}><i className="fas fa-times-circle"></i></span>{insurance.text}</li>
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    
}

export default CardInsurances;