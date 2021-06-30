import styles from './BestCard.module.css';

// Components
import Image from 'next/image';
import { BestCard as BestCardInterface } from '../../../../interfaces/BestCard';
import ButtonWhite from '../../../Ui/Buttons/ButtonWhite';

interface Props {
  bestcard : BestCardInterface;
}

const BestCard : React.FunctionComponent<Props> = ({bestcard}) => {
  return <div id={styles.BestCard}>
        <h3>Bästa kortet nu</h3>
        <Image
          src={bestcard.img}
          width={250}
          height={140}
          alt="Bästa kreditkortet just nu!"
        />
        {/* <h4>{bestcard.name}</h4> */}
        <p>{bestcard.description}</p>
        <ButtonWhite text="Ansök nu!" href={`/Redirect?card=${bestcard.name}`} className={styles.btn} />
  </div>
}

export default BestCard;