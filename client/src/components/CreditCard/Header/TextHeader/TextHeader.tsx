import React from 'react';
import styles from './TextHeader.module.css';

interface Props {
    cardName: string;
    cardDescription: string;
}

const TextHeader : React.FunctionComponent<Props> = ({cardName, cardDescription}) : JSX.Element => {
    return <div id={styles.TextHeader}>
        <div id={styles.HeadingTitle}>
            <h1>{cardName}</h1>
        </div>
        <div id={styles.HeadingDescription}>
            <p>{cardDescription}</p>
        </div>
</div>
}

export default TextHeader;