import React from 'react';
import {LineChart} from 'react-easy-chart';

export class BreakdownBox extends React.Component {
  render() {
    return(
      <div className="gen-info-box">
        {/* <div className="small-info-box">
          <div className="small-info-item">892</div>
          <div className="small-info-item">165</div>
          <div className="small-info-item">89%</div>
          <div className="small-info-item">120</div>
          <div className="small-info-item-last">12%</div>
        </div> */}

        <LineChart
    width={50}
    height={50}
    data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]}
  />
      </div>
    );
  }
}
