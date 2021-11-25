import styles from './Test.module.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-grid-system';
import ButtonBlue from '../../Ui/Buttons/ButtonBlue';

const Test : React.FC = () => {
    return <div id={styles.Test}>
        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <div id={styles.imgContainer}>  
                        <Image
                            width={500}
                            height={450}
                            src="/images/test.svg"
                            id={styles.Img}
                        />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div id={styles.content}>
                        <h4>Vårt AI test</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non, rerum dolor dicta, maxime laboriosam natus aliquam amet modi dolorum fugiat eos ad. Eum, eaque. Non deleniti expedita molestiae animi.</p>
                        <ButtonBlue className={styles.Btn} type="outline" text="Starta testet"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Test;