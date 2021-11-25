import styles from './CardBox.module.css';

// Interface
import { Card as CreditCardInterface } from "../../../../classes/CreditCard";

// Components
import Image from 'next/image';
import ButtonWhite from '../../../Ui/Buttons/ButtonWhite';

interface Props {
  card : CreditCardInterface
}

const CardBox : React.FunctionComponent<Props> = ({card}) => {
   return <div id={styles.CardBox}>
        <h2>{card.name}</h2>
        <Image
        src={card.img}
        alt={`Information kreditkort ${card.name}`}
        width={250}
        height={150}
        layout="intrinsic"
        quality={100}
        priority
        id={styles.Img}
        />
        <ButtonWhite type="outline" text="Ansök nu!" href={`/Redirect?card=${card.id}`} />
    </div>
}


export default CardBox;