import styles from './Filter.module.css';


const Filter = () => {
    return <div className={styles.Filter}>
        <div>
            <button>Filter</button>
        </div>
        <div id={styles.filterbox}>

        </div>
    </div>
}

export default Filter;