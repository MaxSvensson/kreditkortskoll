import React from 'react';
import styles from './TextHeader.module.css';


interface Props {
    name: string;
    description: string;
}


const TextHeader : React.FC<Props> = ({name, description}) : JSX.Element => {
    return <div id={styles.TextHeader}>
        <div id={styles.HeadingTitle}>
            <h1>{name}</h1>
        </div>
            <div id={styles.HeadingDescription}>
                <p>{description}</p>
            </div>
</div>
}

export default TextHeader;