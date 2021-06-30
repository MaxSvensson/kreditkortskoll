import styles from './Accordion.module.css';

interface Props {
    id: number;
    open: boolean;
    onClick: (id: number) => any
}

const QuestionAndAnswer : React.FC<Props> = ({id, onClick, open}) => {
    return <div onClick={() => onClick(id)} className={styles.AccordionItem} id={open ? styles.open : styles.close}>
        <a className={styles.AccordionLink}>
            How often do you go to the beach? {open}
            <span id={styles.openicon}>
                <i className="fas fa-plus"></i>
            </span>
            <span id={styles.removeicon}>
                <i className="fas fa-minus" id={styles.remove}></i>
            </span>
        </a>
        <div className={styles.answer}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium amet consequuntur, suscipit ratione distinctio laborum eaque recusandae fugit dolores blanditiis itaque obcaecati nulla repellat neque impedit, sit saepe odit aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium amet consequuntur, suscipit ratione distinctio laborum eaque recusandae fugit dolores blanditiis itaque obcaecati nulla repellat neque impedit, sit saepe odit aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium amet consequuntur, suscipit ratione distinctio laborum eaque recusandae fugit dolores blanditiis itaque obcaecati nulla repellat neque impedit, sit saepe odit aperiam.
            </p>
        </div>
    </div>
}

export default QuestionAndAnswer;