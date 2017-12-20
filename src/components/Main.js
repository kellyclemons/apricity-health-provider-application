import React from 'react';
import Navbar from './Navbar.js';
import GenInfo from './GenInfo.js';
// import {Patient} from './Patient.js';
import {Graph} from './GraphType.js';
import HeartRateBarChart from './HeartRateBarChart.js';
import HeartRateLineChart from './HeartRateLineChart.js';
import PatientHeartRateChart from './PatientHeartRate.js';
import PatientHRBarChart from './PatientHRBarChart.js';

// import InteractiveLineChart from './InteractiveLineChart.js';
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
            {/* <HeartRateBarChart /> */}
            {/* <HeartRateLineChart /> */}
            {/* <PatientHeartRateChart /> */}
            <PatientHRBarChart />
            {/* <InteractiveLineChart /> */}
            <Graph />
            <Graph />
            <Graph />
            {/* <Graph /> */}
          </div>
        </div>
    );
  }
}
