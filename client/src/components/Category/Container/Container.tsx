import styles from './Container.module.css';

const Container : React.FC = ({children}) => {
    return <div id={styles.Container}>
        {children}
    </div>
}

export default Container;