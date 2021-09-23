import { Col, Container, Row } from 'react-grid-system';
import styles from './Categories.module.css'
import Category from './Category/Category';


const Categories : React.FC = () => {
    return <div id={styles.Categories}>
        <div id={styles.content}>
            <p id={styles.title}>Kreditkort kategorier</p>
            <Container>
                <Row justify="center">
                    <Col md={3}>
                        <Category />
                    </Col>
                    <Col>
                        <Category />
                    </Col>
                    <Col md={3}>
                        <Category />
                    </Col>
                    <Col md={3}>
                        <Category />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col md={3}>
                        <Category />
                    </Col>
                    <Col md={3}>
                        <Category />
                    </Col>
                    <Col md={3}>
                        <Category />
                    </Col>
                    <Col md={3}>
                        <Category />
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default Categories;