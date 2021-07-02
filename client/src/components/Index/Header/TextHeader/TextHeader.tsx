import React from 'react';
import styles from './TextHeader.module.css';

const TextHeader : React.FunctionComponent = () : JSX.Element => {
    return <div id={styles.TextHeader}>
        <div id={styles.HeadingTitle}>
            <h1>Vi hjälper dig att hitta det bästa kortet för just dig...</h1>
        </div>
        <div id={styles.HeadingDescription}>
            <p>suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?</p>
        </div>
</div>
}

export default TextHeader;