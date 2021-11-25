import React from 'react';

interface Props {
  bonustext : string;
}

const BonusText : React.FunctionComponent<Props> = ({bonustext}) => {
  return <React.Fragment>
    <div>
    <h4>
      Bonus
    </h4>
    <p>
      {bonustext}
    </p>
    </div>
  </React.Fragment>
}

export default BonusText;