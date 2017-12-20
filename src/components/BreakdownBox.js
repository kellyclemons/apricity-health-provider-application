import React from 'react';

export class BreakdownBox extends React.Component {
  render() {
    return(
      <div className="gen-info-box">
        <div className="small-info-box">
          <div className="small-info-item">892</div>
          <div className="small-info-item">165</div>
          <div className="small-info-item">89%</div>
          <div className="small-info-item">120</div>
          <div className="small-info-item-last">12%</div>
        </div>
      </div>
    );
  }
}
