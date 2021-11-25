import styles from './Accordion.module.css';

interface Faq {
    id: number;
    title: string;
    answer: string;
}
interface Props {
    faq: Faq;
    open: boolean;
    onClick: (id: number) => any
}

const QuestionAndAnswer : React.FC<Props> = ({faq, onClick, open}) => {
    return <div onClick={() => onClick(faq.id)} className={styles.AccordionItem} id={open ? styles.open : styles.close}>
        <a className={styles.AccordionLink}>
            {faq.title}
            <span id={styles.openicon}>
                <i className="fas fa-plus"></i>
            </span>
            <span id={styles.removeicon}>
                <i className="fas fa-minus" id={styles.remove}></i>
            </span>
        </a>
        <div className={styles.answer}>
            <p>
                {faq.answer}
            </p>
        </div>
    </div>
}

export default QuestionAndAnswer;