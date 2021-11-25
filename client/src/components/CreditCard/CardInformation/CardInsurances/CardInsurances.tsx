import React from 'react';
import styles from './CardInsurances.module.css'
import InsuranceCard from './InsuranceCard/InsuranceCard';

interface Props {
    insurances : { text: string; available: boolean; }[];
}

const CardInsurances : React.FunctionComponent<Props> = ({insurances}) => {
    return <div id={styles.insurances}>
            <div id={styles.content}>
                <p id={styles.title}>Försäkringar</p>
                <ul>
                    {insurances.map(insurance => {
                        if(insurance.available === true) {
                            return <InsuranceCard insurance={insurance} />
                        } 
                    })}
                </ul>
            </div>
        </div>
    
}

export default CardInsurances;