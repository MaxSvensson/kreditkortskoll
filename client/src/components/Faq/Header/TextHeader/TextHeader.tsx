import React from 'react';
import styles from './TextHeader.module.css';

const TextHeader : React.FunctionComponent = () : JSX.Element => {
    return <div id={styles.TextHeader}>
        <div id={styles.HeadingTitle}>
            <h1>Vanligt ställda frågor</h1>
        </div>
        {/* <div id={styles.HeadingDescription}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellat non reiciendis deserunt dignissimos at suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?</p>
        </div> */}
</div>
}

export default TextHeader;