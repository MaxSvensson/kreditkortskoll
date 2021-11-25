import React from 'react';
import styles from './Header.module.css';
import Container from '../../../hoc/Container/Container';
import { CreditCard } from '../../../classes/CreditCard';

// Components
import { Row, Col } from 'react-grid-system';
import TextHeader from './TextHeader/TextHeader';
import CardBox from './CardBox/CardBox';
interface Props {
    creditCard : CreditCard
}

const Header = React.forwardRef<HTMLDivElement, Props>(({creditCard}, ref) : JSX.Element => {
    return <div ref={ref} id={styles.Header}>
            <Container>
                <Row justify="center" align="center">
                    <Col md={12} lg={7}>
                        <TextHeader cardName={creditCard.properties.name} cardDescription={creditCard.properties.description} />            
                    </Col>
                    <Col md={12} lg={5}>
                        <CardBox card={creditCard.properties} />
                    </Col>
                </Row>
            </Container>
    </div>
})


export default Header