import React from 'react';

// Components
import Container from '../../../hoc/Container/Container';
import { Row, Col } from 'react-grid-system';
import SpecificsTable from './SpecificsTable/SpecificsTable';
import CardInsurances from './CardInsurances/CardInsurances';
import CardRequirements from './CardRequierments/CardRequierments';
import { CreditCard } from '../../../classes/CreditCard';
import CardText from './CardText/CardText';

interface Props {
    creditcard : CreditCard
}

const CardInformation : React.FunctionComponent<Props> = ({creditcard}) : JSX.Element => {
    return <div>
        <Container>
        <Row>
            <Col md={12} lg={6}>
                <SpecificsTable cardsFacts={creditcard.properties.facts} />
            </Col>
           <Col md={12} lg={6}>
                <CardInsurances insurances={creditcard.properties.insurances} />
            </Col>
       </Row>
        <Row>
            <Col>
                <CardRequirements requirements={creditcard.properties.requirements} />
            </Col>
        </Row>
        <CardText creditcard={creditcard.properties} />
        </Container>
    </div>
}


export default CardInformation;