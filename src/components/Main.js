import React from 'react';
import Navbar from './Navbar.js';
import GenInfo from './GenInfo.js';
// import {Patient} from './Patient.js';
import {Graph} from './GraphType.js';
import BloodPressureBarChart from './BloodPressureTest.js';
// import HeartRateBarChart from './HeartRateBarChart.js';
// import HeartRateLineChart from './HeartRateLineChart.js';
// import BarChart from './TestBarChart.js';
// import LineChart from './TestLineChart.js';

export default class Main extends React.Component {
  render() {
    return(
        <div className="main-elements">
          <Navbar />
          {/* <div className="main-title">Patient Monitoring</div> */}
          <GenInfo />
          <div>
            {/* <HeartRateBarChart /> */}
            {/* <HeartRateLineChart /> */}
            {/* <Patient /> */}
            {/* <BarChart /> */}
            {/* <LineChart /> */}
            <BloodPressureBarChart data={[5,10,1,3]} size={[500,500]} />
            <Graph />
            <Graph />
            <Graph />
          </div>
        </div>
    );
  }
}
