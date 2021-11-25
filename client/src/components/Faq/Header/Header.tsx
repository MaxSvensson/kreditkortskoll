import React from 'react';
import styles from './Header.module.css';

// Components
import Container from '../../../hoc/Container/Container';
import TextHeader from './TextHeader/TextHeader';

const Header : React.FunctionComponent = () : JSX.Element => {
    return <div id={styles.Header}>
            <Container>
                <TextHeader />            
            </Container>
    </div>
}


export default Header