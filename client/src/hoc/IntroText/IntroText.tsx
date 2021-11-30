import styles from './IntroText.module.css';

interface Props {
  title: string;
  text: string;
}

const IntroText : React.FC<Props> = ({title, text}) => {
  return <div id={styles.IntroText}>
    <h2>
      {title}
    </h2>
    <p>
      {text}
    </p>
  </div>
}

export default IntroText;