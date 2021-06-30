import React from 'react';

interface Props {
  creditText : string;
}

const CreditText : React.FunctionComponent<Props> = ({creditText}) => {
  return <React.Fragment>
      <h4>
        Kredit
      </h4>
      <p>
        {creditText}
      </p>
  </React.Fragment>
}

export default CreditText;