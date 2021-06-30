import React from 'react';
import styles from './Container.module.css'


const Container : React.FC = (props) => {
    return <div id={styles.Container}>
          {props.children}
      </div>
}

export default Container;