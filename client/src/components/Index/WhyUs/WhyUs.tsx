import React from 'react';
import styles from './WhyUs.module.css';


// Components
import Container from '../../../hoc/Container/Container';
import { Row, Col } from 'react-grid-system';
import FadeInSection from '../../../hoc/FadeInSection/FadeInSection';


const WhyUs : React.FunctionComponent = () : JSX.Element => {
    return <div id={styles.WhyUs}>
    <FadeInSection>        
        <Container>
            <h2>Hur kan vi hjälpa dig?</h2>
            <div className={styles.row}>
                <Row align="end" justify="end">
                        <Col sm={4}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                    {/* <i className="fas fa-money-check"></i> */}
                                    <p className={styles.title}><b>Opartiska jämförelser</b></p>
                            </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                    {/* <i className="fas fa-money-check"></i> */}
                                    <p className={styles.title}><b>Opartiska jämförelser</b></p>
                            </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={styles.text}>
                                <div className={styles.head}>
                                    {/* <i className="fas fa-money-check"></i> */}
                                    <p className={styles.title}><b>Opartiska jämförelser</b></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,</p>
                            </div>
                        </Col>
                </Row>
                <Row style={{marginTop:50}} align="end" justify="end">
                        <Col sm={4}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                    {/* <i className="fas fa-money-check"></i> */}
                                    <p className={styles.title}><b>Opartiska jämförelser</b></p>
                            </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                        <div className={styles.text}>
                            <div className={styles.head}>
                                    {/* <i className="fas fa-money-check"></i> */}
                                    <p className={styles.title}><b>Opartiska jämförelser</b></p>
                            </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className={styles.text}>
                                <div className={styles.head}>
                                    {/* <i className="fas fa-money-check"></i> */}
                                    <p className={styles.title}><b>Opartiska jämförelser</b></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,</p>
                            </div>
                        </Col>
                </Row>
            </div>
            {/* <div className={styles.row}>
                <Row align="end" justify="end">
                <div className={styles.text}>
                className={styles.head}<div>
                <div className={styles.text}>
                className={styles.head}<div>
                </div>
                <p className={styles.title}><b>Opartiska jämförelser</b></p>
                </div
                <Col sm={4}>
                </div>
                </Col>
                <Col sm={4}>
                <div className={styles.text}>
                className={styles.head}<div>
                </div>
                </Col>
                <Col sm={4}>
                <div className={styles.text}>
                className={styles.head}<div>
                </div
                <p className={styles.title}><b>Opartiska jämförelser</b></p>
                </div>
                </Col>
                </div>
                </Row>
            </div> */}
            </Container>
        </FadeInSection>
        </div>
    }

export default WhyUs;