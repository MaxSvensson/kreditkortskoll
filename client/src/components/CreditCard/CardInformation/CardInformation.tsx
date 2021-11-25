import React from 'react';
import styles from './CardInformation.module.css';

// Components
import SpecificsTable from './SpecificsTable/SpecificsTable';
import CardInsurances from './CardInsurances/CardInsurances';
import CardRequirements from './CardRequierments/Requierments';
import { CreditCard } from '../../../classes/CreditCard';
import CardText from './CardText/CardText';
import CardBenefits from './CardBenefits/CardBenefits';

interface Props {
  creditcard: CreditCard;
}

const CardInformation: React.FunctionComponent<Props> = ({ creditcard }): JSX.Element => {
  return (
    <div>
      <div className={styles.row}>
        <SpecificsTable cardsFacts={creditcard.properties.information} />
        <CardInsurances insurances={creditcard.properties.insurances} />
      </div>
      <div className={styles.row}>
        <CardRequirements requirments={creditcard.properties.requirments} />
        <CardBenefits />
      </div>
      <CardText creditcard={creditcard.properties} />
    </div>
  );
};

export default CardInformation;
