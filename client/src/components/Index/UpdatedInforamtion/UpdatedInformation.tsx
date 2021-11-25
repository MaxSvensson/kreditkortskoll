import styles from './UpdatedInformation.module.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-grid-system';
import ButtonWhite from '../../Ui/Buttons/ButtonWhite';

const UpdatedInformation : React.FC = () => {
    return <div id={styles.UpdatedInformation}>
        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <div id={styles.content}>
                        <h4>Vårt AI test</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non, rerum dolor dicta, maxime laboriosam natus aliquam amet modi dolorum fugiat eos ad. Eum, eaque. Non deleniti expedita molestiae animi.</p>
                        <ButtonWhite className={styles.Btn} type="full" text="Starta testet"/>
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div id={styles.imgContainer}>  
                        <Image
                            width={500}
                            height={550}
                            src="/images/updated.svg"
                            id={styles.Img}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default UpdatedInformation;