import React from 'react';
import styles from './Header.module.css';
import Container from '../../../hoc/Container/Container';

// Components
import TextHeader from './TextHeader/TextHeader';


const Header : React.FunctionComponent= () : JSX.Element => {
    return <div id={styles.Header}>
            <Container>
                    <TextHeader />            
            </Container>
    </div>
}


export default Header