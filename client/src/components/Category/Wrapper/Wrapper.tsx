import Container from '../Container/Container';
import Header from './Header/Header';
import styles from './Wrapper.module.css';

interface Props {
  name: string; 
}

const Wrapper : React.FC<Props> = ({children, name}) => {
    return <div id={styles.wrapper}>
      <Header name={name} />
      <Container>
        {children}
      </Container>
    </div>
}

export default Wrapper;