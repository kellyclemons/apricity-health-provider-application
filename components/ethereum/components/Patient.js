import React from 'react';

export class Patient extends React.Component {
  render() {
    return(
      <div className="patient">
        <div className="patient-avatar"></div>
        <div className="patient-details">
          <div className="patient-name">Harry Smith</div>
          <div className="patient-age">72 years old</div>
          <div className="patient-other">Height: 5'11, Weight: 167lbs, BMI: function goes here</div>
        </div>
      </div>
    );
  }
}
