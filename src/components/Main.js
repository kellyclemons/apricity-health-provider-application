import React from 'react';
import Navbar from './Navbar.js';
import GenInfo from './GenInfo.js';

import PatientHRBarChart from './PatientHRBarChart.js';
import HeartRateBarChart from './HeartRateBarChart.js';
import HeartRateLineChart from './HeartRateLineChart.js';
import InteractiveLineChart from './InteractiveLineChart.js';
import Parent from './Parent.js';
// import {LineChart} from 'react-easy-chart';

// import PatientHeartRateChart from './PatientHeartRate.js';
// import {Patient} from './Patient.js';
// import {Graph} from './GraphType.js';
// import {BarChart} from 'react-easy-chart';
// import BarChart from './TestBarChart.js';
// import LineChart from './TestLineChart.js';
// import Custom from './Custom.js';


export default class Main extends React.Component {
  render() {
    return(
        <div className="main-elements">
          <Navbar />
          {/* <div className="main-title">Patient Monitoring</div> */}
          <GenInfo />
          <div className="chart-elements">
            <PatientHRBarChart />
            <InteractiveLineChart />
            <Parent />
            <HeartRateBarChart />
            {/* <LineChart
              axes
              dataPoints
              xDomainRange={[0, 100]}
              yDomainRange={[0, 100]}
              width={500}
              height={250}
              interpolate={'cardinal'}
              data={[
                [
                  { x: 10, y: 25 },
                  { x: 20, y: 10 },
                  { x: 30, y: 25 },
                  { x: 40, y: 10 },
                  { x: 50, y: 12 },
                  { x: 60, y: 25 }
                ], [
                  { x: 10, y: 40 },
                  { x: 20, y: 30 },
                  { x: 30, y: 25 },
                  { x: 40, y: 60 },
                  { x: 50, y: 22 },
                  { x: 60, y: 9 }
                ]
              ]}
            /> */}

            {/* <HeartRateLineChart /> */}
            {/* <PatientHeartRateChart />  */}
            {/* <Custom /> */}
            {/* <Graph /> */}
          </div>
        </div>
    );
  }
}
