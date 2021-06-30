import React from 'react';
import styles from './CardRequirements.module.css'

interface Props {
    requirements : string[];
}

const CardRequirements : React.FunctionComponent<Props> = ({requirements}) => {
    return <div className={styles.krav}>
            <h1>Krav</h1>
            <ul>
                    {requirements.map(requirement => {
                        return <li key={requirement}><span className={styles.good}><i className="fas fa-check-circle"></i></span>{requirement}</li>
                    })}
            </ul>
        </div>
}
export default CardRequirements;