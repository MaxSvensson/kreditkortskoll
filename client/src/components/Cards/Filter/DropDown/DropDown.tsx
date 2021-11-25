import React from 'react';
import styles from './DropDown.module.css'


interface Props {
    open: Boolean
}

const DropDown : React.FC<Props> = ({open}) => {
    return <div style={{display:open ? 'block' : 'none'}} id={styles.DropDown}>
        <div id={styles.main}>
                <h4>Kategori</h4>
                    <ul>
                        <li><input type="checkbox" /></li>
                        <li><input type="checkbox" /></li>
                        <li><input type="checkbox" /></li>
                    </ul>
                <h4>Kort utgivare</h4>
                    <ul>
                        <li><input type="checkbox" /></li>
                        <li><input type="checkbox" /></li>
                        <li><input type="checkbox" /></li>
                    </ul>
                <h4>Typ av kort</h4>
                    <ul>
                        <li><input type="checkbox" /></li>
                        <li><input type="checkbox" /></li>
                        <li><input type="checkbox" /></li>
                    </ul>
                <h4>Bonus</h4>
                    <ul>
                        <li><input type="checkbox" /></li>
                    </ul>
        </div>
        <div id={styles.bottom}>
            <button id={styles.clearBtn}>Ränsa</button>
            <button id={styles.filterBtn}>Filtrera</button>
        </div>
    </div>
}

export default DropDown