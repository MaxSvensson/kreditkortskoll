import React from 'react';
import styles from './SpecificsTable.module.css';

interface Props {
    cardsFacts : {key: string, value: string}[];
}

const CardTable : React.FunctionComponent<Props> = ({cardsFacts}) => {
    return <div id={styles.SpecificsTable} >
        <div id={styles.content}>
            <p id={styles.title}>Fakta om kortet</p>
            <table>
                <tbody>
                    {cardsFacts.map(information => {
                        return <tr key={information.key}>
                        <td>{information.key}</td>
                        <td>{information.value}</td>
                    </tr>
                    })}
                </tbody>
                <p id={styles.readMore}>Läs fullständing information <a href="/">här</a></p>
            </table>
        </div>
    </div>
}

export default CardTable;