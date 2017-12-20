import React from 'react';
import Navbar from './Navbar.js';
import GenInfo from './GenInfo.js';

import PatientHRBarChart from './PatientHRBarChart.js';
import HeartRateBarChart from './HeartRateBarChart.js';
import HeartRateLineChart from './HeartRateLineChart.js';
import PatientHeartRateChart from './PatientHeartRate.js';

// import {Patient} from './Patient.js';
// import {Graph} from './GraphType.js';

// import InteractiveTest from './InteractiveLineChart.js';
// import BarChart from './TestBarChart.js';
// import LineChart from './TestLineChart.js';

export default class Main extends React.Component {
  render() {
    return(
        <div className="main-elements">
          <Navbar />
          {/* <div className="main-title">Patient Monitoring</div> */}
          <GenInfo />
          <div className="chart-elements">
            <PatientHRBarChart />
            <HeartRateBarChart />
            <HeartRateLineChart />
            <PatientHeartRateChart />

            {/* <InteractiveTest /> */}
            {/* <Graph /> */}
            {/* <Graph /> */}
            {/* <Graph /> */}
            {/* <Graph /> */}
          </div>
        </div>
    );
  }
}
