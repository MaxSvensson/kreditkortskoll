import styles from './Header.module.css';

import Container from '../../Container/Container';
import TextHeader from './TextHeader/TextHeader';

interface Props {
    name: string;
}


const Header : React.FC<Props> = ({name}) => {
    return <div id={styles.header}>
        <Container>
            <TextHeader name={name} />            
        </Container>
    </div>
}

export default Header