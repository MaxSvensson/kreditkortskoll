import React from 'react';

interface Props {
  bonustext : string;
}

const BonusText : React.FunctionComponent<Props> = ({bonustext}) => {
  return <React.Fragment>
    <h4>
      Bonus
    </h4>
    <p>
      {bonustext}
    </p>
  </React.Fragment>
}

export default BonusText;