import React from 'react';
import styles from './Header.module.css';
import Container from '../../../hoc/Container/Container';

// Components
import TextHeader from './TextHeader/TextHeader';

interface Props {
        name: string;
        description: string;
}

const Header : React.FC<Props> = ({name, description}) : JSX.Element => {
    return <div id={styles.Header}>
            <Container>                 
                <TextHeader name={name} description={description} />            
            </Container>
    </div>
}


export default Header