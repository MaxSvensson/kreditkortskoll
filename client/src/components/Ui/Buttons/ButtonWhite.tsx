import styles from './Buttons.module.css';

import Link from 'next/link';


interface Props {
  text: string;
  href?: string;
  onClick? : () => void;
  className? : string;
}

const ButtonWhite : React.FunctionComponent<Props> = (props) => {
   return <Link href={props.href ? props.href : '#'}>
    <a id={styles.ButtonWhite} onClick={props.onClick} className={props.className}>
        {props.text}
    </a>
  </Link>
}

export default ButtonWhite;