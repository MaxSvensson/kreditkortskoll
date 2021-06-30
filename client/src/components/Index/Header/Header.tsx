import React from 'react';
import styles from './Header.module.css';
import Container from '../../../hoc/Container/Container';

// Components
import { Row, Col } from 'react-grid-system';
import TextHeader from './TextHeader/TextHeader';
import BestCard from './BestCard/BestCard';
import { BestCard as BestCardInterface } from '../../../interfaces/BestCard';
interface Props {
    bestcard : BestCardInterface
}

const Header : React.FunctionComponent<Props> = ({bestcard}) : JSX.Element => {
    return <div id={styles.Header}>
            <Container>
                <Row justify="center" align="center">
                    <Col md={12} lg={7}>
                        <TextHeader />            
                    </Col>
                    <Col md={12} lg={5}>
                        <BestCard bestcard={bestcard} />
                    </Col>
                </Row>
            </Container>
    </div>
}


export default Header