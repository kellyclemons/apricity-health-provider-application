import React from 'react';

export class Patient extends React.Component {
  render() {
    return(
      <div className="patient gen-info-box">
        <div className="patient-avatar"></div>
        <div className="patient-details">
          <div className="patient-name">Harry Smith</div>
          <div className="patient-age">Age: 72</div>
          <div className="patient-other">Height: 5'11, Weight: 167lbs, BMI: xyz</div>
        </div>
      </div>
    );
  }
}
