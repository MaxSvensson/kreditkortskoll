import React from 'react';
import styles from './SpecificsTable.module.css';

interface Props {
    cardsFacts : {_id?: number, text: string, value: string}[];
}

const CardTable : React.FunctionComponent<Props> = ({cardsFacts}) => {
    return <div className={styles.CardTable} >
        <h1>Fakta om kortet</h1>
        <table>
            <tbody>
                {cardsFacts.map(fact => {
                    return <tr key={fact.text}>
                    <td>{fact.text}</td>
                    <td>{fact.value}</td>
                </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default CardTable;