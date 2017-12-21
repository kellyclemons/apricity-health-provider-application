import React from 'react';
import {BarChart} from 'react-easy-chart';

export class ChartBox extends React.Component {
  render() {
    return(
      <div className="gen-info-box">
          <BarChart
            colorBars
    height={37.5}
    width={87.5}
    data={[
      {
        x: 'A',
        y: 46
      },
      {
        x: 'B',
        y: 26
      },
      {x: 'C', y: 40},
      {x: 'D', y: 20},
      {x: 'E', y: 40},
      {x: 'F', y: 25},
      {x: 'G', y: 5}
    ]}
  />
      </div>
    );
  }
}
