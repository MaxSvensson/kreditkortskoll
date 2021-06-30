import React from 'react';
interface Props {
  insurancetext : string;
}

const InsuranceText : React.FunctionComponent<Props> = ({insurancetext}) => {
  return <React.Fragment>
      <h4>
        Försäkringar
      </h4>
      <p>
        {insurancetext}
      </p>
  </React.Fragment>
}

export default InsuranceText;