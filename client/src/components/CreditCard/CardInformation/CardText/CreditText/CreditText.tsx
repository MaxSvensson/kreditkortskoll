import React from 'react';

interface Props {
  creditText : string;
}

const CreditText : React.FunctionComponent<Props> = ({creditText}) => {
  return <React.Fragment>
    <div>
      <h4>
        Kredit
      </h4>
      <p>
        {creditText}
      </p>
    </div>
  </React.Fragment>
}

export default CreditText;