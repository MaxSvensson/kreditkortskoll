import styles from './Buttons.module.css';

import Link from 'next/link';

interface Props {
  text: string;
  href?: string;
  onClick? : () => void;
  className? : string;
  type: string;
}

const ButtonBlue : React.FunctionComponent<Props> = (props) => {
   return <Link href={props.href ? props.href : '#'}>
    <a className={`${styles.ButtonOrange} ${props.className} ${props.type === "outline" ? styles.outlinedBlue : props.type === "full" ? styles.fullBlue : null}`} onClick={props.onClick}>
        {props.text}
    </a>
  </Link>
}

export default ButtonBlue;