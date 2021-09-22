import styles from './UpdatedInformation.module.css'

// Components
import Image from 'next/image';
import Container from '../../../hoc/Container/Container';
import {Row , Col} from 'react-grid-system';
import ButtonWhite from '../../Ui/Buttons/ButtonWhite';


const UpdatedInformation = () => {
  return <div id={styles.UpdatedInformation}>
    <Container>
      <div id={styles.content}>  
      <Row>
        <Col md={12} lg={6}>
          <h4>Alltid updaterat</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vero consectetur voluptatum cum? Labore suscipit nobis cupiditate maiores at deleniti nesciunt obcaecati repellendus minima qui, quidem exercitationem excepturi eligendi non!</p>
          <ButtonWhite type="full" href="/kort" text="Utforska kort" className={styles.btn} /> 
        </Col>
        <Col md={12} lg={6}>
        <div id={styles.imgContainer}>  
          <Image
            width={500}
            height={700}
            src="/images/updated.svg"
            id={styles.Img}
            />
        </div>
        </Col>
      </Row>
      </div>
    </Container>
    {/* <Link href="/kort/alla-kreditkort">
      <a>Utforska kreditkort</a>
    </Link> */}
  </div>
}

export default UpdatedInformation;