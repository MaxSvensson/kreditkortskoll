import { Col, Container, Row } from 'react-grid-system';
import styles from './Categories.module.css'
import Category from './Category/Category';


const Categories : React.FC = () => {
    return <div id={styles.Categories}>
        <div id={styles.content}>
            <p id={styles.title}>Kreditkort kategorier</p>
            <Container>
                <Row justify="center">
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Bra ränta" href="/kategorier/bra-ranta"/>
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Resor" href="/kategorier/resor" />
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Cashback" href="/kategorier/cashback" />
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Shopping" href="/kategorier/shopping" />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col sm={6} md={6} lg={3}>
                        <Category name="tanka" href="/kategorier/tanka" />
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Studenter" href="/kategorier/studenter" />
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Ingen årsavgift" href="/kategorier/ingen-arsavgift" />
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <Category name="Premium" href="/kategorier/premium" />
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default Categories;