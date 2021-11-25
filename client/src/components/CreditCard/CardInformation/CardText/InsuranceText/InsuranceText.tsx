import React from 'react';
interface Props {
  insurancetext : string;
}

const InsuranceText : React.FunctionComponent<Props> = ({insurancetext}) => {
  return <React.Fragment>
    <div>
      <h4>
        Försäkringar
      </h4>
      <p>
        {insurancetext}
      </p>
    </div>
  </React.Fragment>
}

export default InsuranceText;