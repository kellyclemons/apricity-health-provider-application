import React from 'react';
import {PieChart} from 'react-easy-chart';

export class ProgressBar extends React.Component {
  render() {
    return(
      <div className="gen-info-box">
        {/* <div className="progress-circle" data-progress="10"></div> */}
        {/* <div className="progress-circle" data-progress="25"></div> */}
        {/* <div className="progress-circle" data-progress="50"></div> */}
        {/* <div className="progress-circle" data-progress="75"></div> */}
        {/* <div className="progress-circle" data-progress="100"></div> */}
      <div className="pie-charts">
        <PieChart
          size={50}
          innerHoleSize={40}
          data={[
            { key: 'A', value: 100, color: '#d9d9d9' },
            { key: 'B', value: 200, color: '#74B9EE' },
            { key: 'C', value: 50, color: '#ffa100' }
          ]}
          />

          <PieChart
            size={50}
            innerHoleSize={40}
            data={[
              { key: 'D', value: 50, color: '#d9d9d9' },
              { key: 'E', value: 100, color: '#74B9EE' },
              { key: 'F', value: 250, color: '#ffa100' }
            ]}
            />

            </div>


      </div>
    );
  }
}
